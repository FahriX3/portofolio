'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Wrench } from 'lucide-react';

const skills = [
  {
    category: "Bahasa Pemrograman",
    icon: <Code2 className="w-5 h-5" />,
    items: ["C#", "Python", "JavaScript", "TypeScript", "C/C++"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30"
  },
  {
    category: "Framework & Engine",
    icon: <Layers className="w-5 h-5" />,
    items: [".NET", "Next.js", "Unity Engine"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30"
  },
  {
    category: "IoT & Embedded Systems",
    icon: <Cpu className="w-5 h-5" />,
    items: ["ESP32", "Raspberry Pi", "ATtiny85", "Integrasi Sensor", "Kontrol Servo", "Desain PCB"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30"
  },
  {
    category: "Tools & Infrastruktur",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git/GitHub", "Docker", "Linux Ubuntu", "Cloudflare Tunnels", "Unity Version Control"],
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30"
  },
  {
    category: "Teknologi Lain",
    icon: <Layers className="w-5 h-5" />,
    items: ["Kotlin", "Flutter", "Laravel", "Klipper Firmware", "WebSockets"],
    color: "from-slate-500/20 to-gray-500/20",
    border: "border-slate-500/30"
  }
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-slate-950/50" id="tech-stack">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keahlian Teknis</h2>
          <p className="text-slate-400">Tech Stack & Tools yang saya kuasai</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 border ${skill.border} hover:bg-slate-800/50 transition-colors ${
                index === skills.length - 1 && skills.length % 2 !== 0 
                  ? 'md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto w-full' 
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-sm bg-slate-900/60 text-slate-300 border border-slate-700/50 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
