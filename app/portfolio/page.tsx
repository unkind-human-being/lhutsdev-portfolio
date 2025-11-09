export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <section className="max-w-5xl w-full text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-10">My Portfolio</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project cards */}
          {["Explore Bongao", "Codex Legend TCG", "Z Travels CRM"].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project}</h3>
              <p className="text-gray-600">
                A project built with love and modern technologies.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View details →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
