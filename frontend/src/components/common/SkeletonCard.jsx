function SkeletonCard({ className = '' }) {
  return (
    <div className={`glass-card animate-pulse p-5 ${className}`}>
      <div className="mb-4 h-40 rounded-2xl bg-white/10" />
      <div className="mb-3 h-4 w-1/2 rounded-full bg-white/10" />
      <div className="mb-2 h-3 w-full rounded-full bg-white/10" />
      <div className="h-3 w-3/4 rounded-full bg-white/10" />
    </div>
  );
}

export default SkeletonCard;
