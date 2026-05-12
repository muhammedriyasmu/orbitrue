import orbitrueLogo from '../assets/Orbitrue logo-1.png';

function OrbitrueSealLogo({ className = '', compact = false }) {
  const logoSize = compact ? 'h-12 w-12' : 'h-16 w-16';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={orbitrueLogo}
        alt="Orbitrue logo"
        aria-label="Orbitrue logo"
        className={`${logoSize} pointer-events-none shrink-0 object-contain`}
      />
      {!compact && (
        <div>
          <p className="text-xl font-extrabold tracking-[0.14em] text-primary">ORBITRUE</p>
          <p className="text-xs uppercase tracking-[0.24em] text-sky-700">Travel & Visa Consultancy</p>
        </div>
      )}
    </div>
  );
}

export default OrbitrueSealLogo;
