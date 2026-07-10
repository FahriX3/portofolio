'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Ringkasan Profesional</h2>
          </div>
          
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg font-sans">
            <p>
              Siswa Kelas 11 Pengembangan Perangkat Lunak dan GIM (PPLG) di SMK Negeri 1 Purwokerto
              dengan spesialisasi di bidang arsitektur sistem, pemrograman multi-stack, dan integrasi
              hardware/IoT.
            </p>
            <p>
              Berpengalaman sebagai <strong className="text-emerald-400 font-semibold">"Modern Architect"</strong> yang merancang logika inti sistem
              terdistribusi, otomasi kontrol, serta komunikasi data real-time. Memiliki rekam jejak kompetitif
              yang solid melalui pencapaian peringkat atas dalam kompetisi software engineering tingkat
              kabupaten dan provinsi, serta berpengalaman merancang solusi teknologi yang diakui oleh
              instansi daerah.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
