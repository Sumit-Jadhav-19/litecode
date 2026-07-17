import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { text: "10+ Years Experience", icon: "⚡" },
  { text: "Agile Development", icon: "🔄" },
  { text: "Clean Architecture", icon: "✨" },
  { text: "Fast Delivery", icon: "🚀" },
  { text: "Dedicated Support", icon: "💬" },
  { text: "Scalable Solutions", icon: "📈" },
  { text: "Cloud Ready", icon: "☁️" },
  { text: "Enterprise Security", icon: "🔒" },
];

export function WhyChoose() {
  return (
    <section className="py-24 relative bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass-card flex items-center justify-center border-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10" />
            
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[80%] opacity-80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--orange)" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--orange)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <g transform="translate(200 200)">
                <motion.circle 
                  cx="0" cy="0" r="120" 
                  fill="none" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="10 10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                  cx="0" cy="0" r="80" 
                  fill="url(#grad1)"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M-50 -50 L50 50 M-50 50 L50 -50 M0 -70 L0 70 M-70 0 L70 0" 
                  stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"
                  animate={{ rotate: -180 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.circle 
                    key={i}
                    cx={Math.cos(angle * Math.PI / 180) * 120} 
                    cy={Math.sin(angle * Math.PI / 180) * 120} 
                    r="8" fill="white"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
              </g>
            </svg>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-8 text-gray-900 dark:text-white leading-tight"
            >
              Why Businesses Choose <span className="text-gradient">LiteCode</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full glass border border-blue-100 dark:border-blue-900 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform bg-white dark:bg-black">
                    {reason.icon}
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                    {reason.text}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <a href="#portfolio" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-4 transition-all">
                See our success stories <CheckCircle2 className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
