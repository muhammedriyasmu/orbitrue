import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [values, setValues] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(values);
      navigate('/dashboard', { replace: true });
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-md glass-card p-8">
        <p className="pill">Register</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Create your ORBITRUE account</h1>
        <p className="mt-3 text-slate-600">Save bookings, track requests, and come back to your plans anytime.</p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input className="input-shell" name="name" placeholder="Full name" value={values.name} onChange={handleChange} required />
          <input className="input-shell" type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} required />
          <input className="input-shell" name="phone" placeholder="Phone number" value={values.phone} onChange={handleChange} required />
          <input
            className="input-shell"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <button className="primary-button w-full" type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-700">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;


