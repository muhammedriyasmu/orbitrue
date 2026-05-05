import { Link } from 'react-router-dom';
import { serviceCards } from '../assets/siteData';

function VisaServicesPage() {
  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pill">Visa Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Support that keeps travel files clean and submission-ready</h1>
        <p className="mt-4 text-slate-600">
          Choose a service to see what ORBITRUE helps with before booking a consultation or visa request.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {serviceCards.map((service) => (
          <article key={service.slug} className="glass-card overflow-hidden p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{service.overview}</p>
            <div className="mt-6 flex gap-3">
              <Link to={`/enquiry?service=${service.slug}`} className="secondary-button">
                Enquire Now
              </Link>
              <Link to={`/enquiry?service=${service.slug}`} className="primary-button">
                Send Enquiry
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VisaServicesPage;

