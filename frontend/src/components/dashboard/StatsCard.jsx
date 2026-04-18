import { motion } from 'framer-motion';

function StatsCard({ label, value, helper }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass-card p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-sky-700">{helper}</p>
    </motion.div>
  );
}

export default StatsCard;
