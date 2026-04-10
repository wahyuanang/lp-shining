"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Music, Sparkles, BookA, Headphones, HelpCircle, Trophy, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const mainFeaturesList = [
  { title: "Listen the Song", desc: "Listen to a selection of the best songs to get your ears used to natural pronunciation.", icon: PlayCircle, color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Read the Lyrics", desc: "Understand the deeper meaning of song lyrics and discover new vocabulary you’ve never encountered before.", icon: BookA, color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "Quiz & Challenge", desc: "Test your understanding by playing games and taking interactive quizzes in real time, and earn points.", icon: HelpCircle, color: "text-rose-500", bg: "bg-rose-500/10" },
  { title: "Score & Reward", desc: "Achieve your highest score, make it onto the leaderboard, and earn exclusive rewards from SHINING.", icon: Trophy, color: "text-shining-yellow", bg: "bg-shining-yellow/20" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [testimonials, setTestimonials] = useState<{name: string, level: string, text: string}[]>([]);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Mock local storage fetch for testimonials
    const saved = localStorage.getItem("shining_testimonials");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Default dummy data
      setTestimonials([
        { name: "Sarah K.", level: "Medium", text: "Belajar bahasa Inggris jadi nggak ngebosenin lagi. Aku suka banget fitur quiz dari lirik lagu kesukaanku!" },
        { name: "Andi R.", level: "Easy", text: "Dulu susah ngafalin vocab baru, sekarang gampang karena sering dengar lagunya. Keren banget platform ini!" },
      ]);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-20 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-12 pt-10 lg:pt-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shining-purple/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-shining-yellow/20 blur-[100px] rounded-full -z-10" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-shining-purple/20 text-shining-purple text-sm font-semibold mb-6 shadow-sm">
             <Sparkles size={16} className="text-shining-yellow fill-shining-yellow" />
             <span>The New Way to Learn English</span>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-shining-dark tracking-tight leading-[1.1] mb-6">
              Learning to <br className="hidden lg:block"/> read is hard, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shining-purple to-shining-violet">
                but we make it shining!
              </span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            <span className="font-bold text-shining-purple">SHINING</span> is a song-based English learning platform that helps students understand vocabulary, the meaning of lyrics, and moral messages through interactive activities.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <Link href="/materials" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-shining-purple text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(91,33,182,0.8)]">
              <span className="relative z-10 w-full text-center">Start Learning Now</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-shining-purple to-shining-violet opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex-1 relative w-full max-w-lg aspect-square mt-8 lg:mt-0"
        >
          <div className="relative w-full h-full rounded-[3rem] p-2 bg-gradient-to-br from-shining-purple via-shining-violet to-shining-yellow shadow-2xl skew-y-2 group">
            <div className="absolute inset-0 rounded-[3rem] w-full h-full bg-white/40 blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-white shadow-2xl -skew-y-2 transition-transform duration-500 group-hover:scale-[1.02]">
               <Image 
                 src="/img-hero.png" 
                 alt="Students learning with music" 
                 fill
                 className="object-contain"
                 priority
               />
            </div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl border border-shining-yellow/30 z-20"
            >
               <Music className="text-shining-yellow w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHY IT WORKS SECTION (BENTO GRID) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-shining-yellow/20 text-yellow-700 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm border border-shining-yellow/30">
            Why It Works
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-shining-dark mb-4">
            Why Song Lyrics?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the science-backed benefits of learning English through music in an engaging way.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {/* Card 1: Span 2 cols */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-gradient-to-br from-shining-purple to-shining-violet rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group shadow-[0_8px_30px_rgb(91,33,182,0.2)]">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <Sparkles size={40} className="mb-6 text-shining-yellow" />
            <h3 className="text-3xl font-bold mb-4">Fun Learning</h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Songs make the learning process more enjoyable, exciting, and less rigid than traditional methods. Enjoying the process is very important! 
            </p>
          </motion.div>

          {/* Card 2: 1 Col */}
          <motion.div variants={fadeInUp} className="bg-white border rounded-[2.5rem] p-8 md:p-10 hover:shadow-xl transition-shadow group flex flex-col justify-center">
            <Headphones size={36} className="mb-6 text-purple-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
            <h3 className="text-2xl font-bold text-shining-dark mb-3">Improve Pronunciation</h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Practice pronunciation in a natural way—like a fun brain exercise—by following the singer’s original lyrics.
            </p>
          </motion.div>

          {/* Card 3: 1 Col */}
          <motion.div variants={fadeInUp} className="bg-white border rounded-[2.5rem] p-8 md:p-10 hover:shadow-xl transition-shadow group flex flex-col justify-center">
            <Music size={36} className="mb-6 text-blue-500 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            <h3 className="text-2xl font-bold text-shining-dark mb-3">Suitable for Teens</h3>
            <p className="text-gray-500 text-base leading-relaxed">
              The song lyrics reflect the lives of today’s teenagers, making them relevant to their daily lives. 
            </p>
          </motion.div>

          {/* Card 4: Span 2 Cols with Yellow accent */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-shining-yellow/10 border border-shining-yellow/30 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group hover:bg-shining-yellow/20 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
              <div className="w-16 h-16 shrink-0 bg-white rounded-full flex items-center justify-center shadow-md">
                 <BookA size={32} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-shining-dark mb-3">Easy to Remember</h3>
                <p className="text-yellow-800 leading-relaxed text-lg max-w-2xl">
                  The repetition of the lyrics (chorus) and catchy melodies makes it easier to memorize grammatical structures more quickly.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* MAIN FEATURES (INTERACTIVE TABS) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-gradient-to-br from-shining-dark via-shining-purple to-shining-dark rounded-[3rem] p-8 lg:p-12 text-white overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shining-violet/20 blur-[120px] rounded-full point-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-shining-yellow/10 blur-[100px] rounded-full point-events-none" />
           
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12 relative z-10"
           >
               <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold mb-4">Main Features</motion.h2>
               <motion.p variants={fadeInUp} className="text-white/80 text-lg max-w-2xl mx-auto">
                 We designed an interactive learning flow that guides you step-by-step to master English vocabulary through your favorite songs.
               </motion.p>
           </motion.div>

           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 h-full">
              {/* Stepper Tabs */}
              <div className="flex flex-col gap-3 lg:w-2/5 justify-center">
                 {mainFeaturesList.map((feat, idx) => {
                   const isActive = idx === activeFeatureIndex;
                   const Icon = feat.icon;
                   return (
                     <button 
                       key={idx}
                       onClick={() => setActiveFeatureIndex(idx)}
                       className={`flex items-start text-left gap-5 p-5 rounded-3xl transition-all duration-300 w-full group ${isActive ? 'bg-white/10 shadow-lg border border-white/20' : 'hover:bg-white/5 border border-transparent'}`}
                     >
                       <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? feat.bg : 'bg-white/5'} ${isActive ? feat.color : 'text-white/50'}`}>
                         <Icon size={24} />
                       </div>
                       <div>
                         <h3 className={`text-xl font-bold mb-1 transition-colors ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>{feat.title}</h3>
                         <AnimatePresence>
                           {isActive && (
                             <motion.p 
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: "auto", opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               className="text-white/70 text-sm overflow-hidden"
                             >
                               {feat.desc}
                             </motion.p>
                           )}
                         </AnimatePresence>
                       </div>
                     </button>
                   );
                 })}
              </div>

              {/* Display Area */}
              <div className="lg:w-3/5 min-h-[350px] lg:min-h-[450px] bg-black/20 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeFeatureIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="flex flex-col items-center justify-center text-center w-full h-full p-6 relative z-10"
                  >
                    {/* Dynamic Graphic Placeholder based on type */}
                    {(() => {
                      const activeData = mainFeaturesList[activeFeatureIndex];
                      const Icon = activeData.icon;
                      return (
                        <>
                          <div className={`w-32 h-32 rounded-full ${activeData.bg} ${activeData.color} flex items-center justify-center mb-8 shadow-2xl relative`}>
                            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse" />
                            <Icon size={64} className="relative z-10 drop-shadow-md" />
                            
                            {/* Decorative Rings */}
                            <div className="absolute inset-[-20%] rounded-full border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[-40%] rounded-full border border-white/10 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]" />
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">{activeData.title}</h3>
                          <p className="text-white/80 text-lg max-w-md">{activeData.desc}</p>
                          
                          {/* <motion.div 
                            className="mt-8 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur font-medium text-sm flex items-center gap-2"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                          >
                             <Sparkles size={16} className={activeData.color} />
                             Interactive Module
                          </motion.div> */}
                        </>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
                
                {/* Dynamic Background Glow in display area */}
                <div 
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 transition-colors duration-700 ${
                    activeFeatureIndex === 0 ? "bg-blue-500" :
                    activeFeatureIndex === 1 ? "bg-purple-500" :
                    activeFeatureIndex === 2 ? "bg-rose-500" :
                    "bg-shining-yellow"
                  }`} 
                />
              </div>
           </div>
        </div>
      </section>

      {/* CHOOSE YOUR FLOW */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="flex-1">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-shining-yellow/20 text-yellow-700 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm border border-shining-yellow/30">
              Choose Your Flow
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-shining-dark mb-6 leading-tight">
              Special Learning Level <br/> For You
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-8">
              SHINING offers song difficulty levels ranging from <span className="font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">Easy</span>, <span className="font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">Medium</span>, dan <span className="font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md">Hard</span> so you can learn at your own pace—not too easy, not too hard, but definitely fun! <br/><br/> Let's enjoy learning with music!
            </motion.p>
            <motion.div variants={fadeInUp}>
               <Link href="/music-map" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-white text-shining-dark border border-gray-200 shadow-sm hover:shadow-lg hover:border-shining-violet transition-all group overflow-hidden relative">
                 <span className="relative z-10">Explore Music Map</span>
                 <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                 <div className="absolute inset-0 bg-shining-violet/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               </Link>
            </motion.div>
          </div>

          <div className="flex-1 grid gap-4 w-full">
            {[
              { level: "EASY", desc: "A song with slow lyrics and lots of common words (Basic Vocabulary).", color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
              { level: "MEDIUM", desc: "The pace is a little faster, focusing on extra listening practice and idioms.", color: "bg-amber-500/10 text-amber-600 border-amber-200" },
              { level: "HARD", desc: "Rap song / dynamic tempo with the use of advanced vocabulary.", color: "bg-rose-500/10 text-rose-600 border-rose-200" },
            ].map((lvl, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                // whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-6 p-6 rounded-[2rem] border ${lvl.color} backdrop-blur-sm cursor-default transition-all hover:shadow-md bg-white/50 group`}
              >
                <div className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center font-black text-xl bg-white shadow-sm border ${lvl.color} border-opacity-50 group-hover:scale-110 transition-transform`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 tracking-tight">{lvl.level}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{lvl.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 mb-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8"
        >
          <div className="max-w-2xl">
             <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-shining-yellow/20 text-yellow-700 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm border border-shining-yellow/30">
                Testimonials
             </motion.span>
             <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-shining-dark mb-4">
               What They Say?
             </motion.h2>
             <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
               Hear from students who transformed their English learning journey using SHINING map levels.
             </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="mt-8 md:mt-0 flex flex-col items-end">
             {/* <div className="flex -space-x-4">
                {[1,2,3,4].map(num => (
                  <div key={num} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center font-bold text-slate-500 shadow-sm text-sm">
                    {num}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-shining-yellow flex items-center justify-center font-bold text-shining-dark shadow-sm text-sm z-10">
                  99+
                </div>
             </div> */}
             <button 
               onClick={() => {
                 localStorage.removeItem("shining_testimonials");
                 setTestimonials([
                   { name: "Sarah K.", level: "Medium", text: "Belajar bahasa Inggris jadi nggak ngebosenin lagi. Aku suka banget fitur quiz dari lirik lagu kesukaanku!" },
                   { name: "Andi R.", level: "Easy", text: "Dulu susah ngafalin vocab baru, sekarang gampang karena sering dengar lagunya. Keren banget platform ini!" },
                 ]);
               }}
               className="mt-4 text-xs font-semibold text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-full transition-colors"
               title="Admin tool for testing: clear local storage"
             >
               Reset Testimonials
             </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex text-shining-yellow mb-5 gap-1">
                  {[...Array(5)].map((_, idx) => <Sparkles key={idx} size={18} className="fill-shining-yellow text-shining-yellow" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-8 text-lg">"{testi.text}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-shining-purple to-shining-violet flex items-center justify-center font-bold text-white shadow-sm">
                      {testi.name.charAt(0)}
                   </div>
                   <p className="font-bold text-shining-dark">{testi.name}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 bg-shining-dark text-shining-yellow rounded-full flex items-center gap-1">
                  <Trophy size={12} />
                  {testi.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </div>
  );
}
