"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FloatingShapes from "../components/FloatingShapes";
import { useState } from "react";

export default function Home() {
  const [showTeam, setShowTeam] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🍔 New menu toggle state

  // 👥 Team Data
  const teamMembers = [
    { name: "Lhuts", role: "CEO / Founder", image: "/team/Lhuts.png" },
    { name: "Jerik", role: "Product Lead / Product Manager", image: "/team/Jerik.jpg" },
    { name: "Dhan", role: "CTO / Tech Lead", image: "/team/Dhan.jpg" },
    { name: "Nadz", role: "Marketing & Growth Lead", image: "/team/Nadz.png" },
    { name: "Dyzon", role: "Sales & Customer Success", image: "/team/Dyzon.jpg" },
    { name: "Nedz", role: "Operations & Finance Lead", image: "/team/Nedz.jpg" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center text-gray-900 overflow-hidden bg-gradient-to-b from-[#FF8FB7] to-[#FFC1D4] scroll-smooth">
      {/* 🌈 Floating animated shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShapes />
      </div>

      {/* 🌐 Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo / Brand */}
          <span className="text-xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 text-transparent bg-clip-text tracking-tight">
            CODECRAFTERS
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="#home" className="hover:text-purple-700 transition-colors duration-200">
              HOME
            </a>
            <a href="#about" className="hover:text-purple-700 transition-colors duration-200">
              ABOUT
            </a>
            <a href="/services#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
            <a href="/services#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
            <a href="#contact" className="hover:text-purple-700 transition-colors duration-200">
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
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                HOME
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                ABOUT
              </a>
              <a href="/#portfolio" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-700 hover:text-purple-700">PORTFOLIO</a>
              <a href="/services#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
              <a href="/services#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-purple-700 transition"
              >
                CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 💎 HERO SECTION */}
      <motion.section
        id="home"
        className="relative z-10 text-center flex flex-col items-center justify-start px-6 pt-48 pb-32 sm:pt-40 sm:pb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 leading-tight drop-shadow-sm tracking-tight">
          <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 text-transparent bg-clip-text">
            CODECRAFTERS
          </span>
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-sm mb-10">
          <span className="text-yellow-300">BUILD WHAT </span>
          <span className="text-cyan-400">YOU IMAGINE</span>
        </h2>

        <motion.div
          className="flex justify-center items-center mt-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="CODECRAFTERS Logo"
            width={480}
            height={380}
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>
      </motion.section>

      {/* 🌸 ABOUT SECTION */}
      <motion.section
        id="about"
        className="relative z-10 w-full flex flex-col items-center text-center px-8 py-24 sm:py-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 mb-8">
          About CODECRAFTERS
        </h2>

        <p className="max-w-3xl text-lg sm:text-xl text-gray-800 leading-relaxed z-10">
          We’re <span className="font-semibold text-purple-700">CODECRAFTERS</span> — a small but mighty creative studio based in{" "}
          <span className="font-semibold text-pink-600">Bongao, Tawi-Tawi</span>, built by a group of skilled makers who love turning ideas into
          real, working digital experiences. <br /> <br />
          From{" "}
          <span className="font-semibold text-purple-600">mobile apps, websites, and desktop software</span>{" "}
          to{" "}
          <span className="font-semibold text-rose-500">graphic design and social media content</span>, we help local businesses and creators show
          up online in a way that feels true to who they are. <br /> <br />
          Our team blends <span className="font-semibold text-yellow-500">code</span>,{" "}
          <span className="font-semibold text-cyan-500">design</span>, and{" "}
          <span className="font-semibold text-pink-500">storytelling</span> to build solutions that are easy to use, beautiful to look at, and
          ready to grow with your brand. Whether you’re just starting or leveling up, we craft every project with care, creativity, and heart.{" "}
          <br /> <br />
          <span className="italic text-gray-700">Let’s build something awesome together — for Bongao and beyond.</span>
        </p>

        <div className="mt-10">
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-xl transition transform duration-300"
          >
            {showTeam ? "Hide Team" : "Meet My Team"}
          </button>
        </div>
      </motion.section>

      {/* 👥 TEAM SECTION */}
      <AnimatePresence>
        {showTeam && (
          <motion.section
            id="team"
            className="relative z-10 w-full flex flex-col items-center text-center px-8 py-24 sm:py-28 bg-gradient-to-b from-[#FFC1D4] to-[#FFD4E3]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400">
              Meet The Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition group border border-white/40 hover:border-pink-300"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-4 border-pink-200 shadow-md group-hover:border-purple-400 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">{member.name}</h3>
                  <p className="text-gray-700">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 🌙 CONTACT / FOOTER SECTION */}
      <motion.footer
        id="contact"
        className="relative z-10 w-full bg-gradient-to-b from-[#1a1b1e] to-[#2a2b2e] text-gray-300 px-8 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 🧠 About / Branding */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              CODECRAFTERS
            </h2>
            <p className="text-sm text-gray-400">
              Turning ideas into digital experiences — from Bongao to the world.
              <br />
              Crafting apps, games, and brands with creativity and heart.
            </p>
            <p className="text-xs text-gray-500 mt-6">
              © {new Date().getFullYear()} CODECRAFTERS. All rights reserved.
            </p>
          </div>

          {/* ⚡ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
              <li><a href="/services" className="hover:text-pink-400 transition">Services</a></li>
              <li><a href="#team" className="hover:text-pink-400 transition">Team</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* 📍 Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 text-lg">📍</span>
                <div>
                  <p className="text-gray-300">Bongao, Tawi-Tawi, Philippines</p>
                  <p className="text-gray-500 text-xs">Available for remote work</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 text-lg">✉️</span>
                <a href="mailto:codecraftersbongao@gmail.com" className="hover:text-pink-400 transition">
                  codecraftersbongao@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 text-lg">📞</span>
                <a href="tel:09272315866" className="hover:text-pink-400 transition">
                  0927 231 5866 - 0956 158 2791
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 text-lg">⏰</span>
                <p>Mon–Fri: 9AM–6PM (PHT)</p>
              </li>
            </ul>

            {/* 🗺️ Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.896084685215!2d119.76702422997134!3d5.030689375398804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32413af0b1bdbb27%3A0x9c8b5df0d7f87e0c!2sBongao%2C%20Tawi-Tawi!5e0!3m2!1sen!2sph!4v1700280000000!5m2!1sen!2sph"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
