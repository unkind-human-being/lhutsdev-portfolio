export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-900">
      <section className="text-center p-10 max-w-3xl">
        {/* 🔹 Hero Section */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Hi, I’m{" "}
          <span className="text-blue-600">Abdul M. Nasirin</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          A freelancer web developer, graphic designer, and 2D game developer.
          I create modern, engaging, and functional websites and games that
          bring ideas to life. 💡
        </p>

        {/* 🔹 Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            My Services
          </a>
        </div>
      </section>

      {/* 🔹 Skills / Highlights Section */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl px-8">
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Web Development</h3>
          <p className="text-gray-600">
            Responsive, SEO-friendly websites built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Game Design</h3>
          <p className="text-gray-600">
            2D games made in Unity and Flutter that focus on fun, story, and education.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Graphic Design</h3>
          <p className="text-gray-600">
            Branding, logo design, and creative assets crafted with visual balance and clarity.
          </p>
        </div>
      </section>
    </main>
  );
}
