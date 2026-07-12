'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';

const projects = [
  {
    title: "SI-GERDU PANDANG",
    role: "Full-Stack Web Developer",
    description: "Sistem Informasi Gerakan Terpadu Penanganan Penyakit Tidak Menular. Merancang arsitektur aplikasi web rekam medis tersentralisasi. Mengimplementasikan sistem otorisasi multi-role dan data scoping yang ketat. Mengembangkan alur logika klinis otomatis (automated clinical logic engine) untuk menghitung IMT secara real-time serta mengategorikan tingkat Tensi pasien.",
    tech: ["Laravel 11.x", "MySQL", "Tailwind CSS", "Alpine.js", "PHP"],
    media: "/media/SI-GERDU PANDANG.png",
    mediaType: "image",
    link: "https://github.com/FahriX3/Si-Gerdu-Pandang",
    linkType: "github"
  },
  {
    title: "Silicoscan – Web-Based Medical Analysis Platform",
    role: "Full-stack web developer & AI Developer",
    description: "Melatih dan melakukan penyesuaian parameter model computer vision menggunakan dataset medis. Mengintegrasikan model AI dengan aplikasi web dan dashboard administratif. Mengembangkan alur pemrosesan data (Pipeline) yang menghubungkan segmentasi (U-Net), inferensi model deteksi (YOLO11), dan penyajian hasil visual ke pengguna.",
    tech: ["Python", "FastAPI", "YOLO11", "PyTorch", "ONNXRuntime", "MySQL", "OpenCV", "Docker"],
    media: "/media/Silicoscan – Web-Based Medical Analysis Platform.png",
    mediaType: "image",
    link: "https://silicoscan.id",
    linkType: "website"
  },
  {
    title: "Scientist Worst Nightmare",
    role: "Unity Game Developer",
    description: "Mengembangkan gim survival horror berbasis Unity dengan fokus pada pengelolaan sumber daya dan pemecahan masalah dalam lingkungan simulasi laboratorium. Mengimplementasikan logika permainan yang menghubungkan sistem generator listrik, akses pintu, dan mekanisme kondisi permainan.",
    tech: ["Unity Engine", "C#", "Unity Version Control"],
    media: "/media/Scientist Worst Nightmare.mp4",
    mediaType: "video",
    link: null,
    linkType: null
  },
  {
    title: "i-Fogponic – Smart Aeroponics System",
    role: "IoT Developer",
    description: "Mengembangkan sistem aeroponik pintar berbasis IoT untuk pemantauan kondisi lingkungan dan otomasi pengelolaan tanaman menggunakan ESP32 (sensor DHT11 dan TDS). Mengimplementasikan alur pengiriman data ke infrastruktur cloud dan mekanisme visualisasi data telemetri secara real-time.",
    tech: ["ESP32", "C/C++", "DHT11", "RTC", "TDS Sensor", "IoT Telemetry", "Flutter"],
    media: "/media/i-Fogponic – Smart Aeroponics System2.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3/i-Fogponic-Smart_Indoor_Aeroponics_System",
    linkType: "github"
  },
  {
    title: "GuardianLink – Personal Safety IoT System",
    role: "IoT Developer",
    description: "Merancang sistem keselamatan personal berbasis hybrid (IoT + Aplikasi Android) menggunakan ESP32 sebagai wearable panic button. Mengembangkan aplikasi mobile yang berjalan di latar belakang, dengan alur logika otomatis: mengirim koordinat GPS, perekaman suara, dan data darurat ke Telegram.",
    tech: ["ESP32", "Piezo Electric", "Flutter"],
    media: "/media/GuardianLink – Personal Safety IoT System2.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3/GuardianLink-Personal_Safety_IoT_System",
    linkType: "github"
  },
  {
    title: "Real-Time Physical AI Robot Head",
    role: "IoT & Systems Integration",
    description: "Mengembangkan prototipe robotika modular yang mengintegrasikan computer vision, perangkat komputasi, dan sistem embedded. Memisahkan proses komputasi antara PC untuk computer vision serta Raspberry Pi dan ESP32 untuk pengendalian perangkat mekanis secara real-time melalui WebSockets.",
    tech: ["Computer Vision", "Raspberry Pi", "ESP32", "WebSockets", "Servo Control"],
    media: "/media/Real-Time Physical AI Robot Head.mp4",
    mediaType: "video",
    link: "https://github.com/FahriX3/Real-Time-Physical-AI-Robot-Head",
    linkType: "github"
  },
  {
    title: "Fingerprint-Absen",
    role: "IoT Developer",
    description: "Merancang perangkat keras absensi berbasis IoT menggunakan sensor biometrik sidik jari (AS608) dan ESP32. Mengembangkan arsitektur komunikasi data nirkabel untuk mengirimkan log kehadiran secara real-time. Membangun logika backend untuk mengelola data master pengguna dan mencatat kehadiran otomatis.",
    tech: ["ESP32", "AS608 Fingerprint Sensor", "C++", "PHP", "Node.js", "MySQL"],
    media: "/media/Fingerprint-Absen.jpeg",
    mediaType: "image",
    link: "https://github.com/FahriX3/fingerprint-absen",
    linkType: "github"
  },
  {
    title: "Helpful Trash Bin (Fab Camp Challenge UGM 2024)",
    role: "Hardware & Programmer Team",
    description: "Merancang arsitektur perangkat keras dan logika program untuk tempat sampah pintar otomatis berbasis sensor kedekatan (proximity). Mengintegrasikan modul output audio otomatis untuk mengklasifikasikan pemisahan jenis sampah organik dan anorganik saat mendeteksi pengguna.",
    tech: ["ESP32", "C/C++", "HC SR04", "DFPlayer", "Blink"],
    media: "/media/Creating a future waste management system.mp4",
    mediaType: "video",
    link: null,
    linkType: null
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
                            <FaGithub className="w-4 h-4" />
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
