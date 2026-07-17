import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const posts = [
  {
    title: "Microservices vs Monolith: Choosing the Right Architecture",
    category: "Architecture",
    date: "Oct 12, 2023",
    author: "Alex Rivera",
    excerpt: "Explore the trade-offs between microservices and monolithic architectures and learn which approach is best suited for your next enterprise application.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "The Future of Web Development: Next.js 14 and React Server Components",
    category: "Web Development",
    date: "Sep 28, 2023",
    author: "Sam Chen",
    excerpt: "Deep dive into how React Server Components are revolutionizing data fetching and performance in modern web applications.",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    title: "Implementing AI-Powered Search in E-commerce Platforms",
    category: "AI Integration",
    date: "Sep 15, 2023",
    author: "Jordan Smith",
    excerpt: "Learn how vector databases and LLMs can dramatically improve search relevance and conversion rates in retail software.",
    gradient: "from-purple-500 to-pink-500"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
            >
              Latest Insights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Thoughts, engineering tutorials, and updates from the LiteCode team.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 w-full md:w-auto"
          >
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-full w-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col border-none hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250px_250px] animate-[shimmer_5s_linear_infinite]" />
                
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide text-gray-900 dark:text-white shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white dark:bg-[#111827]">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 mt-auto group/link">
                  Read More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
