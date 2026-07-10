'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Juara 1 – IT Software Solutions for Business",
    event: "LKS Tingkat Kabupaten (Awal 2026)",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Juara 3 – IT Software Solutions for Business",
    event: "LKS Tingkat Provinsi (Awal 2026)",
    icon: <Trophy className="w-6 h-6 text-yellow-600" />
  },
  {
    title: "Selected Innovator & Presenter",
    event: "Mempresentasikan proyek \"Helpful Trash Bin\" di depan BAPPEDA Kulon Progo pada Fab Camp Challenge (SV UGM, 2024)",
    icon: <Award className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Sertifikat Kepesertaan & Kolaborasi Teknis",
    event: "Fab Camp Challenge 2024, Universitas Gadjah Mada",
    icon: <Award className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Evaluasi Teknis & Pelaporan Industri",
    event: "Menyelesaikan analisis kejuruan dalam kunjungan industri di Perusahaan Game Agate (April 2026)",
    icon: <Award className="w-6 h-6 text-emerald-400" />
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative bg-slate-950/30" id="achievements">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Achievements */}
          <div className="w-full md:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-2">Prestasi & Sertifikasi</h2>
              <p className="text-slate-400">Pencapaian dalam kompetisi dan kolaborasi</p>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 flex gap-6 items-start"
                >
                  <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-inner shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                    <p className="text-slate-400 mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-2">Pendidikan</h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-t-4 border-t-emerald-500 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-slate-800/50">
                <GraduationCap className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-100 mb-2">SMK Negeri 1 Purwokerto</h3>
                <p className="text-emerald-400 font-medium mb-4">Pengembangan Perangkat Lunak dan GIM (PPLG)</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-700/50 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  2024 – Sekarang (Kelas 11)
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
