import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User.js';

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });

const dbUnavailable = (res) => res.status(503).json({ message: 'Database is not connected' });

export const registerUser = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const { name, email, password, phone } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ name, email, password, phone });

  res.status(201).json({
    token: generateToken(user._id),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone
    }
  });
};

export const loginUser = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    token: generateToken(user._id),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone
    }
  });
};

export const getMe = async (req, res) => {
  res.json(req.user);
};
