'use client'; import { motion } from 'framer-motion';
export default function Page() { return (
<div className="pt-20 min-h-screen px-6">
  <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} className="text-center py-24 bg-gradient-to-b from-blue-500/10">
    <h1 className="text-5xl font-bold">AI Integration</h1>
    <p className="mt-6 text-2xl max-w-3xl mx-auto">Seamless ChatGPT, TensorFlow & predictive AI into your systems.</p>
  </motion.div>
  <div className="max-w-4xl mx-auto py-20 text-lg space-y-6">✔ OpenAI • Grok • Machine Learning</div>
  <motion.div whileHover={{ scale: 1.05 }} className="text-center pb-20"><a href="/contact" className="bg-blue-600 px-16 py-6 rounded-2xl text-xl font-bold inline-block">Start AI Project →</a></motion.div>
</div> ); }
