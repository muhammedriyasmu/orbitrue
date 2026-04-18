import { motion } from 'framer-motion';

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-8 flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </motion.div>
  );
}

export default SectionTitle;

