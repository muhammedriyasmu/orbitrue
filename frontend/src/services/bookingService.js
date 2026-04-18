import api from './api';
import { storage } from './storage';
import { authService } from './authService';

const bookingKey = 'travel_bookings';
const paymentKey = 'travel_payments';
const visaKey = 'travel_visa_requests';

const currentUserId = () => authService.getSession()?.user?.id;

export const bookingService = {
  async createBooking(payload) {
    try {
      const { data } = await api.post('/bookings', payload);
      return data;
    } catch {
      const bookings = storage.read(bookingKey, []);
      const booking = {
        ...payload,
        _id: crypto.randomUUID(),
        user: currentUserId(),
        status: 'pending',
        paymentStatus: 'pending',
        createdAt: new Date().toISOString()
      };
      storage.write(bookingKey, [booking, ...bookings]);
      return booking;
    }
  },
  async getMyBookings() {
    try {
      const { data } = await api.get('/bookings/me');
      return data;
    } catch {
      return storage.read(bookingKey, []).filter((item) => item.user === currentUserId());
    }
  },
  async getPaymentHistory() {
    try {
      const { data } = await api.get('/bookings/payments/history');
      return data;
    } catch {
      return storage.read(paymentKey, []).filter((item) => item.user === currentUserId());
    }
  },
  async createPaymentOrder({ amount, bookingId }) {
    try {
      const { data } = await api.post('/payments/order', { amount, bookingId });
      return data;
    } catch {
      return {
        order: { id: `order_${Date.now()}`, amount: Math.round(Number(amount) * 100), currency: 'INR' }
      };
    }
  },
  async verifyPayment(payload) {
    try {
      const { data } = await api.post('/payments/verify', payload);
      return data;
    } catch {
      const payments = storage.read(paymentKey, []);
      const payment = {
        _id: crypto.randomUUID(),
        user: currentUserId(),
        amount: payload.amount,
        razorpayOrderId: payload.razorpayOrderId,
        razorpayPaymentId: payload.razorpayPaymentId,
        status: 'paid',
        createdAt: new Date().toISOString()
      };
      storage.write(paymentKey, [payment, ...payments]);
      const bookings = storage.read(bookingKey, []);
      storage.write(
        bookingKey,
        bookings.map((item) =>
          item._id === payload.bookingId ? { ...item, status: 'confirmed', paymentStatus: 'paid', payment: payment._id } : item
        )
      );
      return { success: true, payment };
    }
  },
  async submitVisa(formData) {
    try {
      const { data } = await api.post('/visa', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      return data;
    } catch {
      const entries = storage.read(visaKey, []);
      const visa = {
        _id: crypto.randomUUID(),
        user: currentUserId(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        passportNumber: formData.get('passportNumber'),
        destinationCountry: formData.get('destinationCountry'),
        travelDate: formData.get('travelDate'),
        status: 'submitted',
        createdAt: new Date().toISOString()
      };
      storage.write(visaKey, [visa, ...entries]);
      return visa;
    }
  },
  async getMyVisaRequests() {
    try {
      const { data } = await api.get('/visa/me');
      return data;
    } catch {
      return storage.read(visaKey, []).filter((item) => item.user === currentUserId());
    }
  },
  async getAdminOverview() {
    try {
      const [analytics, users, bookings, visas] = await Promise.all([
        api.get('/admin/analytics'),
        api.get('/admin/users'),
        api.get('/bookings/admin/all'),
        api.get('/visa/admin/all')
      ]);
      return { analytics: analytics.data, users: users.data, bookings: bookings.data, visas: visas.data };
    } catch {
      const bookings = storage.read(bookingKey, []);
      const payments = storage.read(paymentKey, []);
      return {
        analytics: {
          totalBookings: bookings.length,
          totalRevenue: payments.reduce((sum, item) => sum + Number(item.amount || 0), 0),
          activeUsers: storage.read('travel_users', []).length,
          visaApplications: storage.read(visaKey, []).length
        },
        users: storage.read('travel_users', []).map(({ password, ...user }) => user),
        bookings,
        visas: storage.read(visaKey, [])
      };
    }
  }
};
