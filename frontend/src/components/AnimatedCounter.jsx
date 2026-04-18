import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const numeric = parseFloat(value);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (value.includes('/')) {
      return latest.toFixed(1);
    }

    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (!isInView || Number.isNaN(numeric)) {
      return undefined;
    }

    const controls = animate(motionValue, numeric, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    });

    return () => controls.stop();
  }, [isInView, motionValue, numeric]);

  const suffix = value.includes('+') ? '+' : value.includes('/5') ? '/5' : '';

  return (
    <div ref={ref} className="rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
      <p className="text-3xl font-black text-slate-950">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  );
}

export default AnimatedCounter;
