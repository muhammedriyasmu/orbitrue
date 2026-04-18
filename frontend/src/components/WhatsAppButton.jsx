import { MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

function WhatsAppButton() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999';

  return (
    <motion.a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.45 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)]"
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </motion.a>
  );
}

export default WhatsAppButton;
