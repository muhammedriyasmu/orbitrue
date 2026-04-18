import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BedDouble, BriefcaseBusiness, CalendarRange, ChevronRight, Hotel, MapPinned, PlaneTakeoff, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packageFeatures, visaHighlights } from '../../assets/mockData';

const tabs = [
  { id: 'flights', label: 'Flights', icon: PlaneTakeoff },
  { id: 'hotels', label: 'Hotels', icon: Hotel },
  { id: 'packages', label: 'Packages', icon: MapPinned },
  { id: 'visa', label: 'Visa Help', icon: ShieldCheck }
];

const flightClasses = ['Economy', 'Premium Economy', 'Business', 'First'];

function TravelSearchWidget({
  initialTab = 'flights',
  initialFlightValues,
  initialHotelValues,
  onFlightSearch,
  onHotelSearch,
  className = ''
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tripType, setTripType] = useState('Round trip');
  const [flightValues, setFlightValues] = useState(initialFlightValues);
  const [hotelValues, setHotelValues] = useState(initialHotelValues);

  const handleFlightChange = (event) => {
    const { name, value } = event.target;
    setFlightValues((current) => ({ ...current, [name]: value }));
  };

  const handleHotelChange = (event) => {
    const { name, value } = event.target;
    setHotelValues((current) => ({ ...current, [name]: value }));
  };

  const handleFlightSubmit = (event) => {
    event.preventDefault();
    onFlightSearch?.(flightValues);
  };

  const handleHotelSubmit = (event) => {
    event.preventDefault();
    onHotelSearch?.(hotelValues);
  };

  return (
    <div className={`rounded-[2rem] border border-sky-100 bg-white/95 p-3 shadow-[0_28px_90px_rgba(56,189,248,0.16)] backdrop-blur sm:p-5 ${className}`}>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:overflow-visible">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex min-w-0 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition sm:shrink-0 sm:px-4 ${
              activeTab === tab.id ? 'bg-sky-700 text-white shadow-sm' : 'bg-sky-50 text-slate-700 hover:bg-sky-100'
            }`}
          >
            <tab.icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5"
        >
          {activeTab === 'flights' ? (
            <form onSubmit={handleFlightSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:overflow-visible">
                {['Round trip', 'One way', 'Multi-city'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTripType(option)}
                    className={`min-w-0 rounded-full px-2 py-2 text-[11px] font-semibold transition sm:px-4 sm:text-sm ${
                      tripType === option ? 'bg-sky-100 text-sky-800' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate">{option}</span>
                  </button>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <label className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From</span>
                  <input className="mt-2 w-full bg-transparent text-base font-semibold text-slate-900 outline-none sm:text-lg" name="from" value={flightValues.from} onChange={handleFlightChange} placeholder="City or airport" />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">To</span>
                  <input className="mt-2 w-full bg-transparent text-base font-semibold text-slate-900 outline-none sm:text-lg" name="to" value={flightValues.to} onChange={handleFlightChange} placeholder="Destination" />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><CalendarRange className="h-3.5 w-3.5" />Depart</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="date" name="departureDate" value={flightValues.departureDate} onChange={handleFlightChange} />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-sky-50 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><CalendarRange className="h-3.5 w-3.5" />Return</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="date" name="returnDate" value={flightValues.returnDate} onChange={handleFlightChange} disabled={tripType === 'One way'} />
                </label>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto]">
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><Users className="h-3.5 w-3.5" />Travellers</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="number" min="1" name="passengers" value={flightValues.passengers} onChange={handleFlightChange} />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><BriefcaseBusiness className="h-3.5 w-3.5" />Cabin</span>
                  <select className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" name="class" value={flightValues.class} onChange={handleFlightChange}>
                    {flightClasses.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <button className="primary-button min-h-14 w-full gap-2 rounded-[1.4rem] px-6 md:min-h-16" type="submit">
                  Search flights
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          ) : null}

          {activeTab === 'hotels' ? (
            <form onSubmit={handleHotelSubmit} className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <label className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 xl:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Destination</span>
                  <input className="mt-2 w-full bg-transparent text-base font-semibold text-slate-900 outline-none sm:text-lg" name="destination" value={hotelValues.destination} onChange={handleHotelChange} placeholder="City, area, or hotel" />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><CalendarRange className="h-3.5 w-3.5" />Check in</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="date" name="checkIn" value={hotelValues.checkIn} onChange={handleHotelChange} />
                </label>
                <label className="rounded-[1.4rem] border border-slate-200 bg-sky-50 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><CalendarRange className="h-3.5 w-3.5" />Check out</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="date" name="checkOut" value={hotelValues.checkOut} onChange={handleHotelChange} />
                </label>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto]">
                <label className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><Users className="h-3.5 w-3.5" />Guests</span>
                  <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none sm:text-base" type="number" min="1" name="guests" value={hotelValues.guests} onChange={handleHotelChange} />
                </label>
                <div className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><BedDouble className="h-3.5 w-3.5" />Stay style</span>
                  <p className="mt-2 font-semibold text-slate-900">Flexible rates and trusted stays</p>
                  <p className="mt-1 text-xs text-slate-500">Compare premium and practical options.</p>
                </div>
                <button className="primary-button min-h-14 w-full gap-2 rounded-[1.4rem] px-6 md:min-h-16" type="submit">
                  Search hotels
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          ) : null}

          {activeTab === 'packages' ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {packageFeatures.map((feature) => (
                <Link key={feature.title} to="/packages" className="rounded-[1.4rem] border border-slate-200 bg-sky-50 p-5 transition hover:-translate-y-1 hover:bg-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Package feature</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </Link>
              ))}
            </div>
          ) : null}

          {activeTab === 'visa' ? (
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Visa support</p>
                <div className="mt-4 grid gap-3">
                  {visaHighlights.map((item) => (
                    <div key={item} className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#38BDF8_0%,#0EA5E9_60%,#0284C7_100%)] p-5 text-white sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-50">Talk to ORBITRUE</p>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">Need ticketing, documentation, and visa guidance together?</h3>
                <p className="mt-3 text-sm leading-7 text-sky-50">Switch from search to support in one step with a guided consultation flow.</p>
                <Link to="/visa-services" className="secondary-button mt-6 w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
                  Explore visa help
                </Link>
              </div>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TravelSearchWidget;
