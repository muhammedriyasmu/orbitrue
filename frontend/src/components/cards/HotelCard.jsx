import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HotelCard({ hotel }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass-card overflow-hidden">
      <img src={hotel.image} alt={hotel.name} className="h-52 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{hotel.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} /> {hotel.location}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-600">
            <Star size={14} fill="currentColor" />
            {hotel.rating}
          </div>
        </div>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Per night</p>
            <p className="text-2xl font-semibold text-slate-900">${hotel.pricePerNight}</p>
          </div>
          <Link to="/booking" state={{ itemType: 'hotel', item: hotel, amount: hotel.pricePerNight }} className="primary-button">
            Book
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default HotelCard;
