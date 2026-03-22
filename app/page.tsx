'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Shield, Cloud, BarChart3 } from 'lucide-react';

const trustedBy = ['Google', 'KPMG', 'Domino\'s', 'KFC', 'BCG', 'Americana'];

const consultingServices = [
  { id: '01', title: 'IT Strategy Consulting', desc: 'Align technology with your business goals. We digitalize core tech, craft architecture, and implement future-ready solutions.' },
  { id: '02', title: 'Technology Consulting', desc: 'From strategy to execution, we identify opportunities that bring disruptive changes to your processes and execution roadmap.' },
  { id: '03', title: 'IT Risk & Compliance', desc: 'Align with industry standards. We audit systems for vulnerabilities and implement robust security to mitigate enterprise risks.' },
  { id: '04', title: 'Digital Transformation', desc: 'Assist businesses at all stages with comprehensive strategies, optimizations, and integrations across fintech, healthcare, and more.' },
  { id: '05', title: 'Process Optimization', desc: 'Define the right technology processes to optimize business operations, reduce overhead costs, and maximize overall efficiency.' },
  { id: '06', title: 'Cloud & Migration', desc: 'Seamlessly transition your legacy infrastructure to scalable, secure cloud environments on AWS, Azure, or Google Cloud.' },
];

export default function Home() {
  return (
    <main className="flex-grow pt-20 pb-0 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-bold mb-6 tracking-wide">
            ENTERPRISE IT CONSULTING
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Uncovering Value with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Advanced IT Consultation</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-md font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/30">
              Schedule a Call
            </Link>
            <Link href="/services" className="text-slate-700 font-bold px-8 py-4 hover:text-purple-600 flex items-center gap-2 transition-all">
              Explore Services <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
        
        {/* Right side abstract tech composition */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] rounded-2xl bg-gradient-to-tr from-purple-50 to-blue-50 border border-purple-100/50 flex items-center justify-center overflow-hidden">
           <div className="absolute w-[120%] h-[120%] bg-purple-200/40 rounded-full blur-[80px] -z-10" />
           <div className="space-y-5 w-3/4 z-10">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex gap-5 items-center transform -translate-x-6">
                <div className="bg-green-100 p-4 rounded-lg text-green-600"><BarChart3 size={28} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg">Process Optimization</h4><p className="text-sm text-slate-500">4x efficiency growth</p></div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex gap-5 items-center transform translate-x-6">
                <div className="bg-blue-100 p-4 rounded-lg text-blue-600"><Cloud size={28} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg">Cloud Scalability</h4><p className="text-sm text-slate-500">Zero-downtime deployment</p></div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex gap-5 items-center transform -translate-x-2">
                <div className="bg-purple-100 p-4 rounded-lg text-purple-600"><Shield size={28} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg">Risk Assessment</h4><p className="text-sm text-slate-500">Bank-grade security models</p></div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* 2. TRUST BANNER */}
      <section className="border-y border-slate-200 bg-white/60 backdrop-blur-md py-10 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 font-bold mb-8 tracking-wide text-sm uppercase">Trusted by conglomerates, enterprises, and startups alike</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {trustedBy.map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Additional Value with Advanced IT Consultation</h2>
          <p className="text-lg text-slate-600 font-medium">Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-purple-300 transition-all duration-300 group rounded-xl cursor-default"
            >
              <div className="text-5xl font-black text-slate-100 group-hover:text-purple-100 transition-colors mb-4">{srv.id}.</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">{srv.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Dark Section) */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Driving IT Excellence Across Industries</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              As a reliable IT consultancy services company with a complete focus on innovation and adaptability, we craft the most unique IT strategies that transcend industry boundaries.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Keeping Transparency Paramount</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Believing in an open work culture, we work alongside clients, keeping them updated about developments, ideas, and strategies.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Enhanced Security</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Our consultants specialize in identifying and mitigating security threats, implementing robust measures for continuous protection.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Rapid Project Delivery</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">As leaders in software consulting, we are committed to accelerating project timelines without compromising quality.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 blur-[100px] opacity-20 rounded-full" />
             <div className="bg-slate-900 border border-slate-800 p-12 rounded-2xl relative z-10 text-center shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Didn't find what you're looking for?</h3>
                <p className="text-slate-400 mb-10 text-lg">Let us know your specific enterprise needs, and we'll tailor a strategic solution just for you.</p>
                <Link href="/contact" className="block w-full bg-white text-slate-900 font-bold py-5 rounded-md hover:bg-purple-50 transition-colors text-lg">
                  Schedule Free Consultation
                </Link>
             </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
