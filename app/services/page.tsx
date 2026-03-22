'use client';
import { motion } from 'framer-motion';
import { 
  Network, 
  Settings, 
  ShieldCheck, 
  CloudRain, 
  Database, 
  LayoutTemplate, 
  BrainCircuit, 
  Code2, 
  Globe2,
  CheckCircle2
} from 'lucide-react';

const services = [
  { 
    title: 'Digital Strategy & Architecture', 
    desc: 'Navigate digital disruption with enterprise-grade roadmaps and resilient IT frameworks aligned with your core business objectives.', 
    icon: Network 
  },
  { 
    title: 'IT Modernization & Operations', 
    desc: 'Optimize legacy systems and streamline workflows to reduce operational overhead, ensuring maximum agility and performance.', 
    icon: Settings 
  },
  { 
    title: 'Cybersecurity & Risk Assurance', 
    desc: 'Secure digital assets with zero-trust architecture, robust threat intelligence, and comprehensive regulatory compliance audits.', 
    icon: ShieldCheck 
  },
  { 
    title: 'Cloud Engineering & Scalability', 
    desc: 'Accelerate business agility through seamless cloud migrations, cloud-native development, and infrastructure management.', 
    icon: CloudRain 
  },
  { 
    title: 'Data Intelligence & Analytics', 
    desc: 'Transform raw data into strategic assets through advanced analytics, BI dashboards, and enterprise data governance.', 
    icon: Database 
  },
  { 
    title: 'Enterprise SaaS & Systems', 
    desc: 'Design, deploy, and maintain mission-critical applications, including tailored ERP, CRM, and highly secure healthcare platforms.', 
    icon: LayoutTemplate 
  },
  { 
    title: 'AI & Cognitive Automation', 
    desc: 'Embed machine learning, predictive analytics, and smart automation into workflows to drive next-generation operational efficiency.', 
    icon: BrainCircuit 
  },
  { 
    title: 'Custom Software Engineering', 
    desc: 'Build highly scalable, cross-platform applications using modern agile frameworks, clean architecture, and rapid prototyping.', 
    icon: Code2 
  },
  { 
    title: 'Global IT Staffing & Delivery', 
    desc: 'Leverage flexible delivery models with our on-demand, elite offshore and onshore tech talent to rapidly scale your capabilities.', 
    icon: Globe2 
  },
];

const valueProps = [
  "Strategic architecture starting with business objectives, not just code.",
  "Risk-based execution addressing vulnerabilities before they impact deployment.",
  "Phased, agile delivery allowing you to scale resources up or down on demand.",
  "Deep expertise in highly scalable, cross-platform enterprise environments.",
  "Blended delivery models including specialized offshore, onshore, and hybrid teams."
];

export default function Services() {
  return (
    <main className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-purple-100 shadow-sm cursor-default">
            Let's Transform Together
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Technology Consulting</span>
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed">
            Whether you are looking to automate workflows, modernize infrastructure, or embark on an end-to-end digital transformation, Zenith Global provides the strategic vision and technical execution to get you there.
          </p>
        </motion.div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }} 
              className="glass-card p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default group border border-slate-100/50 hover:border-purple-200"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Zenith Advantage Section (Modeled after Protiviti's Value/Delivery sections) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Zenith</span> Advantage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                In an era of rapid digital disruption, technology must work for you, not against you. Our professionals become your trusted advisors, blending design thinking with agile methodology to deliver solutions that solve real-world business challenges.
              </p>
              <div className="space-y-4">
                {valueProps.map((prop, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                    <p className="text-slate-700 text-lg">{prop}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-[2rem] p-10 border border-purple-100 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Flexible Delivery Models</h3>
              <p className="text-slate-600 text-lg mb-6 relative z-10">
                We tailor our delivery to meet your organizational needs. Whether you require solution-based technology consulting, specialized project staffing, or a blended onshore/offshore approach, we provide the exact framework to support your goals.
              </p>
              <a href="/contact" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                Discuss Your Framework &rarr;
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
