import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '1234567890'; // Replace with real number
const WHATSAPP_MESSAGE = 'Hi! I visited your website and would like to know more about your services.';

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.div
      className="fixed bottom-[5.5rem] right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="absolute inset-0 scale-110 rounded-full bg-[#25D366] opacity-15 animate-ping" style={{ animationDelay: '0.4s' }} />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-11 h-11 rounded-full shadow-xl shadow-green-500/40 hover:scale-110 transition-transform duration-200"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        {/* WhatsApp SVG */}
        <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.666 4.77 1.826 6.76L2 30l7.448-1.8A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.824-1.588l-.418-.247-4.42 1.068 1.104-4.3-.272-.44A11.47 11.47 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5z" />
          <path d="M22.505 19.16c-.328-.164-1.94-.956-2.24-1.065-.3-.11-.518-.164-.736.164-.218.327-.845 1.065-1.036 1.283-.19.218-.382.245-.71.082-.327-.164-1.382-.51-2.633-1.624-.973-.867-1.63-1.938-1.82-2.265-.19-.328-.02-.505.143-.668.147-.147.327-.382.49-.573.164-.19.218-.328.327-.545.11-.218.055-.41-.027-.573-.082-.164-.736-1.775-1.01-2.431-.265-.637-.535-.55-.736-.56l-.627-.01c-.218 0-.572.082-.872.41-.3.327-1.145 1.119-1.145 2.73 0 1.61 1.172 3.165 1.336 3.383.163.218 2.307 3.52 5.59 4.937.782.337 1.392.54 1.868.69.784.25 1.498.215 2.062.13.629-.093 1.94-.793 2.213-1.558.273-.764.273-1.42.19-1.557-.08-.136-.3-.218-.627-.382z" />
        </svg>
      </a>
    </motion.div>
  );
}
