"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FloatingShapes from "../components/FloatingShapes";
import { useState } from "react";

export default function Home() {
  const [showTeam, setShowTeam] = useState(false);

  // 👥 Team Data
  const teamMembers = [
    { name: "Lhuts", role: "CEO / Founder", image: "/team/Lhuts.png" },
    { name: "Jerik", role: "Product Lead / Product Manager", image: "/team/Jerik.jpg" },
    { name: "Dhan", role: "CTO / Tech Lead", image: "/team/Dhan.jpg" },
    { name: "Nadz", role: "Marketing & Growth Lead", image: "/team/Nadz.jpg" },
    { name: "Dyzon", role: "Sales & Customer Success", image: "/team/Dyzon.jpg" },
    { name: "Nedz", role: "Operations & Finance Lead", image: "/team/Nedz.jpg" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center text-gray-900 overflow-hidden bg-gradient-to-b from-[#FF8FB7] to-[#FFC1D4] scroll-smooth">
      {/* 🌈 Floating animated shapes (visible on all sections) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShapes />
      </div>

      {/* 🌐 Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-400 text-transparent bg-clip-text tracking-tight">
            CODECRAFTERS
          </span>

          <div className="flex space-x-6 text-sm font-semibold text-gray-700">
            <a href="#home" className="hover:text-purple-700 transition-colors duration-200">
              HOME
            </a>
            <a href="#about" className="hover:text-purple-700 transition-colors duration-200">
              ABOUT
            </a>
            <a href="/services" className="hover:text-purple-700 transition-colors duration-200">
              SERVICES
            </a>
            <a href="/portfolio" className="hover:text-purple-700 transition-colors duration-200">
              PORTFOLIO
            </a>
            <a href="/contact" className="hover:text-purple-700 transition-colors duration-200">
              CONTACT
            </a>
          </div>
        </div>
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
          <span className="font-semibold text-pink-600">Bongao, Tawi-Tawi</span>, built by a group of skilled makers who love turning ideas into real, working digital experiences. <br /> <br />
          From{" "}
          <span className="font-semibold text-purple-600">mobile apps, websites, and desktop software</span>{" "}
          to{" "}
          <span className="font-semibold text-rose-500">graphic design and social media content</span>, we help local businesses and creators show up online in a way that feels true to who they are. <br /> <br />
          Our team blends <span className="font-semibold text-yellow-500">code</span>,{" "}
          <span className="font-semibold text-cyan-500">design</span>, and{" "}
          <span className="font-semibold text-pink-500">storytelling</span> to build solutions that are easy to use, beautiful to look at, and ready to grow with your brand. Whether you’re just starting or leveling up, we craft every project with care, creativity, and heart. <br /> <br />
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
    </main>
  );
}
