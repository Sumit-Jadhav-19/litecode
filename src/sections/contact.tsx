import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast.success("Message Sent Successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white"
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12"
            >
              Ready to transform your business with custom software? 
              Reach out to our experts for a free consultation and project estimate.
            </motion.p>

            <div className="space-y-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Email Us</h4>
                  <a href="mailto:hello@litecode.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hello@litecode.com</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Call Us</h4>
                  <a href="tel:+18001234567" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">+1 (800) 123-4567</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Visit Office</h4>
                  <p className="text-gray-600 dark:text-gray-400">100 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="h-64 rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 mix-blend-overlay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/20 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full -z-10" />
            
            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-8">Send Us a Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white dark:bg-[#050816] border-gray-200 dark:border-gray-800 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-white dark:bg-[#050816] border-gray-200 dark:border-gray-800 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="bg-white dark:bg-[#050816] border-gray-200 dark:border-gray-800 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white dark:bg-[#050816] border-gray-200 dark:border-gray-800 h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="custom">Custom Software / Enterprise</SelectItem>
                            <SelectItem value="cloud">Cloud Migration</SelectItem>
                            <SelectItem value="ai">AI Integration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project goals, timeline, and budget..." 
                          className="min-h-[120px] bg-white dark:bg-[#050816] border-gray-200 dark:border-gray-800 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-brand text-white h-14 rounded-xl font-medium text-lg magnetic-hover shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
