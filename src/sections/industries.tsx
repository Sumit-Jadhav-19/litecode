import { motion } from 'framer-motion';
import { 
  HeartPulse, LineChart, GraduationCap, ShoppingBag, 
  Factory, Plane, Building2, UtensilsCrossed, 
  Truck, Landmark, Car, Film 
} from 'lucide-react';

const industries = [
  { icon: HeartPulse, name: 'Healthcare', desc: 'Telemedicine, EHR systems, and patient portals.' },
  { icon: LineChart, name: 'Finance', desc: 'Fintech apps, trading platforms, and secure banking.' },
  { icon: GraduationCap, name: 'Education', desc: 'LMS, virtual classrooms, and student platforms.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'E-commerce, POS systems, and inventory.' },
  { icon: Factory, name: 'Manufacturing', desc: 'IoT integrations, ERPs, and automation.' },
  { icon: Plane, name: 'Travel', desc: 'Booking systems, travel portals, and CRM.' },
  { icon: Building2, name: 'Real Estate', desc: 'Property management and virtual tours.' },
  { icon: UtensilsCrossed, name: 'Hospitality', desc: 'Restaurant management and reservations.' },
  { icon: Truck, name: 'Logistics', desc: 'Fleet tracking, supply chain, and warehouse software.' },
  { icon: Landmark, name: 'Government', desc: 'Secure public service portals and compliance.' },
  { icon: Car, name: 'Automotive', desc: 'Dealer software and smart vehicle integrations.' },
  { icon: Film, name: 'Media', desc: 'Streaming platforms and content management systems.' },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 relative bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Deep domain expertise across various sectors allows us to build software that truly understands your business logic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-white/5 bg-white/40 dark:bg-black/40"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 dark:from-blue-500/10 to-orange-50 dark:to-orange-500/10 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{ind.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
