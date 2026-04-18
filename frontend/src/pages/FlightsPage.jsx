import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightCard from '../components/cards/FlightCard';
import TravelSearchWidget from '../components/search/TravelSearchWidget';
import useAsync from '../hooks/useAsync';
import { travelService } from '../services/travelService';
import { defaultFlightSearch, defaultHotelSearch } from '../assets/mockData';

function FlightsPage() {
  const location = useLocation();
  const [filters, setFilters] = useState(defaultFlightSearch);
  const { data, loading } = useAsync(() => travelService.searchFlights(filters), [filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilters({
      from: params.get('from') || defaultFlightSearch.from,
      to: params.get('to') || defaultFlightSearch.to,
      departureDate: params.get('departureDate') || '',
      returnDate: params.get('returnDate') || '',
      passengers: params.get('passengers') || defaultFlightSearch.passengers,
      class: params.get('class') || defaultFlightSearch.class
    });
  }, [location.search]);

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pill">Flight Search</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Search flights with a cleaner metasearch-style form</h1>
        <p className="mt-4 text-slate-600">
          Compare routes, dates, and cabin class using the refreshed ORBITRUE search experience.
        </p>
      </div>

      <div className="mt-10">
        <TravelSearchWidget
          key={`flights-${location.search}`}
          initialTab="flights"
          initialFlightValues={filters}
          initialHotelValues={defaultHotelSearch}
          onFlightSearch={setFilters}
          onHotelSearch={() => {}}
        />
      </div>

      <div className="mt-8 space-y-5">
        {loading ? <div className="glass-card p-6 text-slate-600">Loading flight options...</div> : null}
        {!loading && data?.length ? data.map((flight) => <FlightCard key={flight.id} flight={flight} />) : null}
        {!loading && !data?.length ? <div className="glass-card p-6 text-slate-600">No flights matched your search.</div> : null}
      </div>
    </section>
  );
}

export default FlightsPage;
