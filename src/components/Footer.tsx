import Link from "next/link";
import { Sparkles, Heart, Music } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center px-6 lg:px-12 mb-6 lg:mb-12 mt-20 relative z-20">
      <footer className="w-full max-w-7xl bg-shining-dark text-white/80 pt-16 pb-24 md:pb-12 px-6 lg:px-12 relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(91,33,182,0.5)] border border-shining-violet/20">
        {/* Background Ornaments */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-shining-purple/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-shining-violet/20 blur-[80px] rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-shining-purple to-shining-violet flex items-center justify-center mb-6 shadow-xl border border-white/10">
            <Sparkles size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-white mb-6">SHINING</h2>
          <p className="text-center max-w-md mx-auto mb-10 text-white/60">
            Platform pembelajaran Bahasa Inggris berbasis lagu yang membantu siswa 
            memahami rima, makna lirik, dan pesan moral melalui metode interaktif.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link href="/" className="hover:text-shining-yellow transition-colors font-medium">Home</Link>
            <Link href="/materials" className="hover:text-shining-yellow transition-colors font-medium">Materials</Link>
            <Link href="/music-map" className="hover:text-shining-yellow transition-colors font-medium">Music Map</Link>
            <Link href="/about" className="hover:text-shining-yellow transition-colors font-medium">About Us</Link>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm text-white/50 text-center gap-4">
            <p>© {new Date().getFullYear()} SHINING. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> and <Music size={16} /> for Learners
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
