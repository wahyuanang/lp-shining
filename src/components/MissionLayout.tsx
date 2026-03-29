"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, BookOpen, Gamepad2, Trophy, Star, Sparkles, CheckCircle2, ChevronLeft, X, PartyPopper, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export interface Vocabulary {
  word: string;
  meaning: string;
  pronunciation?: string;
}

export interface LyricLine {
  english: string;
  translation: string;
}
export interface Game {
  title: string;
  instruction: string;
  embedUrl: string;
}

interface MissionLayoutProps {
  level: "Easy" | "Medium" | "Hard";
  songTitle: string;
  youtubeId: string;
  vocabulary: Vocabulary[];
  quizEmbedUrl: string;
  lyrics?: LyricLine[];
  games?: Game[];
  nextLevel?: "Medium" | "Hard";
  nextLevelHref?: string;
  nextSongTitle?: string;
}

export default function MissionLayout({ level, songTitle, youtubeId, vocabulary, quizEmbedUrl, lyrics, games, nextLevel, nextLevelHref, nextSongTitle }: MissionLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testiName, setTestiName] = useState("");
  const [testiMessage, setTestiMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  // Play word with Text-to-Speech
  const playAudio = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any currently playing audio
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for clearer pronunciation
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung fitur suara.");
    }
  };

  const themeColor = 
    level === "Easy" ? "emerald" :
    level === "Medium" ? "amber" : "rose";

  const handleClaimReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testiName || !testiMessage) return;

    // Save to local storage
    const existing = localStorage.getItem("shining_testimonials");
    let testimonials = [];
    if (existing) {
      testimonials = JSON.parse(existing);
    }
    
    testimonials.unshift({
      name: testiName,
      level: level,
      text: testiMessage
    });

    localStorage.setItem("shining_testimonials", JSON.stringify(testimonials));
    
    // Trigger confession/trumpet surprise!
    triggerConfetti();
    
    setIsSubmitted(true);
    setAlreadyClaimed(true);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#5b21b6', '#c084fc', '#fde047', '#f43f5e']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#5b21b6', '#c084fc', '#fde047', '#f43f5e']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset state slightly after close animation
    setTimeout(() => {
      if (!isSubmitted) {
        setTestiName("");
        setTestiMessage("");
      }
    }, 300);
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen relative">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-100 py-6 px-6 relative sticky top-0 z-40 shadow-sm">
         <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Link href="/music-map" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600">
                  <ChevronLeft size={20} />
               </Link>
               <div>
                 <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 bg-${themeColor}-100 text-${themeColor}-700`}>
                   Level: {level}
                 </span>
                 <h1 className="text-2xl md:text-3xl font-bold text-shining-dark leading-none">Mission: {songTitle}</h1>
               </div>
            </div>
         </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="max-w-4xl mx-auto w-full px-6 py-10 flex flex-col gap-12 lg:gap-16">
        
        {/* 1. WATCH */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md">
               <span className="font-bold text-sm">1</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase flex items-center gap-2">
               Watch <Play size={20} className="text-blue-500 fill-blue-500" />
             </h2>
           </div>
           <div className="bg-white rounded-[2rem] p-4 lg:p-6 shadow-sm border border-gray-100">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900">
                <iframe 
                  src={`https://www.youtube.com/embed/${youtubeId}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
           </div>
        </section>

        {/* 2. LEARN */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
               <span className="font-bold text-sm">2</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase flex items-center gap-2">
               Learn <BookOpen size={20} className="text-emerald-500 fill-emerald-500" />
             </h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
             {/* Lyrics Column */}
             <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col h-[500px]">
                <h3 className="text-lg font-bold text-shining-dark mb-4 border-b pb-3 flex items-center justify-between">
                  Song Lyrics
                  <span className="text-sm font-normal text-slate-400">Scroll to read</span>
                </h3>
                <div className="flex-1 overflow-y-auto pr-4 text-slate-600">
                  {lyrics && lyrics.length > 0 ? (
                    <div className="flex flex-col gap-3 pb-6">
                      {lyrics.map((line, idx) => (
                        <div key={idx} className="p-3 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-colors">
                          <p className="font-semibold text-slate-800 text-lg">{line.english}</p>
                          <p className="text-slate-500 text-sm mt-1">{line.translation}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="italic text-center mt-20 opacity-50">Sing along with the video!</p>
                  )}
                </div>
             </div>

             {/* Vocab Column */}
             <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col h-[500px]">
                <h3 className="text-lg font-bold text-shining-dark mb-4 border-b pb-3 text-emerald-600">New Vocabulary</h3>
                <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3">
                   {vocabulary.length > 0 ? vocabulary.map((item, idx) => (
                     <div key={idx} className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors flex items-center flex-wrap gap-2">
                            {item.word} 
                            {item.pronunciation && <span className="text-sm font-medium text-emerald-600/70 bg-emerald-100/50 px-2 py-0.5 rounded-full">{item.pronunciation}</span>}
                          </p>
                          <p className="text-slate-500 text-sm mt-1">{item.meaning}</p>
                        </div>
                        {/* Audio play button */}
                        <button 
                          onClick={() => playAudio(item.word)}
                          className="w-10 h-10 shrink-0 self-start mt-1 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                          title="Tirukan pengucapannya!"
                        >
                           <Play size={16} className="ml-0.5" />
                        </button>
                     </div>
                   )) : (
                     <p className="text-center text-slate-400 mt-10">No vocabulary provided for this session.</p>
                   )}
                </div>
             </div>
           </div>
        </section>

        {/* 3. PLAY */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-md">
               <span className="font-bold text-sm">3</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase flex items-center gap-2">
               Play <Gamepad2 size={20} className="text-amber-500 fill-amber-500" />
             </h2>
           </div>
           {games && games.length > 0 ? (
             <div className="flex flex-col gap-8">
               {games.map((game, idx) => (
                 <div key={idx} className="bg-white rounded-[2rem] p-4 lg:p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-700">{game.title}</h3>
                      <p className="text-amber-600 font-medium text-sm mt-1 bg-amber-50 inline-block px-3 py-1 rounded-full border border-amber-100">
                        ✨ INSTRUCTION: {game.instruction}
                      </p>
                    </div>
                    <div className="w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-slate-100 relative shadow-inner">
                      <iframe 
                        style={{ maxWidth: "100%" }} 
                        src={game.embedUrl} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[300px] border-dashed border-2">
                <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  <Gamepad2 size={40} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-2">Interactive Game</h3>
                <p className="text-slate-500 max-w-sm">The game module for this mission is currently in development. It will be available soon!</p>
             </div>
           )}
        </section>

        {/* 4. CHALLENGE */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
               <span className="font-bold text-sm">4</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase flex items-center gap-2">
               Challenge <Trophy size={20} className="text-blue-600 fill-blue-600" />
             </h2>
           </div>
           
           <div className="bg-slate-900 rounded-[2rem] p-2 shadow-xl border border-slate-800 overflow-hidden">
              {quizEmbedUrl ? (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '635px', background: '#fff', borderRadius: '1.5rem', overflow: 'hidden' }}>
                  <iframe 
                    src={quizEmbedUrl} 
                    title="Wayground Quiz" 
                    style={{ flex: 1, width: '100%', height: '100%' }} 
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <div className="bg-white py-2 text-center text-sm border-t">
                     <a href="https://wayground.com/admin?source=embedFrame" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Explore more at Wayground.</a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 text-white/50">
                  <Trophy size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Challenge coming soon for this level.</p>
                </div>
              )}
           </div>
        </section>

        {/* 5. REWARD BANNER */}
        <section className="mb-20">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-md">
               <span className="font-bold text-sm">5</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase flex items-center gap-2">
               Reward <Star size={20} className="text-rose-500 fill-rose-500" />
             </h2>
           </div>

           <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-[2.5rem] p-8 lg:p-12 shadow-lg border border-pink-200 relative overflow-hidden text-center">
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 ${alreadyClaimed ? '' : 'animate-bounce'}`}>
                  {alreadyClaimed ? (
                    <PartyPopper size={48} className="text-rose-500 fill-rose-500" />
                  ) : (
                    <Star size={48} className="text-rose-500 fill-rose-500" />
                  )}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-4">
                  {alreadyClaimed ? "Mission Completed!" : "Ready to Claim?"}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  {alreadyClaimed 
                    ? "Kamu telah menyelesaikan misi ini dengan sangat baik! Testimoni kamu kini ditampilkan di halaman utama." 
                    : "Setelah menonton, mempelajari kosakata, dan menyelesaikan kuis di atas, kini saatnya kamu mengklaim hadiahmu."}
                </p>
                
                <button 
                  disabled={alreadyClaimed}
                  onClick={() => setIsModalOpen(true)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 ${
                    alreadyClaimed 
                    ? 'bg-rose-200 text-rose-500 cursor-not-allowed opacity-80' 
                    : 'bg-rose-500 hover:bg-rose-600 text-white shadow-[0_0_30px_-5px_rgba(244,63,94,0.6)] hover:shadow-[0_0_40px_-5px_rgba(244,63,94,0.8)] hover:scale-105'
                  }`}
                >
                   {alreadyClaimed ? (
                     <> <CheckCircle2 size={24} /> Reward Status: Claimed </>
                   ) : (
                     <> <Sparkles size={24} /> Open My Surprise </>
                   )}
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-300/30 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-shining-yellow/30 blur-3xl rounded-full pointer-events-none" />
           </div>
        </section>

        {/* 6. NEXT LEVEL / COMPLETION BANNER — only shown after testimonial is claimed */}
        <AnimatePresence>
          {alreadyClaimed && nextLevel && nextLevelHref && (
            <motion.section
              key="next-level-banner"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="mb-20"
            >
              <div className="relative bg-gradient-to-br from-shining-dark via-shining-purple to-shining-dark rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl text-white text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-shining-yellow/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-shining-violet/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-shining-yellow text-sm font-bold uppercase tracking-wider mb-6">
                    <Sparkles size={14} /> Up Next
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold mb-3">Ready for the Next Challenge?</h3>
                  <p className="text-white/70 max-w-md mx-auto mb-8">
                    Selamat! Kamu sudah menyelesaikan level <span className="text-shining-yellow font-bold">{level}</span>. Saatnya naik ke level <span className="font-bold text-white">{nextLevel}</span> dengan lagu <span className="italic text-shining-yellow">&quot;{nextSongTitle}&quot;</span>!
                  </p>
                  <Link
                    href={nextLevelHref}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-shining-yellow text-shining-dark rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(252,211,77,0.6)] hover:shadow-[0_0_40px_-5px_rgba(252,211,77,0.8)]"
                  >
                    Go to {nextLevel} Level
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* 6b. HARD COMPLETION — only shown after testimonial is claimed */}
        <AnimatePresence>
          {alreadyClaimed && level === "Hard" && !nextLevel && (
            <motion.section
              key="champion-banner"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="mb-20"
            >
              <div className="relative bg-gradient-to-br from-amber-400 via-rose-500 to-shining-purple rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl text-white text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                    className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6 shadow-xl"
                  >
                    <span className="text-5xl">🏆</span>
                  </motion.div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold mb-3">You&apos;re a SHINING Champion! 🎉</h3>
                  <p className="text-white/90 text-lg max-w-lg mx-auto mb-8">
                    Luar biasa! Kamu telah menyelesaikan <strong>semua level</strong> di SHINING — Easy, Medium, dan Hard. Kamu adalah bintang yang sesungguhnya! ⭐
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/music-map"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-shining-dark rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                    >
                      🗺️ Back to Music Map
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 border border-white/30 text-white rounded-full font-bold text-lg hover:scale-105 hover:bg-white/30 transition-all"
                    >
                      🏠 Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

      </div>

      {/* THE MODAL (AnimatePresence) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center">
                        <GiftIcon />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Mission Testimony</h3>
                        <p className="text-slate-500 text-sm">Leave a review to unlock your reward!</p>
                      </div>
                    </div>

                    <form onSubmit={handleClaimReward} className="flex flex-col gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                        <input 
                          required
                          type="text" 
                          value={testiName}
                          onChange={(e) => setTestiName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Your Testimony</label>
                        <textarea 
                          required
                          value={testiMessage}
                          onChange={(e) => setTestiMessage(e.target.value)}
                          placeholder="How was the learning experience? What new words did you learn?"
                          rows={4}
                          className="w-full px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3.5 rounded-xl mt-2 transition-transform transform active:scale-95 flex items-center justify-center gap-2"
                      >
                         <PartyPopper size={20} /> Submit & Get Reward
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-24 h-24 mx-auto bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl mb-6 relative"
                    >
                      <Sparkles size={40} className="text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Congratulations!</h3>
                    <p className="text-slate-600 mb-6">
                      Terima kasih <span className="font-bold text-shining-purple">{testiName}</span>! Testimonimu berhasil diunggah.
                    </p>

                    <div className="inline-block bg-pink-100 border border-pink-200 px-6 py-3 rounded-2xl mb-8">
                       <span className="font-black text-rose-600 text-xl tracking-tight">+100 EXP</span>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-colors"
                    >
                      Close & Finish
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Simple Icon for the Modal Header
function GiftIcon() {
  return (
    <svg xmlns="http://www.w3.org/-g-o" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  );
}

