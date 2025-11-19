"use client";

import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { useState } from "react";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED TYPES HERE
  const [openLayer, setOpenLayer] = useState<
    "mobile" | "web" | "desktop" | "smm" | null
  >(null);

  const [selectedMobileCat, setSelectedMobileCat] = useState<
    "survey" | "games" | "inventory" | "ecommerce"
  >("survey");

  return (
    <main className="relative min-h-screen flex flex-col items-center text-gray-900 overflow-hidden bg-gradient-to-b from-[#FF8FB7] to-[#FFC1D4] scroll-smooth">

      {/* 🌈 Floating Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShapes />
      </div>

      {/* 🌐 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 text-transparent bg-clip-text tracking-tight">
            CODECRAFTERS
          </span>

          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-purple-700 transition">HOME</a>
            <a href="/#about" className="hover:text-purple-700 transition">ABOUT</a>
            <a href="/services#portfolio">PORTFOLIO</a>
            <a href="/services#services" className="hover:text-purple-700 transition">SERVICES</a>

            <a href="/#contact" className="hover:text-purple-700 transition">CONTACT</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 hover:text-pink-600 transition"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white/90 backdrop-blur-md shadow-inner"
            >
              <a href="/" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700">HOME</a>
              <a href="/#about" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700">ABOUT</a>
              <a href="/services#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
              <a href="/services#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700">CONTACT</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 🎨 EXPANDING LAYERED BANNER */}
      <div className="w-full mt-[50px]">
        <div className="relative w-full flex flex-col">

{/* Layer 1 */}
<div
  onClick={() => setOpenLayer(openLayer === "mobile" ? null : "mobile")}
  className={`w-full rounded-b-3xl shadow-md flex flex-col items-center justify-start cursor-pointer transition-all duration-500 ${
  openLayer === "mobile"
    ? "h-auto min-h-[460px] md:h-200"
    : "h-20"
} bg-[#231123]`}

>
  <div className="mt-3 px-8 py-2 text-[#D11E55] font-bold rounded-xl shadow backdrop-blur-md">
    Mobile APP
  </div>

  {/* CATEGORY SYSTEM */}
  {openLayer === "mobile" && (
    <div
      className="w-full mt-6 flex flex-col items-center"
      onClick={(e) => e.stopPropagation()} // <<< FIX!
    >

      {/* CATEGORY TABS */}
      <div className="flex gap-4 mb-6">
        {["survey", "games", "inventory", "ecommerce"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedMobileCat(cat as any)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
              selectedMobileCat === cat
                ? "bg-pink-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {cat === "survey" && "Custom Survey"}
            {cat === "games" && "Games"}
            {cat === "inventory" && "Inventory"}
            {cat === "ecommerce" && "Ecommerce"}
          </button>
        ))}
      </div>

      {/* CATEGORY IMAGES */}
      <div className="flex flex-wrap justify-center gap-6">

        {selectedMobileCat === "survey" && (
          <img src="/portfolio/Custom Survey.png" className="w-48 rounded-lg shadow-lg" />
        )}

        {selectedMobileCat === "games" && (
          <>
            <img src="/portfolio/2dUnity.png" className="w-150 h-auto rounded-xl shadow-lg object-contain transition-all duration-300 hover:scale-105" />
            <img src="/portfolio/ColorGame.png" className="w-52 h-auto rounded-xl shadow-lg object-contain transition-all duration-300 hover:scale-105" />
            <img src="/portfolio/Adventure.png" className="w-150 h-auto rounded-xl shadow-lg object-contain transition-all duration-300 hover:scale-105" />
          </>
        )}

        {selectedMobileCat === "inventory" && (
          <img src="/portfolio/Store.png" className="w-48 rounded-lg shadow-lg" />
        )}

        {selectedMobileCat === "ecommerce" && (
          <>
          <img src="/portfolio/Picart.png" className="w-48 rounded-lg shadow-lg" />
          <img src="/portfolio/Alhadyz.jpg" className="w-48 rounded-lg shadow-lg" />
          </>
        )}
      </div>
    </div>
  )}
</div>

{/* Layer 2 */}
<div
  onClick={() => setOpenLayer(openLayer === "web" ? null : "web")}
  className={`w-full -mt-5 rounded-b-3xl shadow-md flex flex-col items-center justify-start cursor-pointer transition-all duration-500 ${
    openLayer === "web" ? "h-200" : "h-20"
  } bg-[#16302B]`}
>
  <div className="mt-3 px-8 py-2 text-white font-bold rounded-xl shadow backdrop-blur-md">
    WEB APP
  </div>

  {openLayer === "web" && (
    <div
      className="w-full mt-4 flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="mt-2 text-white px-6 text-center text-sm mb-6">
        Websites & dashboards using Next.js + Tailwind CSS.
      </p>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">IICT SOCIAL MEDIA</span>
          <a href="https://iict-social-media.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/portfolio/IICTsm.png"
            className="w-200 rounded-xl shadow-lg object-contain hover:scale-105 transition-all duration-300"
          />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Enrollment System</span>
          <a href="https://enrollment-system-pink.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/portfolio/EnrollmentSystem.png"
            className="w-200 rounded-xl shadow-lg object-contain hover:scale-105 transition-all duration-300"
          />
          </a>
        </div>
      </div>
    </div>
  )}
</div>

{/* Layer 4 */}
<div
  onClick={() => setOpenLayer(openLayer === "smm" ? null : "smm")}
  className={`w-full -mt-5 rounded-b-3xl shadow-md flex flex-col items-center justify-start cursor-pointer transition-all duration-500 ${
    openLayer === "smm" ? "h-auto pb-10" : "h-20"
  } bg-[#ECE4B7]`}
>
  <div className="mt-3 px-8 py-2 text-black font-bold rounded-xl shadow backdrop-blur-md">
    SMM
  </div>

  {openLayer === "smm" && (
    <div
      className="w-full mt-4 flex flex-col items-center gap-8"
      onClick={(e) => e.stopPropagation()}  // <-- prevent closing
    >
      <p className="text-black px-6 text-center text-sm mb-4">
        Social media content, graphics, editing, captions & scheduling.
      </p>

      {/* FACEBOOK REELS */}
      <div className="flex flex-wrap justify-center gap-6">

        {/* Reel 1 */}
        <div className="w-[320px]">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1510845763397986&show_text=false&t=0"
            className="w-full h-[600px] rounded-xl shadow-lg"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        {/* Reel 2 */}
        <div className="w-[320px]">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1589284595769296&show_text=false&t=0"
            className="w-full h-[600px] rounded-xl shadow-lg"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        {/* Reel 3 */}
        <div className="w-[320px]">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1600709797584672&show_text=false&t=0"
            className="w-full h-[600px] rounded-xl shadow-lg"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

      </div>
    </div>
  )}
</div>


        </div>
      </div>

      {/* 📸 PORTFOLIO SECTION */}
      <section
  id="portfolio"
  className="relative z-10 max-w-6xl text-center px-6 pt-32 pb-10 scroll-mt-24"
>


  <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
    Portfolio
  </h2>

  <p className="text-white/90 text-lg sm:text-xl tracking-wide mb-10">
    BUILD WHAT YOU IMAGINE.
  </p>

  <p className="text-white/80 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed tracking-wide">
    We are a full-service creative development company dedicated to building
    digital experiences that work beautifully and perform flawlessly. Our team
    develops custom web applications, mobile apps, and desktop software using
    modern technologies that ensure speed, security, and scalability. Beyond
    software, we craft polished graphic designs, brand visuals, and social media
    content that help businesses connect with their audience and stand out in
    the digital world. With a blend of creativity, strategy, and technical
    expertise, we deliver solutions that elevate brands, solve real problems,
    and drive long-term growth.
  </p>

</section>

      {/* 📌 SERVICES CONTENT */}
      <section
  id="services"
  className="relative z-10 max-w-5xl text-center px-6 pt-40 pb-20 scroll-mt-24"
>

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
          Services
        </h1>
        <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto">
          I help businesses and creators in Bongao, Tawi-Tawi build a strong
          digital presence through content, apps, and clean, functional systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media Marketing */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40 hover:border-pink-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-700 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Social Media Marketing
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Content, designs, and short videos that keep your page active and
              help your brand look professional online.
            </p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>• Post & content planning</li>
              <li>• Graphics for FB / IG / TikTok</li>
              <li>• Reels & short-form video edits</li>
            </ul>
          </div>

          {/* Mobile App (Android) */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40 hover:border-pink-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-700 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Mobile Apps (Android)
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Custom Android apps for bookings, simple systems, or turning your
              business idea into a working mobile app.
            </p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>• Business tools & utilities</li>
              <li>• Simple internal systems</li>
              <li>• MVP / prototype apps</li>
            </ul>
          </div>

          {/* Desktop Apps */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40 hover:border-pink-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-700 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Desktop Applications
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Lightweight desktop apps for shops, offices, or school projects
              that focus on speed and simplicity.
            </p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>• Basic inventory / records</li>
              <li>• Offline tools & utilities</li>
              <li>• Custom internal apps</li>
            </ul>
          </div>

          {/* Websites / Web Apps */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40 hover:border-pink-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-700 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Websites & Web Apps
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Clean, responsive websites and simple web apps that look good on
              both phone and desktop.
            </p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>• Business & portfolio sites</li>
              <li>• Inquiry / booking forms</li>
              <li>• Basic web dashboards</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
