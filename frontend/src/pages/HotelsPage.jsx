import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from '../components/cards/HotelCard';
import TravelSearchWidget from '../components/search/TravelSearchWidget';
import useAsync from '../hooks/useAsync';
import { defaultFlightSearch, defaultHotelSearch } from '../assets/mockData';
import { travelService } from '../services/travelService';

function HotelsPage() {
  const location = useLocation();
  const [filters, setFilters] = useState(defaultHotelSearch);
  const { data, loading } = useAsync(() => travelService.searchHotels(filters), [filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilters({
      destination: params.get('destination') || defaultHotelSearch.destination,
      checkIn: params.get('checkIn') || '',
      checkOut: params.get('checkOut') || '',
      guests: params.get('guests') || defaultHotelSearch.guests
    });
  }, [location.search]);

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pill">Hotel Search</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Search stays with a lighter, faster booking-style form</h1>
        <p className="mt-4 text-slate-600">
          Browse hotel options with a Skyscanner-inspired search layout tuned for ORBITRUE travel planning.
        </p>
      </div>

      <div className="mt-10">
        <TravelSearchWidget
          key={`hotels-${location.search}`}
          initialTab="hotels"
          initialFlightValues={defaultFlightSearch}
          initialHotelValues={filters}
          onFlightSearch={() => {}}
          onHotelSearch={setFilters}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {loading ? <div className="glass-card p-6 text-slate-600">Loading hotel options...</div> : null}
        {!loading && data?.length ? data.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />) : null}
        {!loading && !data?.length ? <div className="glass-card p-6 text-slate-600">No hotels matched your filters.</div> : null}
      </div>
    </section>
  );
}

export default HotelsPage;
