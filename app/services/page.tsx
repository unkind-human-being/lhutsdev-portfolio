"use client";

import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { useState } from "react";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center text-gray-900 overflow-hidden bg-gradient-to-b from-[#FF8FB7] to-[#FFC1D4] scroll-smooth">
      {/* 🌈 Floating animated shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShapes />
      </div>

      {/* 🌐 Navigation Bar (same style as Home) */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo / Brand */}
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

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none hover:text-pink-600 transition"
          >
            {menuOpen ? (
              // ❌ Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // ☰ Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white/90 backdrop-blur-md shadow-inner"
            >
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                HOME
              </a>
              <a
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                ABOUT
              </a>
              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                SERVICES
              </a>
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 📌 SERVICES CONTENT */}
      <section className="relative z-10 max-w-5xl text-center px-6 pt-40 pb-20">
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
