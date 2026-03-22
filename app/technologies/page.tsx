'use client';
import { motion } from 'framer-motion';

const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'Flutter', 'Tailwind CSS'];

export default function Technologies() {
  return (
    <main className="flex-grow pt-24 pb-32 px-6 max-w-7xl mx-auto w-full text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Technologies</span></h1>
        <p className="text-slate-500 text-lg">The modern stack powering our enterprise solutions.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStack.map((tech, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05, type: "spring", bounce: 0.5 }} className="glass-card p-8 text-xl font-semibold text-slate-700 hover:text-purple-600 hover:border-purple-300 hover:shadow-purple-500/10 hover:-translate-y-2 transition-all cursor-pointer shadow-sm hover:shadow-lg">
            {tech}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
