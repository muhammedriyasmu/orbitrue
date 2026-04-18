import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-2xl glass-card p-8 text-center">
        <p className="pill">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The route you requested does not exist in this build.</p>
        <Link to="/" className="primary-button mt-6">
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;

