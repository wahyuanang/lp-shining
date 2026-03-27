"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, Trophy, Sparkles, ChevronRight } from "lucide-react";

const levels = [
  {
    id: "easy",
    title: "Count On Me",
    levelName: "EASY",
    desc: "Lagu dengan lirik perlahan dan memuat banyak kata-kata umum (Basic Vocab).",
    color: "emerald",
    bg: "from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-500/30",
    textColor: "text-emerald-700",
  },
  {
    id: "medium",
    title: "You'll Be In My Heart",
    levelName: "MEDIUM",
    desc: "Tempo sedikit lebih cepat, melatih listening ekstra dan peribahasa idiom.",
    color: "amber",
    bg: "from-amber-400 to-amber-600",
    shadow: "shadow-amber-500/30",
    textColor: "text-amber-700",
  },
  {
    id: "hard",
    title: "Runaway",
    levelName: "HARD",
    desc: "Lagu Rap / tempo dinamis dengan penggunaan Advance Vocabulary.",
    color: "rose",
    bg: "from-rose-400 to-rose-600",
    shadow: "shadow-rose-500/30",
    textColor: "text-rose-700",
  }
];

export default function MusicMap() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 lg:px-12 py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shining-purple/10 blur-[120px] rounded-full point-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-shining-yellow/10 blur-[100px] rounded-full point-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-2xl mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-shining-dark text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles size={16} className="text-shining-yellow fill-shining-yellow" />
          Choose Your Journey
        </span>
        <h1 className="text-5xl lg:text-7xl font-title text-shining-dark mb-4 drop-shadow-sm">Music Map</h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-lg mx-auto">
          Pilih level lagumu dan mulailah belajar bahasa Inggris dengan cara yang paling seru!
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-3 gap-8">
        {levels.map((level, idx) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -10 }}
            className={`bg-white rounded-[2.5rem] p-8 lg:p-10 border border-gray-100 shadow-xl ${level.shadow} hover:shadow-2xl transition-all flex flex-col items-center text-center group cursor-pointer relative overflow-hidden`}
          >
            {/* Background Glow inside card */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${level.color}-100 blur-3xl rounded-full opacity-50 block`} />
            
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${level.bg} text-white flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
              <PlayCircle size={40} className="ml-1" />
            </div>
            
            <span className={`px-4 py-1.5 rounded-full bg-${level.color}-50 ${level.textColor} font-black text-sm tracking-wider mb-4 border border-${level.color}-100`}>
              LEVEL: {level.levelName}
            </span>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-shining-dark mb-4 leading-tight group-hover:text-shining-purple transition-colors">
              "{level.title}"
            </h2>
            
            <p className="text-gray-500 mb-8 leading-relaxed max-w-sm mx-auto">
              {level.desc}
            </p>
            
            <Link href={`/music-map/${level.id}`} className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors group/btn shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
              Play Mission <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
