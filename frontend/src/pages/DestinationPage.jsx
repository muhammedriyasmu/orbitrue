import { ArrowLeft, CheckCircle2, Clock3, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { destinations } from '../assets/siteData';

function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  if (!destination) {
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div ref={heroRef} className="mt-6 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-4 shadow-[0_30px_80px_rgba(148,163,184,0.18)]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={destination.image}
                alt={destination.title}
                className="h-[24rem] w-full rounded-[1.5rem] object-cover md:h-[34rem]"
              />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="absolute bottom-10 left-10 z-20 rounded-[1.4rem] border border-white/40 bg-white/85 px-5 py-4 shadow-lg backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">ORBITRUE Focus</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{destination.visaFocus}</p>
              </motion.div>
            </div>

            <motion.div
              style={{ y: textY }}
              className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-[0_28px_70px_rgba(148,163,184,0.16)] backdrop-blur md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Destination Overview</p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.45 }}
                className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl"
              >
                {destination.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 text-base leading-8 text-slate-600"
              >
                {destination.overview}
              </motion.p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.45 }}
                  className="rounded-[1.4rem] bg-blue-50 p-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <FileText className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">Visa Focus</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{destination.visaFocus}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.45 }}
                  className="rounded-[1.4rem] bg-blue-50 p-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">Best For</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{destination.bestFor}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="mt-4 rounded-[1.4rem] border border-blue-100 p-4"
              >
                <div className="flex items-center gap-2 text-primary">
                  <Clock3 className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em]">Processing Notes</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">{destination.processing}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.45 }}
                className="mt-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What ORBITRUE helps with</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {destination.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default DestinationPage;
