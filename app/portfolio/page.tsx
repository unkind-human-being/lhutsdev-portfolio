"use client";

import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { useState } from "react";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tab: string) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center text-gray-900 overflow-hidden bg-[#ff8fb7] scroll-smooth">
      {/* 🌈 Floating animated shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShapes />
      </div>

      {/* 🌐 Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 text-transparent bg-clip-text tracking-tight">
            CODECRAFTERS
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-purple-700 transition-colors duration-200">
              HOME
            </a>
            <a href="/#about" className="hover:text-purple-700 transition-colors duration-200">
              ABOUT
            </a>
            <a href="/services" className="hover:text-purple-700 transition-colors duration-200">
              SERVICES
            </a>
            <a href="/#contact" className="hover:text-purple-700 transition-colors duration-200">
              CONTACT
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none hover:text-pink-600 transition"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white/90 backdrop-blur-md shadow-inner"
            >
              <a href="/" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700 transition">
                HOME
              </a>
              <a href="/#about" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700 transition">
                ABOUT
              </a>
              <a href="/services" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700 transition">
                SERVICES
              </a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700 transition">
                CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 💼 PORTFOLIO SECTION */}
      <section className="relative z-10 w-full text-center bg-[#ff8fb7] pt-52 pb-20">
        <div className="absolute top-13 left-0 w-full">
          {/* === Mobile APP === */}
          <div
            onClick={() => toggleTab("mobile")}
            className="relative w-full h-12 bg-[#7c2b63] border-t border-x border-black rounded-t-lg flex justify-center items-center cursor-pointer hover:brightness-110 transition"
          >
            <span className="absolute bottom-0 translate-y-1/2 bg-[#7c2b63] text-white font-bold px-8 py-1 rounded-t-md border border-black shadow">
              Mobile APP
            </span>
          </div>
          <AnimatePresence>
            {openTab === "mobile" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#7c2b63] border-x border-b border-black py-44 text-center font-semibold text-white text-2xl"
              >
                This is Mobile App
              </motion.div>
            )}
          </AnimatePresence>

          {/* === WEB APP === */}
          <div
            onClick={() => toggleTab("web")}
            className="relative w-full h-12 bg-[#fdd3d3] border-x border-black flex justify-center items-center cursor-pointer hover:brightness-110 transition"
          >
            <span className="absolute bottom-0 translate-y-1/2 bg-[#fdd3d3] text-[#7c2b63] font-bold px-8 py-1 rounded-md border border-black shadow">
              WEB APP
            </span>
          </div>
          <AnimatePresence>
            {openTab === "web" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#fdd3d3] border-x border-b border-black py-44 text-center font-semibold text-[#7c2b63] text-2xl"
              >
                This is Web App
              </motion.div>
            )}
          </AnimatePresence>

          {/* === Desktop APP === */}
          <div
            onClick={() => toggleTab("desktop")}
            className="relative w-full h-12 bg-[#e2bdf7] border-x border-black flex justify-center items-center cursor-pointer hover:brightness-110 transition"
          >
            <span className="absolute bottom-0 translate-y-1/2 bg-[#e2bdf7] text-[#7c2b63] font-bold px-8 py-1 rounded-md border border-black shadow">
              Desktop APP
            </span>
          </div>
          <AnimatePresence>
            {openTab === "desktop" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#e2bdf7] border-x border-b border-black py-44 text-center font-semibold text-[#7c2b63] text-2xl"
              >
                This is Desktop App
              </motion.div>
            )}
          </AnimatePresence>

          {/* === SMM === */}
          <div
            onClick={() => toggleTab("smm")}
            className="relative w-full h-12 bg-[#ffce73] border-x border-black flex justify-center items-center cursor-pointer hover:brightness-110 transition"
          >
            <span className="absolute bottom-0 translate-y-1/2 bg-[#ffce73] text-white font-bold px-8 py-1 rounded-md border border-black shadow">
              SMM
            </span>
          </div>
          <AnimatePresence>
  {openTab === "smm" && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="absolute left-0 right-0 top-full bg-[#ffce73] border-x border-b border-black py-60 text-center font-semibold text-white text-2xl shadow-xl z-20"
      style={{ marginTop: "-1px" }}
    >
      This is SMM
    </motion.div>
  )}
</AnimatePresence>

        </div>

        {/* Portfolio Content */}
        <div className="relative z-10 mt-72 px-6">
          <h1 className="text-6xl font-black text-black mb-6">PORTFOLIO</h1>
          <p className="max-w-4xl mx-auto text-lg font-semibold text-black leading-relaxed tracking-wide text-justify md:text-center">
            We are a creative tech company specializing in modern web, mobile, and desktop applications.
            Alongside development, we also provide graphic design, branding, and social media content
            services to help businesses grow and build a strong online presence.
          </p>
        </div>
      </section>
    </main>
  );
}
