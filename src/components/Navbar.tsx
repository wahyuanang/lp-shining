"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Map, Info, Sparkles } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Materials", href: "/materials", icon: BookOpen },
  { name: "Music Map", href: "/music-map", icon: Map },
  { name: "About Us", href: "/about", icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop/Tablet Navbar (Hidden on Mobile) */}
      <div className={clsx(
        "hidden md:flex fixed w-full z-50 transition-all duration-300 justify-center left-0 right-0",
        scrolled ? "top-4 px-6 lg:px-12" : "top-0 px-0"
      )}>
        <nav className={clsx(
          "w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 backdrop-blur-md",
          scrolled 
            ? "bg-white/95 rounded-full shadow-lg border border-shining-violet/20 px-6 py-2"
            : "bg-white/80 border-b border-shining-violet/10 px-6 lg:px-12 py-4"
        )}>
          <div className="flex items-center gap-2">
            <div className="">
              <Image
                src="/logo_img.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:text-shining-purple",
                    isActive ? "text-shining-purple" : "text-gray-600"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktop-nav-indicator"
                      className="absolute inset-0 bg-shining-violet/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-shining-violet/10 px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo_img.png"
            alt="SHINING Logo"
            width={85}
            height={85}
          />
        </Link>
      </div>

      {/* Mobile Bottom Navbar (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-lg border border-shining-violet/20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-2 py-3">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "relative flex flex-col items-center justify-center w-16 h-12 rounded-full transition-colors",
                  isActive ? "text-shining-purple" : "text-gray-500 hover:text-shining-violet"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute inset-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={isActive ? 24 : 22} className="relative z-10 mb-0.5 transition-all" />
                <span className={`relative z-10 text-[10px] font-medium transition-all ${isActive ? "opacity-100" : "opacity-0 h-0"}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
