'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/media/background.jpeg" 
          alt="Background" 
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-8"
        >
          <Image
            src="/media/Profil.jpeg"
            alt="Fahri Azzam Mandriva"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          FAHRI AZZAM MANDRIVA
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-300 font-light mb-8 text-gradient"
        >
          Junior Software Developer | AI, IoT & Embedded Systems
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="https://github.com/FahriX3" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/fahri-azzam-mandriva-8976a03b7" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://wa.me/6281225178895" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/fahri_man007/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@fahri.mandriva" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaTiktok className="w-6 h-6" />
          </a>
          <a href="mailto:fahrimandriva138@gmail.com" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
