import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Cloud, Code, Database, Smartphone } from 'lucide-react';
import { useMouseParallax } from '@/hooks/use-mouse-parallax';
import { useRef } from 'react';
import { useCounter } from '@/hooks/use-counter';

const floatingCards = [
  { icon: BarChart3, label: 'Analytics', color: 'from-blue-400 to-cyan-300', delay: 0, yOffset: -20, xOffset: 20 },
  { icon: Smartphone, label: 'Mobile App', color: 'from-orange-400 to-amber-300', delay: 0.5, yOffset: 40, xOffset: -30 },
  { icon: Database, label: 'CRM / ERP', color: 'from-blue-500 to-indigo-400', delay: 1, yOffset: -60, xOffset: -80 },
  { icon: Cloud, label: 'Cloud Solutions', color: 'from-orange-500 to-red-400', delay: 1.5, yOffset: 80, xOffset: 60 },
];

export function Hero() {
  const { x, y } = useMouseParallax(15);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const projectsCount = useCounter(150, 2000, statsRef);
  const clientsCount = useCounter(100, 2000, statsRef);
  const yearsCount = useCounter(10, 2000, statsRef);
  const expertsCount = useCounter(30, 2000, statsRef);

  return (
    <section id="home" className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-[10%] w-[40%] h-[40%] bg-orange-500/20 dark:bg-orange-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6"
            >
              <span className="text-lg">🚀</span> Trusted Software Development Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.15] mb-6 text-gray-900 dark:text-white"
            >
              Build{' '}
              <span style={{ background: 'linear-gradient(135deg, #00AEEF, #F7931E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Digital Products
              </span>{' '}
              That{' '}
              <span style={{ background: 'linear-gradient(135deg, #F7931E, #00AEEF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Accelerate Business Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
            >
              We design and develop scalable web applications, mobile apps, enterprise software, cloud solutions, and AI-powered digital products that help businesses grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <a href="#contact" className="bg-gradient-brand text-white px-8 py-4 rounded-full font-medium text-lg magnetic-hover shadow-xl shadow-blue-500/25 flex items-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="px-8 py-4 rounded-full font-medium text-lg magnetic-hover transition-colors text-gray-800 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20">
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold font-display text-gray-900 dark:text-white">{projectsCount}+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-gray-900 dark:text-white">{clientsCount}+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-gray-900 dark:text-white">{yearsCount}+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-gray-900 dark:text-white">{expertsCount}+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Experts</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Floating Illustration */}
          <div className="relative hidden lg:block h-[600px]" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central glowing core */}
              <div className="w-64 h-64 bg-gradient-brand rounded-full blur-[80px] opacity-30 animate-pulse" />
              <Code className="absolute w-24 h-24 text-blue-500/50 dark:text-blue-400/50" />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 4, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 glass-card p-4 rounded-2xl flex items-center gap-4"
                style={{
                  transform: `translate(calc(-50% + ${card.xOffset}px), calc(-50% + ${card.yOffset}px))`,
                  zIndex: 10 + i
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">{card.label}</span>
              </motion.div>
            ))}

            {/* Tech Badges */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              {['React', 'Node.js', '.NET', 'Azure', 'AWS', 'Next.js'].map((tech, i) => {
                const angle = (i * 360) / 6;
                const radius = 220;
                const rad = angle * (Math.PI / 180);
                const badgeX = Math.cos(rad) * radius;
                const badgeY = Math.sin(rad) * radius;

                return (
                  <div
                    key={tech}
                    className="absolute top-1/2 left-1/2 px-4 py-2 rounded-full font-medium text-sm text-gray-700 dark:text-gray-300"
                    style={{
                      transform: `translate(calc(-50% + ${badgeX}px), calc(-50% + ${badgeY}px))`,
                    }}
                  >
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                      {tech}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
