import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });
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
      await login(values);
      navigate(location.state?.from || '/dashboard', { replace: true });
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-md glass-card p-8">
        <p className="pill">Login</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Welcome back</h1>
        <p className="mt-3 text-slate-600">Sign in to continue with bookings, payments, and visa tracking.</p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input className="input-shell" type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} required />
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
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Need an account?{' '}
          <Link to="/register" className="text-sky-700">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;


