import { Link } from 'wouter';
import { ArrowUpCircle, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] text-white pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="LiteCode" className="h-10 w-auto" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">LiteCode</span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              We design and develop scalable web applications, mobile apps, enterprise software, and AI-powered products that accelerate business growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Enterprise Software</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest tech insights.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-lg h-10"
              />
              <Button className="bg-gradient-brand text-white border-none rounded-lg h-10 px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} LiteCode. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[10rem] right-6 z-50 w-11 h-11 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-xl shadow-blue-500/20 hover:-translate-y-1 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
