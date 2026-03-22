'use client';
import { motion } from 'framer-motion';
import { HeartPulse, Landmark, ShoppingCart, Briefcase } from 'lucide-react';

const industries = [
  { name: 'Healthcare SaaS', icon: HeartPulse, desc: 'HIPAA compliant systems and telemedicine platforms.' },
  { name: 'Fintech & Banking', icon: Landmark, desc: 'Secure payment gateways and financial dashboards.' },
  { name: 'E-Commerce', icon: ShoppingCart, desc: 'Scalable retail and inventory management systems.' },
  { name: 'Enterprise IT', icon: Briefcase, desc: 'Custom internal tools and workflow automation.' }
];

export default function Expertise() {
  return (
    <main className="flex-grow pt-24 pb-32 px-6 max-w-7xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Expertise</span></h1>
        <p className="text-slate-500 text-lg">Delivering robust solutions across key industries.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {industries.map((ind, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, type: "spring" }} className="glass-card p-8 flex items-start gap-6 hover:shadow-lg hover:border-purple-200 transition-all cursor-default">
            <div className="bg-purple-100 p-4 rounded-xl text-purple-600"><ind.icon size={32} /></div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{ind.name}</h3>
              <p className="text-slate-500 leading-relaxed">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
