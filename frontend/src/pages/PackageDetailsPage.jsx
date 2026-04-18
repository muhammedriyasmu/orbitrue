import { Link, useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { travelService } from '../services/travelService';

function PackageDetailsPage() {
  const { slug } = useParams();
  const { data: travelPackage, loading } = useAsync(() => travelService.getPackage(slug), [slug]);

  if (loading) {
    return (
      <section className="container-width section-spacing">
        <div className="glass-card p-6 text-slate-600">Loading package details...</div>
      </section>
    );
  }

  if (!travelPackage) {
    return (
      <section className="container-width section-spacing">
        <div className="glass-card p-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Package not found</h1>
          <p className="mt-3 text-slate-600">The itinerary you requested is no longer available.</p>
          <Link to="/packages" className="primary-button mt-6">
            Back to Packages
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-width section-spacing">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card overflow-hidden">
          <img src={travelPackage.images?.[0]} alt={travelPackage.title} className="h-[24rem] w-full object-cover" />
          <div className="p-6">
            <p className="pill">{travelPackage.featured ? 'Featured Journey' : 'Signature Journey'}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{travelPackage.title}</h1>
            <p className="mt-4 text-slate-600">{travelPackage.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Overview</p>
            <div className="mt-5 space-y-3 text-slate-600">
              <p>
                <span className="text-slate-900">Destination:</span> {travelPackage.destination}
              </p>
              <p>
                <span className="text-slate-900">Duration:</span> {travelPackage.duration}
              </p>
              <p>
                <span className="text-slate-900">Starting price:</span> ${travelPackage.price}
              </p>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Included</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {travelPackage.includes?.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link to="/booking" state={{ itemType: 'package', item: travelPackage, amount: travelPackage.price }} className="primary-button w-full">
            Continue to Booking
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PackageDetailsPage;

