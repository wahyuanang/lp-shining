"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Map,
  Music2,
  Star,
  ChevronRight,
  Headphones,
  Pencil,
  Trophy,
  Users,
  Lightbulb,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  PlayCircle,
  FileText,
  Zap,
} from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Baca Materi",
    subtitle: "Halaman Materials",
    href: "/materials",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    border: "border-violet-200",
    textColor: "text-violet-700",
    badgeColor: "bg-violet-100 text-violet-700",
    desc: "Mulai perjalananmu dari sini! Pelajari definisi lagu, fungsi sosialnya, struktur generik (Intro, Verse, Chorus, Bridge, Outro), dan fitur-fitur bahasa yang digunakan dalam lirik.",
    tips: ["Klik setiap bagian di Generic Structure untuk melihat penjelasannya", "Pahami perbedaan Verse dan Chorus", "Catat kosakata baru yang kamu temukan"],
  },
  {
    number: "02",
    icon: Map,
    title: "Pilih Level",
    subtitle: "Halaman Music Map",
    href: "/music-map",
    color: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-700",
    desc: "Setelah paham materi, pilih level tantanganmu! Ada 3 level yang bisa dimainkan secara berurutan. Setiap level menggunakan lagu yang sama namun dengan tingkat kesulitan dan fokus yang berbeda.",
    tips: ["Mulai dari Easy Level terlebih dahulu", "Selesaikan satu level sebelum naik ke level berikutnya", "Kamu bisa mengulang level manapun kapan saja"],
  },
  {
    number: "03",
    icon: Headphones,
    title: "Mode Easy — Listen & Learn",
    subtitle: "Level Mudah",
    href: "/music-map/easy",
    color: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "Dengarkan lagu sambil membaca lirik dan terjemahannya. Fokus pada pemahaman makna dan kosakata baru. Latih vocabulary interaktif dengan flip card dan audio pronunciation.",
    tips: ["Nyalakan audio dan ikuti liriknya", "Gunakan flip card untuk belajar kosakata", "Klik tombol speaker untuk mendengar pelafalan"],
  },
  {
    number: "04",
    icon: Pencil,
    title: "Mode Medium — Analyze & Identify",
    subtitle: "Level Sedang",
    href: "/music-map/medium",
    color: "from-blue-400 to-indigo-500",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Saatnya menganalisis! Identifikasi struktur lagu (Intro, Verse, Chorus, dst.) dari lirik yang diberikan. Latih kemampuan grammar dengan mengisi soal yang ada.",
    tips: ["Perhatikan pola lirik untuk menentukan strukturnya", "Gunakan pengetahuan dari materi yang sudah dipelajari", "Jangan terburu-buru, baca lirik dengan teliti"],
  },
  {
    number: "05",
    icon: Zap,
    title: "Mode Hard — Challenge & Create",
    subtitle: "Level Sulit",
    href: "/music-map/hard",
    color: "from-rose-400 to-red-500",
    bgLight: "bg-rose-50",
    border: "border-rose-200",
    textColor: "text-rose-700",
    badgeColor: "bg-rose-100 text-rose-700",
    desc: "Tantangan terakhir! Gunakan semua kemampuanmu — dari memahami makna, mengidentifikasi figurative language, hingga menjawab pertanyaan analitis tentang lagu.",
    tips: ["Aktifkan semua pengetahuanmu dari level sebelumnya", "Fokus pada figurative language (simile, metaphor, hyperbole)", "Berikan jawabanmu dengan percaya diri!"],
  },
  {
    number: "06",
    icon: Trophy,
    title: "Selesai & Rayakan!",
    subtitle: "Finishing",
    href: "/music-map",
    color: "from-yellow-400 to-amber-500",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    textColor: "text-yellow-700",
    badgeColor: "bg-yellow-100 text-yellow-700",
    desc: "Selamat! Kamu telah menyelesaikan semua level. Bagikan pengalamanmu lewat testimonial dan jadilah inspirasi bagi teman-temanmu. Kamu adalah SHINING Champion! 🏆",
    tips: ["Tulis testimoni pengalamanmu", "Ajak temanmu untuk mencoba juga", "Ulangi level manapun untuk memperdalam pemahamanmu"],
  },
];

const faqs = [
  {
    q: "Apakah harus mengikuti urutan level?",
    a: "Sangat disarankan untuk mulai dari Easy Level karena setiap level membangun pengetahuan dari level sebelumnya. Namun kamu tetap bisa mengakses level manapun.",
  },
  {
    q: "Apa yang terjadi jika saya melakukan refresh halaman?",
    a: "Beberapa progress (seperti posisi lirik atau jawaban) mungkin akan reset. Pastikan kamu sudah menyelesaikan setiap aktivitas sebelum meninggalkan halaman.",
  },
  {
    q: "Apakah aplikasi ini bisa digunakan di HP?",
    a: "Ya! Aplikasi SHINING dirancang responsif untuk desktop dan mobile. Pengalaman terbaik disarankan menggunakan tablet atau laptop agar layar lebih luas.",
  },
  {
    q: "Lagu apa yang digunakan di aplikasi ini?",
    a: "Aplikasi ini menggunakan lagu \"Count On Me\" karya Bruno Mars — sebuah lagu dengan lirik positif tentang persahabatan yang dipilih khusus untuk materi Bahasa Inggris kelas 7.",
  },
  {
    q: "Apakah perlu login atau daftar akun?",
    a: "Tidak perlu! Kamu bisa langsung mengakses semua fitur tanpa login. Cukup buka browser dan mulai belajar.",
  },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col pb-24 overflow-hidden bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="relative w-full bg-gradient-to-br from-shining-dark via-[#1a0a4a] to-[#0f172a] pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-shining-purple/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-shining-yellow/10 blur-[120px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-shining-yellow text-sm font-bold mb-6"
          >
            <HelpCircle size={16} /> Panduan Penggunaan Aplikasi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-6xl lg:text-8xl font-title text-white mb-6 drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]"
          >
            How to Use
            <span className="block text-shining-yellow drop-shadow-[0_0_30px_rgba(252,211,77,0.8)]">
              SHINING
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Ikuti panduan lengkap ini untuk mendapatkan pengalaman belajar bahasa Inggris terbaik melalui musik. 🎵
          </motion.p>
        </div>
      </section>

      {/* QUICK OVERVIEW CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full -mt-10 mb-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: BookOpen, label: "1 Halaman Materi", sub: "Teori lengkap", color: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
            { icon: Map, label: "3 Level Kuis", sub: "Easy, Medium, Hard", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
            { icon: Music2, label: "1 Lagu Pilihan", sub: "Count On Me", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
            { icon: Star, label: "Gratis & No Login", sub: "Langsung belajar!", color: "text-rose-600", bg: "bg-rose-50 border-rose-100" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`${item.bg} border rounded-[2rem] p-5 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all`}
            >
              <item.icon size={28} className={item.color} />
              <p className="font-bold text-slate-800 text-sm">{item.label}</p>
              <p className="text-slate-500 text-xs">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STEP BY STEP FLOW */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 w-full mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1 bg-shining-purple/10 text-shining-purple rounded-full text-sm font-bold mb-3">
            📋 Alur Penggunaan
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-title text-slate-800">
            Langkah demi Langkah
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
            Ikuti alur ini secara berurutan untuk pengalaman belajar yang maksimal.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-300 via-amber-300 via-emerald-300 via-blue-300 via-rose-300 to-yellow-300 hidden md:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-6 group"
                >
                  {/* Step Number Badge */}
                  <div className={`shrink-0 w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${step.color} text-white flex flex-col items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
                    <span className="text-[10px] font-bold opacity-70 leading-none">{step.number}</span>
                    <Icon size={22} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ${step.bgLight} ${step.border} border rounded-[2rem] p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${step.badgeColor}`}>
                          {step.subtitle}
                        </span>
                        <h3 className={`text-2xl lg:text-3xl font-bold ${step.textColor}`}>{step.title}</h3>
                      </div>
                      <Link
                        href={step.href}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${step.color} text-white shadow hover:shadow-lg hover:scale-105 transition-all shrink-0 self-start`}
                      >
                        Buka <ArrowRight size={14} />
                      </Link>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-5">{step.desc}</p>

                    {/* Tips */}
                    <div className="flex flex-col gap-2">
                      {step.tips.map((tip, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${step.textColor}`} />
                          <p className="text-slate-500 text-sm">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* APP MAP / VISUAL OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-gradient-to-br from-shining-dark to-[#1a0a4a] rounded-[3rem] p-8 lg:p-14 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-shining-purple/30 blur-[100px] rounded-full" />

          <div className="relative z-10 text-center mb-10">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1 bg-white/10 border border-white/20 text-shining-yellow rounded-full text-sm font-bold mb-3">
              🗺️ Peta Aplikasi
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-title">
              Struktur SHINING
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 mt-2">
              Gambaran besar semua halaman yang tersedia.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {/* Home */}
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-shining-yellow/20 rounded-xl flex items-center justify-center mb-4">
                <PlayCircle className="text-shining-yellow" size={22} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-shining-yellow">Home</h3>
              <p className="text-white/50 text-sm mb-4">Halaman utama &amp; pengenalan platform</p>
              <div className="space-y-2">
                {["Hero &amp; Tagline", "Fitur Unggulan", "Cara Belajar", "Testimonial", "Call to Action"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <ChevronRight size={12} className="text-shining-yellow" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-violet-500/30 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="text-violet-300" size={22} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-300">Materials</h3>
              <p className="text-white/50 text-sm mb-4">Halaman teori &amp; materi pembelajaran</p>
              <div className="space-y-2">
                {["A. Definition", "B. Social Function", "C. Generic Structure", "D. Language Features", "E. Case Study"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <ChevronRight size={12} className="text-violet-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Music Map */}
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4">
                <Map className="text-amber-300" size={22} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-300">Music Map</h3>
              <p className="text-white/50 text-sm mb-4">Halaman peta & pilihan level</p>
              <div className="space-y-3">
                {[
                  { label: "Easy Level", sub: "Listen & Learn", color: "text-emerald-400", icon: Headphones },
                  { label: "Medium Level", sub: "Analyze & Identify", color: "text-blue-400", icon: Pencil },
                  { label: "Hard Level", sub: "Challenge & Create", color: "text-rose-400", icon: Zap },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center`}>
                      <item.icon size={14} className={item.color} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${item.color}`}>{item.label}</p>
                      <p className="text-white/40 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* About */}
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-rose-500/30 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-rose-300" size={22} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-rose-300">About Us</h3>
              <p className="text-white/50 text-sm mb-4">Tentang pengembang & platform</p>
              <div className="space-y-2">
                {["Visi & Misi Platform", "Profil Pengembang", "Kontak & Sosial Media", "Testimonial Pengguna"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <ChevronRight size={12} className="text-rose-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 w-full mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-3">
            ❓ FAQ
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-title text-slate-800">
            Pertanyaan Umum
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm hover:shadow-md hover:border-shining-violet/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-shining-purple/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb size={15} className="text-shining-purple" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-2">{faq.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-shining-yellow via-amber-400 to-orange-400 rounded-[3rem] p-10 lg:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)", backgroundSize: "20px 20px" }}
          />
          <div className="relative z-10">
            <span className="text-5xl block mb-4">🚀</span>
            <h2 className="text-4xl lg:text-5xl font-title text-shining-dark mb-4">
              Siap untuk Memulai?
            </h2>
            <p className="text-amber-900/70 text-lg mb-8 max-w-xl mx-auto">
              Kamu sudah tahu cara menggunakan SHINING. Sekarang waktunya beraksi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/materials"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-shining-dark text-white font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all shadow-lg"
              >
                <BookOpen size={18} /> Mulai dari Materi
              </Link>
              <Link
                href="/music-map"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 text-shining-dark font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all shadow"
              >
                <PlayCircle size={18} /> Langsung ke Music Map
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
