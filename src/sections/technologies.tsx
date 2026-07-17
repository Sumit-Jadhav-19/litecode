import { motion } from 'framer-motion';
import { Cloud, Server } from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiDotnet,
  SiDocker, SiKubernetes, SiMongodb, SiPostgresql, SiRedis, 
  SiPython, SiFlutter, SiVuedotjs, SiAngular, SiNextdotjs 
} from 'react-icons/si';

const row1 = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000', darkColor: '#FFFFFF' },
  { icon: SiAngular, name: 'Angular', color: '#DD0031' },
  { icon: SiVuedotjs, name: 'Vue', color: '#4FC08D' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiDotnet, name: '.NET', color: '#512BD4' },
  { icon: Server, name: 'Azure', color: '#0089D6' },
  { icon: Cloud, name: 'AWS', color: '#FF9900' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
];

const row2 = [
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
  { icon: SiReact, name: 'React Native', color: '#61DAFB' },
  { icon: SiDotnet, name: 'ASP.NET', color: '#512BD4' },
];

function MarqueeRow({ items, direction = 1 }: { items: typeof row1, direction?: number }) {
  // Duplicate items to ensure smooth infinite scrolling
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="relative flex overflow-x-hidden group py-4">
      <motion.div
        animate={{ x: direction > 0 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex items-center gap-6 whitespace-nowrap px-3"
      >
        {duplicatedItems.map((tech, i) => (
          <div 
            key={`${tech.name}-${i}`} 
            className="flex items-center gap-3 glass px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/item cursor-default"
          >
            <tech.icon 
              className="w-6 h-6 transition-transform group-hover/item:scale-110" 
              style={{ color: tech.color }}
            />
            <span className="font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Technologies() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
        >
          Our Technology Arsenal
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          We use the latest, most robust technologies to build scalable, secure, and future-proof digital products.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#050816] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#050816] to-transparent z-10 pointer-events-none" />
        
        <MarqueeRow items={row1} direction={1} />
        <MarqueeRow items={row2} direction={-1} />
      </div>
    </section>
  );
}
