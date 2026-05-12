import { useMemo, useState } from 'react';
import { MessageCircleMore, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { serviceCards } from '../assets/siteData';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  destination: '',
  travelDate: '',
  travelers: '1',
  message: ''
};

function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('service') || '';
  const [formData, setFormData] = useState({
    ...initialForm,
    service: serviceCards.some((service) => service.slug === selectedService) ? selectedService : ''
  });

  const selectedServiceTitle = useMemo(
    () => serviceCards.find((service) => service.slug === formData.service)?.title || 'General Enquiry',
    [formData.service]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '918891647440';
    const details = [
      'New ORBITRUE Enquiry',
      `Service: ${selectedServiceTitle}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Destination: ${formData.destination || 'Not provided'}`,
      `Travel Date: ${formData.travelDate || 'Not provided'}`,
      `Travelers: ${formData.travelers || 'Not provided'}`,
      `Message: ${formData.message || 'Not provided'}`
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="pill">Enquiry Form</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900">
              Share your travel details with ORBITRUE
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Submit this form and your full enquiry will open in WhatsApp, ready to send to our team.
            </p>
            <div className="mt-8 rounded-2xl bg-sky-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Selected Service</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{selectedServiceTitle}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Name
                <input
                  className="input-shell mt-2"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone
                <input
                  className="input-shell mt-2"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91..."
                  required
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Email
                <input
                  className="input-shell mt-2"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Service
                <select className="input-shell mt-2" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  {serviceCards.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Destination
                <input
                  className="input-shell mt-2"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Country or city"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Travel Date
                <input className="input-shell mt-2" name="travelDate" type="date" value={formData.travelDate} onChange={handleChange} />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Travelers
                <input
                  className="input-shell mt-2"
                  name="travelers"
                  type="number"
                  min="1"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Message
              <textarea
                className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-secondary focus:ring-2 focus:ring-sky-200"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need help with"
              />
            </label>

            <button type="submit" className="primary-button mt-6 w-full gap-2 md:w-auto">
              <MessageCircleMore className="h-5 w-5" />
              Send to WhatsApp
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnquiryPage;
