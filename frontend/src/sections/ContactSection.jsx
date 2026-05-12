import { Mail, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactHighlights } from '../assets/siteData';
import AnimatedButton from '../components/AnimatedButton';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Message could not be sent');
      }

      setStatus({ type: 'success', message: 'Message sent successfully. ORBITRUE will contact you shortly.' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Message could not be sent. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            badge="Let's Connect"
            title="Planning a visa or international move? Start with one sharp conversation."
            description="Use the form to connect with the ORBITRUE team for travel guidance, documentation support, or destination-specific advice."
            align="left"
          />
          <div className="space-y-4">
            {contactHighlights.map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-start gap-4 rounded-[1.75rem] border border-blue-100 bg-white/90 p-5 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{item.title}</p>
                    <p className="mt-1 text-base font-medium text-slate-800">{item.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 rounded-[2rem] bg-primary p-6 text-white shadow-[0_30px_70px_rgba(15,76,129,0.25)]">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm">info@orbitrueuae.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5" />
                <span className="text-sm">Mon-Sat, 10:00 AM to 7:00 PM</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -3 }}
            className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_28px_80px_rgba(148,163,184,0.18)] backdrop-blur md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-primary"
                  placeholder="Tell us where you plan to travel and what support you need."
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>
            </div>

            {status.message && (
              <p className={`mt-5 text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}

            <div className="mt-7">
              <AnimatedButton className="w-full" type="submit">
                {submitting ? 'Sending...' : 'Send Message'}
              </AnimatedButton>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
