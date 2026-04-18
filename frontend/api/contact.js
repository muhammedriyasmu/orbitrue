import nodemailer from 'nodemailer';

const createTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
};

const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);
const validatePhone = (value) => /^[0-9+\-\s]{8,}$/.test(value);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name = '', email = '', phone = '', message = '' } = req.body || {};

  if (!name.trim() || !validateEmail(email) || !validatePhone(phone) || message.trim().length < 12) {
    return res.status(400).json({ success: false, message: 'Invalid form submission' });
  }

  const transporter = createTransporter();

  if (!transporter) {
    return res.status(500).json({ success: false, message: 'SMTP is not configured' });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipient,
      replyTo: email,
      subject: `ORBITRUE Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2 style="color: #0f4c81;">New ORBITRUE Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact mail failed', error);
    return res.status(500).json({ success: false, message: 'Message could not be sent' });
  }
}
