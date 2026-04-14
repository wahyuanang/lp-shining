import Link from "next/link";
import { Sparkles, Heart, Music } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-center px-6 lg:px-12 mb-6 lg:mb-12 mt-20 relative z-20">
      <footer className="w-full max-w-7xl bg-shining-dark text-white/80 pt-16 pb-24 md:pb-12 px-6 lg:px-12 relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(91,33,182,0.5)] border border-shining-violet/20">
        {/* Background Ornaments */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-shining-purple/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-shining-violet/20 blur-[80px] rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-shining-purple to-shining-violet flex items-center justify-center mb-6 shadow-xl border border-white/10">
            {/* <Sparkles size={32} className="text-white" /> */}
            <Image src="/logo_img.png" alt="Logo" width={64} height={64}/>
          </div>

          
          <h2 className="text-3xl font-extrabold text-white mb-6">SHINING</h2>
          <p className="text-center max-w-md mx-auto mb-10 text-white/60">
            A song-based English learning platform that helps students understand the rhymes, meanings of lyrics, and moral messages through interactive methods.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link href="/" className="hover:text-shining-yellow transition-colors font-medium">Home</Link>
            <Link href="/materials" className="hover:text-shining-yellow transition-colors font-medium">Materials</Link>
            <Link href="/music-map" className="hover:text-shining-yellow transition-colors font-medium">Music Map</Link>
            <Link href="/help" className="hover:text-shining-yellow transition-colors font-medium">Help</Link>
            <Link href="/about" className="hover:text-shining-yellow transition-colors font-medium">About Us</Link>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <div className="w-full text-sm text-white/50 gap-4">
            <p className="text-center">© {new Date().getFullYear()} SHINING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
