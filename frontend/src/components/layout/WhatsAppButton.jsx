import { MessageCircleMore } from 'lucide-react';

function WhatsAppButton() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '918891647440';

  return (
    <a
      href={`https://wa.me/${number}?text=Hi%20Orbitrue%2C%20I%20need%20help%20with%20a%20booking.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-2xl shadow-cyan-900/30 transition hover:-translate-y-1"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}

export default WhatsAppButton;
