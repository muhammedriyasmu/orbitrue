import { useLocation } from 'react-router-dom';
import OrbitrueSealLogo from '../components/OrbitrueSealLogo';
import { footerLinks, socialLinks } from '../assets/siteData';

function Footer() {
  const { pathname } = useLocation();
  const withHomePrefix = (hash) => (pathname === '/' ? hash : `/${hash}`);

  return (
    <footer className="border-t border-blue-100 bg-gradient-to-br from-white via-blue-50 to-white px-4 py-14 text-slate-700 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <OrbitrueSealLogo />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
            Modern travel advisory for visas, international mobility, and destination planning with a sharp, professional client experience.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Quick Links</p>
          <div className="mt-5 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={withHomePrefix(link.href)} className="text-sm text-slate-600 transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Social</p>
          <div className="mt-5 flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm text-slate-600 transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">support@orbitrue.com</p>
          <p className="mt-2 text-sm text-slate-600">+91 99999 99999</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
