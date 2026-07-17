import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  time: string;
}

const QUICK_REPLIES = [
  'What services do you offer?',
  'How much does it cost?',
  'How long does it take?',
  'Can I see your portfolio?',
  'How do I contact you?',
];

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getBotReply(input: string): string {
  const q = input.toLowerCase();

  if (q.includes('service') || q.includes('offer') || q.includes('build') || q.includes('develop')) {
    return "We build Web Apps, Mobile Apps (iOS & Android), Enterprise Software, Cloud Solutions, AI/ML Products, CRM & ERP systems, and UI/UX Design. Which area interests you most? 🚀";
  }
  if (q.includes('cost') || q.includes('price') || q.includes('much') || q.includes('rate') || q.includes('budget')) {
    return "Project costs vary based on scope and complexity. A typical web app starts from $5,000, and mobile apps from $10,000. We offer free consultations to give you an accurate estimate. Want to schedule one? 💰";
  }
  if (q.includes('time') || q.includes('long') || q.includes('duration') || q.includes('deliver') || q.includes('timeline')) {
    return "Timelines depend on the project scope — a simple web app can take 4–6 weeks, while complex enterprise systems can take 3–6 months. We always provide a detailed roadmap upfront. 📅";
  }
  if (q.includes('portfolio') || q.includes('work') || q.includes('project') || q.includes('case') || q.includes('example')) {
    return "We've delivered 150+ projects across healthcare, fintech, retail, logistics, and more! You can scroll down to our Portfolio section to see case studies. 🎨";
  }
  if (q.includes('contact') || q.includes('reach') || q.includes('talk') || q.includes('call') || q.includes('email') || q.includes('meet')) {
    return "You can reach us at:\n📧 info@litecode.com\n📞 +1 (234) 567-8900\nOr scroll down to fill out our Contact form — we reply within 24 hours! 📩";
  }
  if (q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework') || q.includes('react') || q.includes('node')) {
    return "Our stack includes React, Next.js, Node.js, .NET, Python, Flutter, React Native, AWS, Azure, PostgreSQL, MongoDB, and more. We choose the right tech for your specific needs. ⚙️";
  }
  if (q.includes('team') || q.includes('who') || q.includes('expert') || q.includes('developer')) {
    return "LiteCode has 30+ expert developers, designers, QA engineers, and project managers — all specialists in their domains with 10+ years of combined experience. 👥";
  }
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good')) {
    return "Hello! 👋 Great to have you here! I'm the LiteCode assistant. I can answer questions about our services, pricing, timelines, and more. What can I help you with?";
  }
  if (q.includes('thank') || q.includes('thanks') || q.includes('appreciate')) {
    return "You're very welcome! 😊 Feel free to ask anything else, or reach out to our team directly — we'd love to work with you!";
  }
  if (q.includes('ai') || q.includes('machine learning') || q.includes('ml') || q.includes('automation')) {
    return "We build custom AI/ML solutions — from recommendation engines and NLP chatbots to computer vision and predictive analytics. Tell us your use case and we'll map out a solution! 🤖";
  }

  return "Thanks for your message! For detailed inquiries, our team is best reached at info@litecode.com or via the Contact form below. We typically respond within a few hours. 😊";
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: 'bot',
    text: "👋 Hi! I'm the LiteCode assistant.\n\nI can help you with questions about our services, pricing, timelines, and more. What would you like to know?",
    time: getTime(),
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasNotification(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), from: 'user', text: text.trim(), time: getTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, from: 'bot', text: getBotReply(text), time: getTime() };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 900 + Math.random() * 500);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 flex flex-col"
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 text-white" style={{ background: 'linear-gradient(135deg, #0284C7, #0EA5E9, #22D3EE)' }}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">LiteCode Assistant</p>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  Online · Replies instantly
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-[#0d1117]">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #0284C7, #22D3EE)' }}>
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[78%] ${msg.from === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === 'user'
                          ? 'text-white rounded-br-sm'
                          : 'bg-white dark:bg-[#1a2332] text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-700/50'
                      }`}
                      style={msg.from === 'user' ? { background: 'linear-gradient(135deg, #0284C7, #22D3EE)' } : {}}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start gap-2">
                  <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0284C7, #22D3EE)' }}>
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-[#1a2332] border border-gray-100 dark:border-gray-700/50 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 bg-gray-50 dark:bg-[#0d1117] border-t border-gray-100 dark:border-gray-800 flex gap-2 overflow-x-auto no-scrollbar">
                {QUICK_REPLIES.slice(0, 3).map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-3 bg-white dark:bg-[#111827] border-t border-gray-100 dark:border-gray-800 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                placeholder="Type a message…"
                className="flex-1 text-sm bg-gray-100 dark:bg-[#1a2332] text-gray-800 dark:text-gray-100 placeholder-gray-400 rounded-full px-4 py-2.5 outline-none border-none"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #0284C7, #22D3EE)' }}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <button
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Open chat"
          className="relative w-11 h-11 rounded-full text-white shadow-xl shadow-blue-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-200"
          style={{ background: 'linear-gradient(135deg, #0284C7, #0EA5E9, #22D3EE)' }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Bot className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification dot */}
          {hasNotification && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[9px] text-white font-bold flex items-center justify-center">
              1
            </span>
          )}
        </button>
      </motion.div>
    </>
  );
}
