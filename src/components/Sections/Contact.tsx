import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../constants';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    // Simulate or Real EmailJS
    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && formRef.current) {
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
            setLoading(false);
            setSuccess(true);
            formRef.current?.reset();
            setTimeout(() => setSuccess(false), 5000);
        })
        .catch((err) => {
            console.error("EmailJS Error:", err);
            setLoading(false);
            setError(true);
        });
    } else {
        // Fallback Simulation for demo
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            formRef.current?.reset();
            setTimeout(() => setSuccess(false), 5000);
            alert("EmailJS variables not set. Message simulated.");
        }, 1500);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: <Phone size={20} />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: <MapPin size={20} />, label: "Location", value: PERSONAL_INFO.location, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-accent font-medium mb-2">GET IN TOUCH</h3>
          <h2 className="text-4xl font-bold font-heading">Let's Work Together</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
             <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
               <h4 className="text-xl font-bold mb-6 text-white">Contact Information</h4>
               <div className="space-y-6">
                 {contactInfo.map((item, i) => (
                   <a
                     key={i}
                     href={item.href}
                     className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group"
                   >
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                       {item.icon}
                     </div>
                     <div>
                       <p className="text-xs text-slate-500">{item.label}</p>
                       <p className="font-medium">{item.value}</p>
                     </div>
                   </a>
                 ))}
               </div>
               
               <div className="mt-8 pt-8 border-t border-white/10">
                 <p className="text-slate-400 text-sm mb-4">
                   Looking for a dedicated developer to bring your ideas to life? I'm currently available for freelance projects and full-time opportunities.
                 </p>
               </div>
             </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 glass-card p-8 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary transition-colors">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary transition-colors">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    success ? 'bg-green-600 text-white' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/25 text-white'
                }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : success ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              {error && <p className="text-red-500 text-sm text-center">Failed to send. Please try again or email directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;