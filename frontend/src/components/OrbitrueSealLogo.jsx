function OrbitrueSealLogo({ className = '', compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 220 220" className={compact ? 'h-12 w-12' : 'h-16 w-16'} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="topArc" d="M 35 110 A 75 75 0 0 1 185 110" />
          <path id="bottomArc" d="M 185 110 A 75 75 0 0 1 35 110" />
        </defs>
        <circle cx="110" cy="110" r="102" stroke="#1D4ED8" strokeWidth="4" />
        <circle cx="110" cy="110" r="94" stroke="#1D4ED8" strokeWidth="2.8" />
        <circle cx="110" cy="110" r="68" stroke="#1D4ED8" strokeWidth="2.8" />
        <circle cx="110" cy="110" r="42" stroke="#1D4ED8" strokeWidth="8" opacity="0.95" />
        <text fill="#1D4ED8" fontSize="15" fontWeight="700" letterSpacing="5">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            ORBITRUE
          </textPath>
        </text>
        <text fill="#1D4ED8" fontSize="15" fontWeight="700" letterSpacing="4">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            CHALISSERY
          </textPath>
        </text>
        <path d="M52 110l4-10 4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#1D4ED8" />
        <path d="M168 110l4-10 4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#1D4ED8" />
        <circle cx="74" cy="110" r="12" fill="#1D4ED8" />
        <path d="M67 110h14M74 103c3 2 5 4 5 7s-2 5-5 7M74 103c-3 2-5 4-5 7s2 5 5 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M73 98c2 3 2 5 0 8M75 114c-2 3-2 5 0 8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="82" y="96" width="70" height="28" rx="14" fill="white" />
        <text x="117" y="116" textAnchor="middle" fill="#1D4ED8" fontSize="20" fontWeight="800" letterSpacing="2">
          ORBITRUE
        </text>
      </svg>
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
