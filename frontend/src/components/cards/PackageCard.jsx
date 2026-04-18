import { Clock3, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PackageCard({ travelPackage }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass-card overflow-hidden">
      <div className="relative">
        <img src={travelPackage.images[0]} alt={travelPackage.title} className="h-56 w-full object-cover sm:h-60" loading="lazy" />
        <div className="absolute left-4 top-4 pill">{travelPackage.featured ? 'Featured' : 'Popular'}</div>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">{travelPackage.title}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} /> {travelPackage.destination}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-slate-500">Starting at</p>
            <p className="text-2xl font-semibold text-slate-900">${travelPackage.price}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{travelPackage.description}</p>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-slate-500"><Clock3 size={15} /> {travelPackage.duration}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to={`/packages/${travelPackage.slug}`} className="secondary-button w-full sm:w-auto">Details</Link>
            <Link to="/booking" state={{ itemType: 'package', item: travelPackage, amount: travelPackage.price }} className="primary-button w-full sm:w-auto">
              Book
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default PackageCard;
