import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ContactSection from '../sections/ContactSection';
import DestinationsSection from '../sections/DestinationsSection';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import TestimonialsSection from '../sections/TestimonialsSection';

function HomePage() {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end']
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={pageRef}
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen overflow-hidden"
    >
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky-400 via-primary to-cyan-300" style={{ scaleX }} />
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[-7rem] top-24 h-64 w-64 rounded-full bg-sky-200/45 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-6rem] top-[28rem] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
      />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
}

export default HomePage;
