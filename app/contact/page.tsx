'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="flex-grow flex items-center pt-24 pb-32 px-6 relative overflow-hidden">
      
      {/* Soft Purple/Cyan Background Blurs specific to the contact page */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[120px] -z-10 pointer-events-none transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-slate-900">
            Let's Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500">
              Something Amazing
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Share your idea and we'll turn it into reality 🚀
          </p>
        </motion.div>

        {/* Right Column: Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="glass-card p-8 sm:p-10 w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium" 
                  placeholder="John Doe" 
                  required 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium" 
                  placeholder="john@example.com" 
                  required 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Project Details</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all text-slate-900 resize-none placeholder:text-slate-400 font-medium" 
                  placeholder="Tell us about your goals..." 
                  required 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})} 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={status === 'loading'} 
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/25 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-2"
              >
                {status === 'loading' ? (
                  <><Loader2 size={20} className="animate-spin" /> Transmitting...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Received!</>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">Transmission failed. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
