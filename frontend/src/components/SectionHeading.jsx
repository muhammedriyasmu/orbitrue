import Reveal from './Reveal';

function SectionHeading({ badge, title, description, align = 'center' }) {
  return (
    <Reveal className={`mx-auto mb-14 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm">
        {badge}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </Reveal>
  );
}

export default SectionHeading;
