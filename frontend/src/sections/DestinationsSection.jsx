import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinations } from '../assets/siteData';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function DestinationsSection() {
  return (
    <section id="destinations" className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Trending routes"
          title="Discover destinations that inspire your next journey"
          description="Large destination panels, quick overlays, and calmer motion make the browsing experience feel closer to a modern travel marketplace."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal key={destination.title} delay={index * 0.05}>
              <motion.div whileHover={{ y: -8 }} className={`group relative overflow-hidden rounded-[2rem] ${index === 0 ? 'xl:col-span-2' : ''}`}>
                <Link to={`/destinations/${destination.slug}`} className="block">
                  <img src={destination.image} alt={destination.title} className="h-[22rem] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
                    {destination.visaFocus}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-bold tracking-tight">{destination.title}</p>
                        <p className="mt-2 max-w-md text-sm text-blue-50">{destination.subtitle}</p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection;

