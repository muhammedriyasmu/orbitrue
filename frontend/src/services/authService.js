import { storage } from './storage';
import api from './api';

const authKey = 'travel_auth';
const usersKey = 'travel_users';

const persistAuth = (payload) => {
  storage.write(authKey, payload);
  return payload;
};

export const authService = {
  async login(values) {
    try {
      const { data } = await api.post('/auth/login', values);
      return persistAuth(data);
    } catch (error) {
      const users = storage.read(usersKey, []);
      const matched = users.find((item) => item.email === values.email && item.password === values.password);
      if (!matched) {
        throw new Error(error.response?.data?.message || 'Invalid credentials');
      }
      return persistAuth({
        token: 'demo-token',
        user: { ...matched, password: undefined }
      });
    }
  },
  async register(values) {
    try {
      const { data } = await api.post('/auth/register', values);
      return persistAuth(data);
    } catch {
      const users = storage.read(usersKey, []);
      const nextUser = { ...values, id: crypto.randomUUID() };
      storage.write(usersKey, [...users, nextUser]);
      return persistAuth({
        token: 'demo-token',
        user: { ...nextUser, password: undefined }
      });
    }
  },
  logout() {
    localStorage.removeItem(authKey);
  },
  getSession() {
    return storage.read(authKey, null);
  }
};
