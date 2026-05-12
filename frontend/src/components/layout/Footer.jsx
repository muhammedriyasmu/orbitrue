import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f0f9ff_100%)]">
      <div className="container-width grid gap-10 py-14 lg:grid-cols-[1.35fr_0.9fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-sky-100">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-slate-700">Orbitrue Travel Search</span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">Travel planning with a cleaner, calmer booking flow.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Browse flights, hotels, packages, and visa services through a polished interface designed to feel fast, airy, and trustworthy.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2"><Phone size={16} /> +91 88916 47440</p>
            <p className="flex items-center gap-2"><Mail size={16} /> info@orbitrueuae.com</p>
            <p className="flex items-center gap-2"><MapPin size={16} /> Chalissery, Kerala</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Search</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link to="/flights">Flights</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/visa-services">Visa Services</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Follow</h4>
          <div className="mt-4 flex gap-3 text-sky-700">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <span key={index} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-sm">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
