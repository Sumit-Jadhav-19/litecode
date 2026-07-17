import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF] to-[#F7931E]" />
      
      {/* Animated Mesh / Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] mix-blend-overlay pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight tracking-tight">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
            Let's turn your idea into a product that accelerates your business. Our experts are ready to map out your architecture and timeline.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg magnetic-hover shadow-2xl flex items-center gap-2 group w-full sm:w-auto"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">
                Schedule Free Consultation
              </span>
              <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
