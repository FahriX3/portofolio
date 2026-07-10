'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Silicoscan – Web-Based Medical Analysis Platform",
    role: "AI & Full-Stack Engineer",
    description: "Melakukan training dan optimasi model Computer Vision secara mandiri menggunakan dataset medis, serta fine-tuning parameter untuk akurasi tinggi. Mengembangkan platform web skala produksi dan dashboard administratif resmi (silicoscan.id) untuk integrasi AI ke sistem back-office. Merancang arsitektur pipeline data agar inferensi responsif.",
    tech: ["Computer Vision", "AI Fine-Tuning", "Full-Stack Web", "Data Pipeline"],
    media: "/media/Silicoscan – Web-Based Medical Analysis Platform.png",
    mediaType: "image",
    link: "https://silicoscan.id",
    linkType: "website"
  },
  {
    title: "Helpful Trash Bin (Fab Camp Challenge UGM 2024)",
    role: "Hardware & Programmer Team",
    description: "Tempat sampah pintar otomatis berbasis sensor kedekatan (proximity) dengan output audio otomatis untuk mengklasifikasikan pemisahan jenis sampah organik dan anorganik. Menjadi salah satu inovasi utama di hadapan BAPPEDA Kulon Progo.",
    tech: ["Hardware Design", "Proximity Sensor", "Audio Module"],
    media: "/media/Creating a future waste management system.mp4",
    mediaType: "video",
    link: null,
    linkType: null
  },
  {
    title: "Real-Time Physical AI Robot Head",
    role: "Systems Integrator",
    description: "Prototipe sistem robotika modular dengan memisahkan beban kerja komputasi: PC untuk pemrosesan computer vision, serta Raspberry Pi dan ESP32 sebagai penggerak fisik. Komunikasi nirkabel berbasis WebSockets untuk mengirimkan data koordinat pelacakan wajah.",
    tech: ["Computer Vision", "Raspberry Pi", "ESP32", "WebSockets", "Servo Control"],
    media: "/media/Real-Time Physical AI Robot Head.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3",
    linkType: "github"
  },
  {
    title: "i-Fogponic – Smart Aeroponics System",
    role: "Lead Developer & Hardware Designer",
    description: "Sistem aeroponik pintar berbasis IoT menggunakan ESP32 untuk otomasi pengondisian lingkungan tanaman berdasarkan pembacaan data sensor DHT11 dan TDS. Data pipeline rendah latensi yang menghubungkan mikrokontroler dengan infrastruktur cloud.",
    tech: ["ESP32", "IoT", "DHT11", "TDS Sensor", "Cloud Infrastructure"],
    media: "/media/i-Fogponic – Smart Aeroponics System2.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3",
    linkType: "github"
  },
  {
    title: "Scientist Worst Nightmare",
    role: "Unity Game Developer",
    description: "Game survival-horror berbasis Unity berfokus pada manajemen sumber daya dan pemecahan masalah logis di laboratorium terisolasi. Mengimplementasikan sistem mekanik game kompleks termasuk kesehatan, stamina, dan inventaris.",
    tech: ["Unity Engine", "C#", "Game Design", "Unity Version Control"],
    media: "/media/Scientist Worst Nightmare.mp4",
    mediaType: "video",
    link: null,
    linkType: null
  },
  {
    title: "GuardianLink – Personal Security System",
    role: "Embedded Systems Developer",
    description: "Arsitektur logika sistem IoT keselamatan personal yang mengintegrasikan fitur pelacakan lokasi otomatis dan perekaman audio real-time untuk memproteksi tenaga lapangan/medis.",
    tech: ["IoT", "Location Tracking", "Embedded Systems", "Microcontroller"],
    media: "/media/GuardianLink – Personal Safety IoT System2.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3",
    linkType: "github"
  }
];

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pengalaman Proyek & Arsitektur</h2>
          <p className="text-slate-400">Beberapa karya dan riset inovasi yang telah dibangun</p>
        </motion.div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Media Section */}
                <div className="w-full md:w-1/2 relative min-h-[300px] bg-slate-900 overflow-hidden">
                  {project.mediaType === 'video' && project.media ? (
                    <video 
                      src={project.media} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : project.mediaType === 'image' && project.media ? (
                    <Image 
                      src={project.media} 
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-emerald-500/30" />
                    </div>
                  )}
                  {/* Gradient Overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/20 to-transparent md:hidden" />
                  <div className={`absolute inset-0 hidden md:block ${index % 2 !== 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-slate-800/90 via-slate-800/20 to-transparent`} />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10 bg-slate-800/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none -mt-10 md:mt-0 rounded-t-3xl md:rounded-none">
                  <div className="mb-2 text-emerald-400 font-medium text-sm">{project.role}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-slate-900/80 text-emerald-300 rounded border border-emerald-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="mt-auto">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                      >
                        {project.linkType === 'github' ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            <span>Lihat di GitHub</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            <span>Buka Aplikasi</span>
                          </>
                        )}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
