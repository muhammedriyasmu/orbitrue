import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookingService } from '../services/bookingService';

function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingContext = location.state;
  const [traveler, setTraveler] = useState({ name: '', email: '', phone: '', notes: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTraveler((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      await bookingService.createBooking({
        itemType: bookingContext?.itemType || 'custom',
        item: bookingContext?.item || null,
        amount: bookingContext?.amount || 0,
        traveler
      });
      setStatus({ loading: false, error: '', success: 'Booking saved successfully.' });
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setStatus({ loading: false, error: error.message || 'Unable to create booking.', success: '' });
    }
  };

  return (
    <section className="container-width section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6">
          <p className="pill">Booking Summary</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Confirm your travel request</h1>
          <div className="mt-6 space-y-3 text-slate-600">
            <p>
              <span className="text-slate-900">Type:</span> {bookingContext?.itemType || 'Custom request'}
            </p>
            <p>
              <span className="text-slate-900">Amount:</span> ${bookingContext?.amount || 0}
            </p>
            <p>
              <span className="text-slate-900">Selection:</span> {bookingContext?.item?.title || bookingContext?.item?.name || bookingContext?.item?.airline || 'Travel service'}
            </p>
          </div>
        </div>

        <form className="glass-card p-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-slate-900">Traveler details</h2>
          <div className="mt-6 space-y-4">
            <input className="input-shell" name="name" placeholder="Full name" value={traveler.name} onChange={handleChange} required />
            <input className="input-shell" type="email" name="email" placeholder="Email" value={traveler.email} onChange={handleChange} required />
            <input className="input-shell" name="phone" placeholder="Phone number" value={traveler.phone} onChange={handleChange} required />
            <textarea className="input-shell min-h-28 py-3" name="notes" placeholder="Special requests" value={traveler.notes} onChange={handleChange} />
          </div>
          {status.error ? <p className="mt-4 text-sm text-rose-600">{status.error}</p> : null}
          {status.success ? <p className="mt-4 text-sm text-emerald-600">{status.success}</p> : null}
          <button className="primary-button mt-6 w-full" type="submit" disabled={status.loading}>
            {status.loading ? 'Saving booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingPage;


