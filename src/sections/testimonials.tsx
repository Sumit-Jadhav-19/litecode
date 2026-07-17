import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "LiteCode didn't just build our app; they elevated our entire technical strategy. Their attention to clean architecture has saved us countless hours of tech debt.",
    name: "Sarah Jenkins",
    role: "CTO, HealthSync Pro",
    initials: "SJ",
    color: "bg-blue-500"
  },
  {
    quote: "The speed and precision with which they delivered our ERP system was astounding. It felt like we had an in-house team of elite engineers.",
    name: "Michael Chang",
    role: "Operations Director, BuildSmart",
    initials: "MC",
    color: "bg-orange-500"
  },
  {
    quote: "Transitioning to a cloud-native infrastructure seemed daunting, but LiteCode made it seamless. Our platform is faster and more reliable than ever.",
    name: "Elena Rodriguez",
    role: "VP Engineering, RetailX",
    initials: "ER",
    color: "bg-emerald-500"
  },
  {
    quote: "Their UI/UX design team took our complex financial dashboard and made it incredibly intuitive. User adoption skyrocketed by 40% in the first month.",
    name: "David O'Connor",
    role: "Product Manager, FinEdge",
    initials: "DO",
    color: "bg-purple-500"
  },
  {
    quote: "Finding a reliable software partner is hard. LiteCode has been our go-to for three years now. Outstanding communication and flawless execution.",
    name: "Jessica Wu",
    role: "Founder, EduFlow LMS",
    initials: "JW",
    color: "bg-pink-500"
  },
  {
    quote: "The AI integration they built for our logistics platform revolutionized how we route deliveries. A truly world-class development agency.",
    name: "Marcus Thorne",
    role: "CEO, LogiTrack Pro",
    initials: "MT",
    color: "bg-cyan-500"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Don't just take our word for it. Hear from the visionaries who partnered with us to build their digital products.
            </motion.p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex px-4 md:px-[10vw]">
            {testimonials.map((test, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6">
                <div className="glass-card p-8 rounded-3xl h-full flex flex-col relative">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-200 dark:text-white/5" />
                  
                  <div className="flex gap-1 mb-6 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-grow mb-8 relative z-10 font-medium">
                    "{test.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold tracking-wider shadow-inner ${test.color}`}>
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{test.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{test.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === selectedIndex 
                ? 'w-8 h-2.5 bg-blue-500' 
                : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
