import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import OrbitrueSealLogo from '../OrbitrueSealLogo';
import useAuth from '../../hooks/useAuth';

const links = [
  { label: 'Flights', to: '/flights' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Packages', to: '/packages' },
  { label: 'Visa Services', to: '/visa-services' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const dashboardLink = user?.role === 'admin' ? '/admin' : '/dashboard';

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100/80 bg-white/88 backdrop-blur-2xl">
      <div className="container-width flex h-20 items-center justify-between gap-3 sm:gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <OrbitrueSealLogo compact />
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold tracking-tight text-slate-900">Orbitrue Tours & Travels</p>
            <p className="max-w-[10rem] text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:max-w-none sm:text-xs sm:tracking-[0.24em]">Search smarter travel</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2.5 text-sm font-medium transition ${isActive ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {isAuthenticated ? (
            <>
              <Link to={dashboardLink} className="secondary-button gap-2">
                <UserRound size={16} />
                Dashboard
              </Link>
              <button type="button" onClick={logout} className="primary-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="secondary-button">Login</Link>
              <Link to="/flights" className="primary-button gap-2">
                <Search size={16} />
                Search trips
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition lg:hidden ${
            open
              ? 'border-sky-200 bg-sky-50 text-sky-700 shadow-sm'
              : 'border-sky-100 bg-white text-slate-700 shadow-sm hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700'
          }`}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-sky-100 bg-white lg:hidden"
          >
            <div className="container-width flex flex-col gap-3 py-4">
              {links.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-sky-50">
                  {item.label}
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {isAuthenticated ? (
                  <>
                    <Link to={dashboardLink} onClick={() => setOpen(false)} className="secondary-button">Dashboard</Link>
                    <button type="button" onClick={logout} className="primary-button">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setOpen(false)} className="secondary-button">Login</Link>
                    <Link to="/flights" onClick={() => setOpen(false)} className="primary-button">Search</Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
