import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { testimonials } from '../assets/siteData';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const STORAGE_KEY = 'orbitrue_feedbacks';

function TestimonialsSection() {
  const [savedFeedbacks, setSavedFeedbacks] = useState([]);
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: '',
    role: '',
    quote: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return;
    }

    try {
      setSavedFeedbacks(JSON.parse(stored));
    } catch (_error) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const allTestimonials = useMemo(() => [...savedFeedbacks, ...testimonials], [savedFeedbacks]);

  useEffect(() => {
    if (allTestimonials.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % allTestimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [allTestimonials]);

  useEffect(() => {
    if (index >= allTestimonials.length) {
      setIndex(0);
    }
  }, [allTestimonials.length, index]);

  const active = allTestimonials[index];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.role.trim() || form.quote.trim().length < 12) {
      setMessage('Please enter name, role, and a feedback with at least 12 characters.');
      return;
    }

    const next = [{ ...form, id: Date.now() }, ...savedFeedbacks];
    setSavedFeedbacks(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setForm({ name: '', role: '', quote: '' });
    setIndex(0);
    setMessage('Feedback added successfully.');
  };

  const goPrev = () => {
    setIndex((current) => (current === 0 ? allTestimonials.length - 1 : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % allTestimonials.length);
  };

  return (
    <section id="testimonials" className="px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Testimonials"
          title="Stories from travelers who trusted us with their journey"
          description="These experiences are why ORBITRUE is positioned as a modern advisory brand, not just another ticketing desk."
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_22px_60px_rgba(148,163,184,0.14)] md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Feedback</p>
                  <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">What Our Clients Say</p>
                </div>
                <div className="flex gap-2 self-start sm:self-auto">
                  <button onClick={goPrev} className="rounded-full border border-blue-100 p-2.5 text-primary transition hover:bg-blue-50 sm:p-3">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={goNext} className="rounded-full border border-blue-100 p-2.5 text-primary transition hover:bg-blue-50 sm:p-3">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="relative mt-6 min-h-[17rem] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-50 to-white p-4 sm:mt-8 sm:min-h-[20rem] sm:p-6">
                <AnimatePresence mode="wait">
                  {active && (
                    <motion.article
                      key={`${active.name}-${index}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 p-4 sm:p-6 md:p-8"
                    >
                      <Quote className="h-10 w-10 text-primary sm:h-12 sm:w-12" />
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">{active.quote}</p>
                      <div className="mt-6 border-t border-blue-100 pt-4 sm:mt-8 sm:pt-5">
                        <p className="text-lg font-bold text-slate-950 sm:text-xl">{active.name}</p>
                        <p className="mt-1 text-sm text-slate-500">{active.role}</p>
                      </div>
                    </motion.article>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {allTestimonials.map((item, itemIndex) => (
                  <button
                    key={`${item.name}-${itemIndex}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`h-2.5 rounded-full transition-all ${itemIndex === index ? 'w-10 bg-primary' : 'w-3 bg-blue-100'}`}
                    aria-label={`Go to feedback ${itemIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_22px_60px_rgba(148,163,184,0.14)] md:p-8">
              <div className="flex items-start gap-3 sm:items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary sm:h-12 sm:w-12">
                  <MessageSquareQuote className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Add Feedback</p>
                  <p className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">Share your experience</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 sm:mt-8">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                />
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="Travel type or visa type"
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                />
                <textarea
                  name="quote"
                  rows="6"
                  value={form.quote}
                  onChange={handleChange}
                  placeholder="Write your feedback here"
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              {message && <p className="mt-4 text-sm text-primary">{message}</p>}

              <button className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,76,129,0.22)] sm:w-auto">
                Submit Feedback
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

