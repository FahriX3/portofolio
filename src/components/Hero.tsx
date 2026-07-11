'use client';

import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
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
          className="flex gap-4 mb-12"
        >
          <a href="https://github.com/FahriX3" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/fahri-azzam-mandriva-8976a03b7" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:fahrimandriva138@gmail.com" className="p-3 glass rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
            <Mail className="w-6 h-6" />
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
