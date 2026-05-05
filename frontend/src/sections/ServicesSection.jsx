import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceCards } from '../assets/siteData';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Travel tools"
          title="Travel services designed for smoother journeys and smarter planning"
          description="Flight booking, hotel coordination, visa assistance, and work-travel support presented in a lighter, more product-like layout."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.slice(0, 4).map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="group h-full overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <Link to={`/enquiry?service=${service.slug}`} className="block h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-sky-700">Explore service</span>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-slate-600">ORBITRUE</span>
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

export default ServicesSection;

