import { ArrowRight, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FlightCard({ flight }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass-card p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-semibold text-white">
            {flight.airlineLogo}
          </div>
          <div>
            <p className="font-semibold text-slate-900">{flight.airline}</p>
            <p className="text-sm text-slate-500">{flight.stops}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
          <div>
            <p className="text-xl font-semibold text-slate-900">{flight.departureTime}</p>
            <p className="text-sm text-slate-500">{flight.from}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock3 size={16} />
            <span>{flight.duration}</span>
            <ArrowRight size={16} />
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900">{flight.arrivalTime}</p>
            <p className="text-sm text-slate-500">{flight.to}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 lg:block lg:text-right">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{flight.class}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">${flight.price}</p>
          </div>
          <Link to="/booking" state={{ itemType: 'flight', item: flight, amount: flight.price }} className="primary-button mt-4">
            Book
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default FlightCard;
