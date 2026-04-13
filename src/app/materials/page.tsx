"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  BookOpen,
  Compass,
  Headphones,
  Sparkles,
  MessageCircle,
  Music,
  Star,
  Code,
  ArrowRight,
  Play,
  Pause,
  Heart,
  ShieldQuestion,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const starsData = [
  { width: 4, height: 4, top: "15%", left: "20%", duration: 3.5 },
  { width: 3, height: 3, top: "45%", left: "80%", duration: 4.2 },
  { width: 5, height: 5, top: "25%", left: "55%", duration: 2.8 },
  { width: 2, height: 2, top: "50%", left: "10%", duration: 4.9 },
  { width: 4, height: 4, top: "10%", left: "75%", duration: 3.1 },
  { width: 6, height: 6, top: "40%", left: "30%", duration: 2.5 },
  { width: 3, height: 3, top: "5%", left: "45%", duration: 3.8 },
  { width: 4, height: 4, top: "35%", left: "90%", duration: 4.5 },
  { width: 5, height: 5, top: "55%", left: "40%", duration: 3.2 },
  { width: 2, height: 2, top: "30%", left: "5%", duration: 2.9 },
];

export default function Materials() {
  const [activeStructure, setActiveStructure] = useState(0); // default Intro
  const [playingTrack, setPlayingTrack] = useState<"hello" | "turns" | null>(
    null,
  );
  const helloAudioRef = useRef<HTMLAudioElement>(null);
  const turnsAudioRef = useRef<HTMLAudioElement>(null);

  const toggleTrack = (track: "hello" | "turns") => {
    const currentAudio =
      track === "hello" ? helloAudioRef.current : turnsAudioRef.current;
    const otherAudio =
      track === "hello" ? turnsAudioRef.current : helloAudioRef.current;

    if (!currentAudio) {
      return;
    }

    if (otherAudio) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }

    if (playingTrack === track && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setPlayingTrack(null);
      return;
    }

    currentAudio.currentTime = 0;
    currentAudio
      .play()
      .then(() => setPlayingTrack(track))
      .catch(() => setPlayingTrack(null));
  };

  const structures = [
    {
      title: "Intro",
      desc: "The opening music. No singing yet. It sets the mood.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Verse",
      desc: "The storytelling part. The melody is usually flat, and the lyrics change with each verse.",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Chorus / Refrain",
      desc: "THE CORE! The part that is repeated, has the catchiest melody, and usually contains the song title.",
      color: "from-shining-yellow to-yellow-600",
    },
    {
      title: "Bridge",
      desc: "The connector. Usually appears after the second Chorus. The melody is very different to prevent boredom.",
      color: "from-rose-400 to-rose-600",
    },
    {
      title: "Outro / Coda",
      desc: "The ending. The music slowly fades out or stops.",
      color: "from-emerald-400 to-emerald-600",
    },
  ];

  return (
    <div className="flex flex-col pb-20 overflow-hidden bg-slate-50">
      {/* HEADER / HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-shining-dark via-[#1e104f] to-slate-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shining-purple/30 blur-[120px] rounded-full point-events-none" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-shining-yellow/20 blur-[100px] rounded-full point-events-none" />

        {/* Animated stars */}
        {starsData.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white point-events-none"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mb-8 relative"
          >
            <h1 className="text-7xl lg:text-9xl text-shining-yellow drop-shadow-[0_0_30px_rgba(252,211,77,0.8)] font-title transform -rotate-3">
              MaterialS
            </h1>
            <div className="absolute -top-10 -right-16 text-white transform rotate-12">
              🚀
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[2rem] max-w-3xl shadow-2xl relative"
          >
            <Sparkles className="absolute -top-4 -left-4 text-shining-yellow w-8 h-8" />
            <p className="text-white/90 text-xl md:text-2xl font-medium italic leading-relaxed">
              "Music gives a soul to the universe, wings to the mind, flight to
              the imagination and life to everything."
            </p>
            <p className="text-white/60 font-bold mt-4 md:text-lg">— Plato</p>
          </motion.div>
        </div>
      </section>

      {/* DID YOU KNOW (Interactive Floating Cards) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 -mt-10 mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 blur-[80px] rounded-full" />

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-6xl mb-16 text-center font-title bg-clip-text text-transparent bg-gradient-to-r from-shining-purple to-shining-violet"
          >
            Did you know?
          </motion.h2>

          <p className="text-amber-800 text-sm leading-relaxed pb-8 text-center">
            Learning English through songs is one of the fastest ways to improve
            your English (a real "life hack"). Why?
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 w-full relative">
            {/* Left Bubbles */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 z-10">
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-[2rem] border border-amber-200 shadow-md relative group hover:scale-105 transition-transform"
              >
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-amber-100 rotate-45 border-t border-r border-amber-200 hidden lg:block" />
                <h3 className="font-bold text-amber-900 text-lg mb-2 flex items-center gap-2">
                  <MessageCircle className="text-amber-500" size={20} />{" "}
                  Pronunciation (Pelafalan)
                </h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  You naturally follow the way native speakers pronounce words
                  to match their intonation. Your accent will automatically
                  improve!
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-[2rem] border border-purple-200 shadow-md relative group hover:scale-105 transition-transform lg:mr-8"
              >
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-purple-100 rotate-45 border-t border-r border-purple-200 hidden lg:block" />
                <h3 className="font-bold text-purple-900 text-lg mb-2 flex items-center gap-2">
                  <Star className="text-purple-500" size={20} /> Slang & Idioms
                </h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Textbooks teach formal language, but songs teach the slang
                  used in everyday conversation by native speakers.
                </p>
              </motion.div>
            </div>

            {/* Center Graphic */}
            <motion.div
              variants={fadeInUp}
              className="w-48 h-64 lg:w-64 lg:h-80 relative z-20 shrink-0"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image
                src="/img-materials.png"
                alt="Materials Graphic"
                fill
                className="object-contain mix-blend-multiply"
              />
            </motion.div>

            {/* Right Bubbles */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 z-10">
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-[2rem] border border-blue-200 shadow-md relative group hover:scale-105 transition-transform mt-8 lg:mt-0"
              >
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-blue-100 rotate-45 border-b border-l border-blue-200 hidden lg:block" />
                <h3 className="font-bold text-blue-900 text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="text-blue-500" size={20} /> Vocabulary
                  Sticky (Kosakata)
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Words in songs stick in your mind better because of the
                  melody. Try to recall the lyrics to “Baby Shark”—it’s hard to
                  forget them, isn’t it?
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* A & B: DEFINITION & SOCIAL FUNCTION */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-shining-purple to-shining-violet p-8 lg:p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 text-white/10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
              <Music size={150} />
            </div>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-title text-shining-yellow mb-4 drop-shadow-sm"
            >
              A. Definition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg leading-relaxed mb-6"
            >
              In English, music (song) is an artistic arrangement of tones or
              sounds in a specific sequence, combination, and temporal
              relationship to produce a musical composition that possesses unity
              and continuity.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-3xl mt-auto"
            >
              <p className="font-medium text-white">
                But why do people create songs? Because every song has{" "}
                <span className="text-shining-yellow font-bold">
                  a social function
                </span>
                .
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white border-2 border-blue-100 p-8 lg:p-10 rounded-[3rem] shadow-xl relative text-slate-800"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-title text-blue-600 mb-2 drop-shadow-sm"
            >
              B. Social Function
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 font-medium mb-8"
            >
              Every song has a "mission." What are they?
            </motion.p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "To Entertain",
                  desc: "Obviously, to entertain us when we’re bored.",
                  icon: Play,
                  color: "bg-emerald-100 text-emerald-600",
                },
                {
                  title: "To Express Feelings",
                  desc: "Ever felt sad but didn’t know how to put it into words? Songs convey the writer’s emotions (sadness, happiness, anger).",
                  icon: Heart,
                  color: "bg-rose-100 text-rose-600",
                },
                {
                  title: "To Teach Moral Values",
                  desc: "Songs often contain wise advice about life without being preachy.",
                  icon: ShieldQuestion,
                  color: "bg-amber-100 text-amber-600",
                },
              ].map((item, idx) => (
                <motion.div
                  variants={fadeInUp}
                  key={idx}
                  className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-default group"
                >
                  <div
                    className={`mt-1 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform ${item.color}`}
                  >
                    <item.icon size={20} className="fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      {idx + 1}. {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* C. GENERIC STRUCTURE (Interactive Stepper) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-[3rem] p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 text-center mb-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-title text-white drop-shadow-md"
            >
              C. Generic Structure
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-amber-100 text-lg max-w-xl mx-auto mt-2"
            >
              Imagine a song like a sandwich; it has delicious layers:
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            {/* Nav Steps */}
            <div className="flex flex-col gap-3 lg:w-1/3">
              {structures.map((item, index) => {
                const isActive = index === activeStructure;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStructure(index)}
                    className={`flex items-center gap-4 p-4 rounded-3xl text-left transition-all duration-300 font-bold ${isActive ? "bg-white text-amber-600 shadow-lg scale-105" : "bg-white/10 text-white hover:bg-white/20"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${isActive ? "bg-amber-100 text-amber-700" : "bg-white/20 text-white"}`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-lg">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Display */}
            <div className="lg:w-2/3 min-h-[300px] bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl flex items-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStructure}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full relative z-10"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${structures[activeStructure].color} text-white flex items-center justify-center text-3xl font-black mb-6 shadow-lg`}
                  >
                    {activeStructure + 1}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-title text-slate-800 mb-4">
                    {structures[activeStructure].title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    {structures[activeStructure].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Watermark */}
              <div className="absolute -bottom-10 -right-10 text-slate-100 rotate-12 pointer-events-none">
                <Music size={250} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. LANGUAGE FEATURES (Bento) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-10">
            <motion.h2
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-title bg-clip-text text-transparent bg-gradient-to-r from-shining-purple to-shining-violet"
            >
              D. Language Features
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-lg max-w-2xl mx-auto mt-2"
            >
              Song lyrics are unique because they have their own rules,
              different from regular formal text.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Rhyme */}
            <motion.div
              variants={fadeInUp}
              className="bg-emerald-50 rounded-[2.5rem] p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="w-14 h-14 bg-emerald-200 text-emerald-700 rounded-full flex items-center justify-center mb-6 font-black text-xl group-hover:rotate-12 transition-transform">
                1
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                Rhyme (Rima)
              </h3>
              <p className="text-emerald-700 mb-6 text-sm">
                The similarity of sounds at the end of lines.
              </p>
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <p className="text-emerald-900 font-medium italic text-sm">
                  "I see the l
                  <span className="text-emerald-500 font-bold">ight</span> /
                  inside your s
                  <span className="text-emerald-500 font-bold">ight</span>"
                </p>
                <p className="text-xs text-emerald-600 mt-2 font-bold uppercase tracking-wider">
                  (light — sight)
                </p>
              </div>
            </motion.div>

            {/* Slang */}
            <motion.div
              variants={fadeInUp}
              className="bg-rose-50 rounded-[2.5rem] p-8 border border-rose-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="w-14 h-14 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center mb-6 font-black text-xl group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-2xl font-bold text-rose-900 mb-3">
                Slang & Informal Grammar
              </h3>
              <p className="text-rose-700 mb-6 text-sm">
                Relaxed language. Do not use this in formal letters!
              </p>
              <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-sm flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-600">Gonna</span>
                  <span className="text-slate-500">= Going to</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-600">Wanna</span>
                  <span className="text-slate-500">= Want to</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-600">Ain&apos;t</span>
                  <span className="text-slate-500">= Are not / Is not</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-600">&apos;Cause</span>
                  <span className="text-slate-500">= Because</span>
                </div>
              </div>
            </motion.div>

            {/* Figurative */}
            <motion.div
              variants={fadeInUp}
              className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col md:col-span-3 lg:col-span-1"
            >
              <div className="w-14 h-14 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center mb-6 font-black text-xl group-hover:-rotate-12 transition-transform">
                3
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Figurative Language
              </h3>
              <p className="text-blue-700 mb-6 text-sm">
                Poetic language (figures of speech) to make lyrics more
                beautiful.
              </p>
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex flex-col gap-3 mt-auto">
                <div>
                  <p className="font-bold text-blue-800 text-sm">✨ Simile</p>
                  <p className="text-xs text-slate-500">
                    Comparisons using "like" or "As". <br />
                    <span className="italic text-blue-600 font-medium">
                      Eg: "Shine bright like a diamond."
                    </span>
                  </p>
                </div>
                <div className="h-px bg-slate-100 w-full" />
                <div>
                  <p className="font-bold text-blue-800 text-sm">
                    🔥 Hyperbole
                  </p>
                  <p className="text-xs text-slate-500">
                    Exaggeration. <br />
                    <span className="italic text-blue-600 font-medium">
                      Eg: &quot;I&apos;d catch a grenade for you.&quot;
                      (Really?)
                    </span>
                  </p>
                </div>
                <div className="h-px bg-slate-100 w-full" />
                <div>
                  <p className="font-bold text-blue-800 text-sm">🎭 Metaphor</p>
                  <p className="text-xs text-slate-500">
                    Direct comparison. <br />
                    <span className="italic text-blue-600 font-medium">
                      Eg: "You are my sunshine."
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDY: SONG ANALYSIS (Glassmorphism Spotify Style) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-shining-dark rounded-[3rem] p-1 border-4 border-shining-violet/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-shining-purple/40 to-shining-dark blur-3xl rounded-full z-0" />

          <div className="bg-black/40 backdrop-blur-2xl rounded-[2.8rem] p-8 lg:p-12 relative z-10 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/10 pb-8 mb-8">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl shadow-2xl overflow-hidden relative border border-white/20">
                <img
                  src="/this-is-th-way-cover.jpeg"
                  alt="This Is The Way We Make Friends"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-shining-yellow text-xs font-bold uppercase tracking-wider mb-3"
                >
                  <Code size={14} /> Case Study
                </motion.div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-5xl font-black mb-2 tracking-tight leading-tight"
                >
                  This Is The Way We Make Friends
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-white/60 font-medium mb-2"
                >
                  Artist:{" "}
                  <span className="text-white font-bold">
                    Super Simple Songs
                  </span>
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-base text-white/60 font-medium mb-4"
                >
                  Theme:{" "}
                  <span className="text-shining-yellow font-bold">
                    Friendship &amp; Daily Activities
                  </span>
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-white/80 bg-white/10 p-3 rounded-xl text-sm border border-white/5 inline-block max-w-lg leading-relaxed"
                >
                  This song is an excellent introduction for 7th graders
                  focusing on basic greetings and daily interactions. The
                  language is highly repetitive and easy to remember. Let&apos;s
                  analyze the lyrics.
                </motion.p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-5"
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Compass className="text-shining-yellow" />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-shining-yellow italic leading-relaxed font-title tracking-wide">
                    &quot;This is the way we say hello. Say hello. Say hello...
                    This is the way we say hello... Let&apos;s be friends.&quot;
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-3 font-bold">
                    Lyric Audio
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleTrack("hello")}
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-shining-yellow to-amber-300 text-shining-dark font-extrabold py-3 px-4 hover:brightness-105 active:scale-[0.99] transition-all"
                    aria-label="Play or pause hello lyric"
                  >
                    {playingTrack === "hello" ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} />
                    )}
                    {playingTrack === "hello" ? "Pause Lyric" : "Play Lyric"}
                    <Headphones size={16} />
                  </button>

                  <div
                    className="mt-3 flex items-center justify-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-1 rounded-full bg-white/25" />
                    <span className="h-3 w-1 rounded-full bg-white/45" />
                    <span className="h-4 w-1 rounded-full bg-white/70" />
                    <span className="h-3 w-1 rounded-full bg-white/45" />
                    <span className="h-2 w-1 rounded-full bg-white/25" />
                  </div>

                  <audio
                    ref={helloAudioRef}
                    onEnded={() =>
                      setPlayingTrack((prev) =>
                        prev === "hello" ? null : prev,
                      )
                    }
                    className="hidden"
                  >
                    <source
                      src="/music/THIS IS THE WAY WE SAY HELLO_CASE STUDY.mp3"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div className="text-sm space-y-4 text-white/80">
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <p>
                      <span className="font-bold text-white">Meaning:</span> A
                      simple, polite greeting is the most important first step
                      to building a connection and starting a new friendship.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-shining-violet mb-2">
                      Grammar Spot: Simple Present Tense
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-white/70">
                      <li>
                        <span className="text-white">Formula:</span> Subject +
                        To Be (is/am/are) / Verb 1.
                      </li>
                      <li>
                        <span className="text-white">Lyrics:</span>{" "}
                        <span className="text-emerald-400 italic">
                          &quot;This{" "}
                          <span className="text-amber-400 font-bold">is</span>{" "}
                          the way we{" "}
                          <span className="text-amber-400 font-bold">say</span>{" "}
                          hello.&quot;
                        </span>
                      </li>
                      <li>
                        <span className="text-white">Function:</span> Expressing
                        a fact, a habit, or a regular daily routine.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-5"
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Compass className="text-shining-yellow" />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-shining-yellow italic leading-relaxed font-title tracking-wide">
                    &quot;This is the way we take turns, take turns, take
                    turns... This is the way we take turns... Let&apos;s be
                    friends.&quot;
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-3 font-bold">
                    Lyric Audio
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleTrack("turns")}
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-shining-yellow to-amber-300 text-shining-dark font-extrabold py-3 px-4 hover:brightness-105 active:scale-[0.99] transition-all"
                    aria-label="Play or pause take turns lyric"
                  >
                    {playingTrack === "turns" ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} />
                    )}
                    {playingTrack === "turns" ? "Pause Lyric" : "Play Lyric"}
                    <Headphones size={16} />
                  </button>

                  <div
                    className="mt-3 flex items-center justify-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-1 rounded-full bg-white/25" />
                    <span className="h-3 w-1 rounded-full bg-white/45" />
                    <span className="h-4 w-1 rounded-full bg-white/70" />
                    <span className="h-3 w-1 rounded-full bg-white/45" />
                    <span className="h-2 w-1 rounded-full bg-white/25" />
                  </div>

                  <audio
                    ref={turnsAudioRef}
                    onEnded={() =>
                      setPlayingTrack((prev) =>
                        prev === "turns" ? null : prev,
                      )
                    }
                    className="hidden"
                  >
                    <source
                      src="/music/THIS IS THE WAY WE TAKE TURNS.mp3"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div className="text-sm space-y-4 text-white/80">
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
                    <p>
                      <span className="font-bold text-white">
                        Idiom / Phrasal Verb:
                      </span>{" "}
                      <span className="text-amber-300 font-semibold">
                        &quot;Take turns&quot;
                      </span>{" "}
                      means to alternate doing something one after another{" "}
                      <span className="text-white/60">(bergantian)</span>, not
                      literally meaning to physically take a turn or a corner on
                      a street.
                    </p>
                    <div className="h-px w-full bg-white/10" />
                    <p>
                      <span className="font-bold text-white">Meaning:</span>{" "}
                      Being a good friend means being patient, respecting
                      others, and sharing opportunities fairly during an
                      activity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/music-map/easy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-shining-yellow text-shining-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Start Easy Level Mode <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
