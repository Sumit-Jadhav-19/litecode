import { motion } from 'framer-motion';
import { 
  Code2, Globe, Smartphone, Server, Cloud, Paintbrush, 
  BrainCircuit, Database, Users, Shield, Zap, Settings 
} from 'lucide-react';

const services = [
  { icon: Code2, title: "Custom Software", desc: "Tailored enterprise solutions built to solve complex business challenges." },
  { icon: Globe, title: "Web Development", desc: "High-performance, responsive web applications using React, Next.js, and Node." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { icon: Server, title: ".NET Development", desc: "Robust backend systems and enterprise APIs powered by ASP.NET Core." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud architecture and migrations on AWS, Azure, and GCP." },
  { icon: Paintbrush, title: "UI/UX Design", desc: "User-centric design systems that elevate your brand and drive conversion." },
  { icon: BrainCircuit, title: "AI Development", desc: "Machine learning models and LLM integrations for intelligent products." },
  { icon: Database, title: "ERP Systems", desc: "Centralized business management software to streamline your operations." },
  { icon: Users, title: "CRM Development", desc: "Custom customer relationship platforms to drive sales and retention." },
  { icon: Settings, title: "Maintenance", desc: "24/7 technical support, updates, and SLA-backed maintenance." },
  { icon: Zap, title: "Dedicated Teams", desc: "Augment your workforce with our elite software engineers." },
  { icon: Shield, title: "DevOps & Security", desc: "CI/CD pipelines, infrastructure automation, and enterprise security." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
          >
            What We Build For You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            End-to-end software development services tailored to your business goals. 
            We turn complex ideas into elegant, scalable digital products.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
