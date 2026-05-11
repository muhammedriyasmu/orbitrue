import { ArrowRight, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import Reveal from '../components/Reveal';
import TravelSearchWidget from '../components/search/TravelSearchWidget';
import { defaultFlightSearch, defaultHotelSearch } from '../assets/mockData';
import heroVideo from '../assets/14260310_2160_3840_30fps.mp4';

function HeroSection() {
  const navigate = useNavigate();

  const navigateWithQuery = (path, values) => {
    const params = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });
    navigate(`${path}?${params.toString()}`);
  };

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-6 lg:px-8 lg:pb-24 lg:pt-12">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_60%]"
      >
        {/* User-provided airplane takeoff video */}
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-white/60 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(240,250,255,0.4)_50%,rgba(255,255,255,0.8)_100%)]" />
      <motion.div
        animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[-5rem] top-16 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -22, 0], y: [0, 22, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-4rem] top-72 z-0 h-52 w-52 rounded-full bg-cyan-100/80 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
        <div className="min-w-0 pt-2 lg:pt-10">
          <Reveal>
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-2 text-xs font-semibold text-sky-700 shadow-sm sm:px-4 sm:text-sm">
              <Globe2 className="h-4 w-4 shrink-0" />
              <span className="break-words">Explore beyond borders with smarter travel search.</span>
            </div>
          </Reveal>

          <Reveal className="mt-5 sm:mt-6" delay={0.05}>
            <h1 className="max-w-4xl text-[2.2rem] font-black leading-[1.02] tracking-tight text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
              Explore beyond borders, where every journey begins with a simple search and endless possibilities.
            </h1>
          </Reveal>

          <Reveal className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8" delay={0.1}>
            Travel far enough, you meet yourself and a world full of new stories waiting beyond the horizon.
          </Reveal>

          <Reveal className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4" delay={0.16}>
            <AnimatedButton href="/flights" className="w-full gap-2 sm:w-auto">
              Explore live search
              <ArrowRight className="h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton href="/visa-services" variant="secondary" className="w-full sm:w-auto">
              View visa support
            </AnimatedButton>
          </Reveal>
        </div>

        <div className="min-w-0">
          <Reveal>
            <TravelSearchWidget
              initialTab="flights"
              initialFlightValues={defaultFlightSearch}
              initialHotelValues={defaultHotelSearch}
              onFlightSearch={(values) => navigateWithQuery('/flights', values)}
              onHotelSearch={(values) => navigateWithQuery('/hotels', values)}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
