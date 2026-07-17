import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/sections/hero';
import { Trust } from '@/sections/trust';
import { Services } from '@/sections/services';
import { WhyChoose } from '@/sections/why-choose';
import { Process } from '@/sections/process';
import { Technologies } from '@/sections/technologies';
import { Portfolio } from '@/sections/portfolio';
import { Industries } from '@/sections/industries';
import { Testimonials } from '@/sections/testimonials';
import { CTA } from '@/sections/cta';
import { Blog } from '@/sections/blog';
import { Contact } from '@/sections/contact';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Chatbot } from '@/components/chatbot';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050816]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <Services />
        <WhyChoose />
        <Process />
        <Technologies />
        <Portfolio />
        <Industries />
        <Testimonials />
        <CTA />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
