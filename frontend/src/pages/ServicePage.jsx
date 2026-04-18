import { ArrowLeft, CheckCircle2, ClipboardList, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { serviceCards } from '../assets/siteData';

function ServicePage() {
  const { slug } = useParams();
  const service = serviceCards.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <main className="px-4 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 p-8 text-white shadow-[0_30px_80px_rgba(15,76,129,0.24)]">
              <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-sky-600/80 to-cyan-400/65" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full bg-white/15 blur-3xl"
              />
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <service.icon className="h-8 w-8" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.26em] text-blue-100">Service Detail</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{service.title}</h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-blue-50">{service.description}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-[0_28px_70px_rgba(148,163,184,0.16)] backdrop-blur md:p-8">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.45 }}
                className="text-base leading-8 text-slate-600"
              >
                {service.overview}
              </motion.p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14, duration: 0.45 }}
                  className="rounded-[1.4rem] bg-blue-50 p-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">Best For</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.suitableFor}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="rounded-[1.4rem] bg-blue-50 p-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <FileText className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">Process Note</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.processNote}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.45 }}
                className="mt-6 rounded-[1.5rem] border border-blue-100 p-5"
              >
                <div className="flex items-center gap-2 text-primary">
                  <ClipboardList className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em]">What You Get</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default ServicePage;
