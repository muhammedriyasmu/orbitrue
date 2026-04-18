import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motion';

function Reveal({ children, className = '', delay = 0, amount = 0.25 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
