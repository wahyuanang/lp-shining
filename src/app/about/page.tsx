"use client";

import { motion, Variants } from "framer-motion";
import { Target, Lightbulb, Music, Sparkles, Heart, Rocket, User, Mail, GraduationCap, Code } from "lucide-react";
import Image from "next/image";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <div className="flex flex-col pb-20 overflow-hidden bg-slate-50">
      
      {/* HEADER / HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-shining-dark via-[#1e104f] to-slate-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-shining-purple/30 blur-[120px] rounded-full point-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-shining-yellow/20 blur-[100px] rounded-full point-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mb-6 relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-shining-yellow text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
               <Sparkles size={16} className="fill-shining-yellow" />
               Behind the Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-black tracking-tight mb-4 drop-shadow-lg">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-shining-purple to-shining-violet">SHINING</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl leading-relaxed"
          >
            Membawa kebahagiaan sejati dalam perjalanan belajar bahasa Inggris melalui melodi dan lirik lagu favoritmu.
          </motion.p>
        </div>
      </section>

      {/* VISION & MISSION / PURPOSE */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 -mt-10 mb-24">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-shining-purple/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-shining-yellow/10 blur-[80px] rounded-full" />
          
          <motion.div variants={fadeInUp} className="text-center mb-16 relative z-10">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-shining-dark mb-4 px-2">Tujuan Pengembangan</h2>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
               SHINING lahir dari kegelisahan bahwa belajar bahasa asing seringkali dianggap kaku dan membosankan. Kami ingin merubah narasi tersebut!
             </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr w-full relative z-10">
             {/* Card 1 */}
             <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-[2.5rem] border border-blue-100 hover:shadow-xl transition-shadow group flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm mb-6 group-hover:scale-110 transition-transform -rotate-6">
                  <Heart size={32} className="fill-blue-500/20" />
                </div>
                <h3 className="text-2xl font-bold text-shining-dark mb-4">Membuat Belajar Menyenangkan</h3>
                <p className="text-gray-600 leading-relaxed mt-auto">
                  Musik adalah bahasa universal yang menyentuh hati. Dengan menggabungkan pembelajaran dengan lagu yang kamu cintai, proses belajar terasa seperti hiburan, bukan beban akademis.
                </p>
             </motion.div>

             {/* Card 2 */}
             <motion.div variants={fadeInUp} className="bg-gradient-to-br from-shining-purple to-shining-violet p-8 rounded-[2.5rem] text-white hover:shadow-2xl transition-shadow group flex flex-col relative overflow-hidden shadow-[0_8px_30px_rgb(91,33,182,0.2)] md:transform md:-translate-y-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-shining-yellow shadow-sm mb-6 group-hover:scale-110 transition-transform rotate-3">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Meningkatkan Kefasihan (Fluency)</h3>
                <p className="text-white/90 leading-relaxed mt-auto">
                  Menyanyi mengikuti lirik melatih organ artikulasi (mulut & lidah) untuk terbiasa mengucapkan kata-kata bahasa Inggris secara fasih dan senatural penutur asli.
                </p>
             </motion.div>

             {/* Card 3 */}
             <motion.div variants={fadeInUp} className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-[2.5rem] border border-amber-100 hover:shadow-xl transition-shadow group flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm mb-6 group-hover:scale-110 transition-transform rotate-6">
                  <Lightbulb size={32} className="fill-amber-500/20" />
                </div>
                <h3 className="text-2xl font-bold text-shining-dark mb-4">Pemahaman Makna & Pesan Moral</h3>
                <p className="text-gray-600 leading-relaxed mt-auto">
                  Bukan sekadar hafal kosakata, tapi memahami ungkapan (*idioms*), perumpamaan, dan pesan mendalam dari penulis lagu yang akan memperluas perspektif kehidupanmu.
                </p>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* DEVELOPER PROFILE */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full mb-16 relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="bg-shining-dark rounded-[2rem] lg:rounded-[3rem] p-1 border-2 md:border-4 border-shining-violet/20 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Blooms */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1DB954]/20 via-shining-purple/40 to-shining-dark blur-3xl rounded-full z-0 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-shining-yellow/10 blur-[100px] rounded-full z-0 pointer-events-none" />
          
          <div className="bg-black/40 backdrop-blur-xl rounded-[1.8rem] lg:rounded-[2.8rem] p-6 sm:p-8 lg:p-16 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
             
             {/* Avatar Image Frame */}
             <motion.div variants={fadeInUp} className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 group">
                <div className="absolute inset-0 bg-gradient-to-br from-shining-purple to-shining-yellow rounded-[2.5rem] lg:rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-[2.5rem] lg:rounded-[3rem] border border-white/20 -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
                <div className="absolute inset-2 bg-gradient-to-br from-slate-200 to-slate-400 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center bg-gray-300">
                   {/* Placeholder Icon */}
                   <User size={100} className="text-gray-400 opacity-50 absolute" />
                   <Image 
                     src="/profile.jpeg" 
                     alt="Sri Puja" 
                     fill 
                     className="object-cover transition-transform duration-500 group-hover:scale-105" 
                   /> 
                </div>
                {/* Floating Role Badge */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-shining-yellow text-shining-dark font-black px-4 py-2 lg:px-6 lg:py-3 rounded-2xl shadow-xl flex items-center gap-1.5 lg:gap-2 text-sm lg:text-base rotate-12 group-hover:scale-110 transition-transform">
                  <Code size={16} className="lg:w-5 lg:h-5" /> Creator
                </div>
             </motion.div>

             {/* Profile Detail */}
             <div className="text-center lg:text-left flex-1 text-white">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 border border-white/10 text-center mx-auto lg:mx-0">
                   <GraduationCap size={14} className="shrink-0" /> Educational Technology, UNY
                </motion.div>
                
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-title text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-wide mb-2 drop-shadow-md">
                  Sri Puja Yanti
                </motion.h2>
                
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                   <span className="text-white/60 font-medium text-lg flex items-center gap-2">
                     <Rocket size={18} className="text-shining-purple" />Developer & Author
                   </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  {/* Quote Icon Background */}
                  <span className="absolute -top-4 -left-2 md:-top-6 md:-left-6 text-4xl md:text-6xl text-white/5 font-serif font-black">"</span>
                  <p className="text-white/90 text-sm md:text-base lg:text-lg italic leading-relaxed font-medium px-2 md:px-0">
                    "Halo guys! Belajar itu nggak harus kaku, lho. Kalau kita gampang hafal lirik lagu atau semangat nyelesain misi game, kenapa keseruannya nggak dibawa ke belajar aja? Nah, energi itu yang aku bawa ke sini. Lewat SHINING, aku nyatuin asyiknya musik dan serunya main game. Jadi, belajar bahasa Inggris bukan lagi soal hafalan pusing, tapi murni pengalaman yang seru!"
                  </p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full justify-center lg:justify-start">
                  <a 
                    href="mailto:sripuja.2022@student.uny.ac.id"
                    className="inline-flex items-center gap-2.5 px-6 py-3 lg:px-8 lg:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all hover:scale-105 shadow-sm text-sm lg:text-base justify-center flex-1 sm:flex-none"
                  >
                    <Mail size={18} className="text-shining-yellow shrink-0" />
                    <span>Email Me</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/srpujayanti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 lg:px-8 lg:py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold transition-all hover:scale-105 shadow-lg text-sm lg:text-base justify-center flex-1 sm:flex-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@srpujayanti</span>
                  </a>
                </motion.div>
             </div>
             
          </div>
        </motion.div>
      </section>

    </div>
  );
}
