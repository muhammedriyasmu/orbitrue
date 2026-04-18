import { motion } from 'framer-motion';

function SearchPanel({ title, description, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5 sm:p-6">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}

export default SearchPanel;
