import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrbitrueSealLogo from '../components/OrbitrueSealLogo';
import { navLinks } from '../assets/siteData';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const withHomePrefix = (hash) => (pathname === '/' ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? 'border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href={withHomePrefix('#home')} className="flex items-center gap-3 text-slate-950">
          <OrbitrueSealLogo compact />
          <span className="hidden sm:block">
            <span className="block text-lg font-extrabold tracking-[0.14em] text-primary">ORBITRUE</span>
            <span className="block text-xs uppercase tracking-[0.26em] text-slate-500">Travel & Visa</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={withHomePrefix(link.href)} className="text-sm font-medium text-slate-700 transition hover:text-primary">
              {link.label}
            </a>
          ))}
          <a
            href={withHomePrefix('#contact')}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(15,76,129,0.22)]"
          >
            Apply for Visa
          </a>
        </nav>

        <button onClick={() => setOpen((value) => !value)} className="md:hidden">
          {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-blue-100 bg-white/95 backdrop-blur md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5">
              {navLinks.map((link) => (
                <a key={link.href} href={withHomePrefix(link.href)} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                  {link.label}
                </a>
              ))}
              <a href={withHomePrefix('#contact')} onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white">
                Apply for Visa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
