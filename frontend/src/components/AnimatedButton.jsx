import { motion } from 'framer-motion';

function AnimatedButton({ children, href, onClick, variant = 'primary', className = '', type = 'button' }) {
  const base =
    variant === 'primary'
      ? 'bg-primary text-white shadow-[0_18px_40px_rgba(2,132,199,0.22)] hover:bg-secondary'
      : 'border border-sky-200 bg-white text-slate-700 shadow-sm hover:border-sky-300 hover:bg-sky-50';

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition ${base} ${className}`}
    >
      {children}
    </Comp>
  );
}

export default AnimatedButton;
