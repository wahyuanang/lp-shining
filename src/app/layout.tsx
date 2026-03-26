import type { Metadata } from "next";
import { Mouse_Memoirs, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mouseMemoirs = Mouse_Memoirs({
  weight: "400",
  variable: "--font-mouse-memoirs",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHINING | Learn English with Song Lyrics",
  description: "SHINING adalah platform pembelajaran Bahasa Inggris berbasis lagu (song lyrics) yang membantu siswa memahami kosa kata, makna lirik, dan pesan moral melalui aktivitas interaktif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mouseMemoirs.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 relative selection:bg-shining-yellow selection:text-shining-dark">
        <Navbar />
        {/* Main content padding: pt-24 (for top nav on desktop and mobile) & pb-0 (let footer handle bottom padding) */}
        <main className="flex-1 pt-14 md:pt-18 pb-0 flex flex-col min-h-screen">
          <div className="flex-1 shrink-0">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
