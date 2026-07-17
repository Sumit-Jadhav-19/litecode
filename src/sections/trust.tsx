import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const companies = [
  "Acme Corp", "GlobalTech", "Nexus Dynamics", "Quantum Solutions", 
  "Starlight Media", "TechFlow", "Vanguard Systems", "Zenith Health",
  "Acme Corp", "GlobalTech", "Nexus Dynamics", "Quantum Solutions" // Repeated for infinite scroll effect
];

const ratings = [
  { name: 'Google Reviews', score: '4.9' },
  { name: 'Clutch', score: '4.8' },
  { name: 'GoodFirms', score: '4.9' },
];

export function Trust() {
  return (
    <section className="py-16 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
          Trusted by Businesses Worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {ratings.map((rating) => (
            <div key={rating.name} className="flex items-center gap-3">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 dark:text-white leading-none">{rating.score} / 5.0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{rating.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left gradient mask */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#050816] to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {companies.map((company, i) => (
            <div key={i} className="text-2xl font-bold font-display text-gray-300 dark:text-gray-700 opacity-60 hover:opacity-100 transition-opacity">
              {company}
            </div>
          ))}
        </motion.div>

        {/* Right gradient mask */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#050816] to-transparent z-10" />
      </div>
    </section>
  );
}
