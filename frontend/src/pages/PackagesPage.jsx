import PackageCard from '../components/cards/PackageCard';
import useAsync from '../hooks/useAsync';
import { travelService } from '../services/travelService';

function PackagesPage() {
  const { data, loading } = useAsync(() => travelService.getPackages(), []);

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pill">Travel Packages</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Curated packages built around real travel goals</h1>
        <p className="mt-4 text-slate-600">
          Explore itineraries that combine flights, stays, and concierge support in one booking-ready plan.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {loading ? <div className="glass-card p-6 text-slate-600">Loading packages...</div> : null}
        {!loading && data?.length
          ? data.map((travelPackage) => <PackageCard key={travelPackage._id || travelPackage.slug} travelPackage={travelPackage} />)
          : null}
        {!loading && !data?.length ? <div className="glass-card p-6 text-slate-600">No packages are available right now.</div> : null}
      </div>
    </section>
  );
}

export default PackagesPage;

