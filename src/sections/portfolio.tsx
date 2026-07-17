import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ["All", "Web", "Mobile", "Enterprise", "AI", "Cloud"];

const projects = [
  {
    id: 1,
    title: "HealthSync Pro",
    category: "Web",
    desc: "A comprehensive healthcare SaaS platform for patient management and telemedicine.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-teal-400 to-emerald-600",
  },
  {
    id: 2,
    title: "FinEdge Analytics",
    category: "Enterprise",
    desc: "Real-time fintech dashboard with predictive market analytics and custom reporting.",
    tech: ["Next.js", "Python", "Redis", "Azure"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "EduFlow LMS",
    category: "Web",
    desc: "Interactive learning management system with video streaming and progress tracking.",
    tech: ["Vue.js", "ASP.NET Core", "SQL Server"],
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    id: 4,
    title: "RetailX Commerce",
    category: "Mobile",
    desc: "Cross-platform mobile e-commerce application with AR product preview capabilities.",
    tech: ["React Native", "GraphQL", "AWS"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    title: "LogiTrack AI",
    category: "AI",
    desc: "AI-powered logistics and supply chain route optimization software.",
    tech: ["Angular", "Python", "TensorFlow", "GCP"],
    gradient: "from-orange-400 to-red-600",
  },
  {
    id: 6,
    title: "BuildSmart Cloud",
    category: "Cloud",
    desc: "Cloud-native ERP system tailored specifically for large construction firms.",
    tech: ["React", "Go", "Docker", "Kubernetes"],
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
            >
              Work That Speaks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Explore our recent projects where we turned complex business challenges into elegant digital solutions.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md' 
                    : 'glass text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glass-card flex flex-col h-full border-none"
              >
                <div className={`h-56 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Abstract placeholder graphic */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 blur-2xl rounded-full" />
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white dark:bg-[#111827]">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center justify-between w-full font-semibold text-gray-900 dark:text-white group/btn">
                    View Case Study
                    <span className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/btn:bg-gradient-brand group-hover/btn:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
