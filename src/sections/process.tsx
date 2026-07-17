import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, business goals, and technical requirements." },
  { num: "02", title: "Planning", desc: "Crafting the architecture, selecting the stack, and defining the roadmap." },
  { num: "03", title: "UI Design", desc: "Creating wireframes, prototypes, and user-centric visual designs." },
  { num: "04", title: "Development", desc: "Writing clean, scalable code using agile methodologies and best practices." },
  { num: "05", title: "Testing", desc: "Rigorous QA, automated testing, and performance optimization." },
  { num: "06", title: "Deployment", desc: "Seamless launch, CI/CD pipeline setup, and go-live support." },
  { num: "07", title: "Maintenance", desc: "Ongoing monitoring, updates, SLA support, and feature enhancements." },
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            A transparent, agile, and results-driven process that ensures we deliver high-quality software on time and within budget.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-brand"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center group"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-16 bottom-[-32px] left-1/2 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 z-0" />
                )}

                <div className="w-16 h-16 rounded-full glass border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] flex items-center justify-center font-display font-bold text-xl text-gray-400 dark:text-gray-500 mb-6 relative z-10 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors shadow-lg">
                  {step.num}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-blue-500/20" />
                </div>
                
                <div className="text-center lg:px-2 bg-white dark:bg-[#050816] relative z-10 w-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
