export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <section className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">My Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          I help clients build strong online presences through smart design, development, and digital strategies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Web Development</h3>
            <p className="text-gray-600">
              Modern, responsive websites built with Next.js, Tailwind, and TypeScript.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Game Development</h3>
            <p className="text-gray-600">
              2D and casual games made with Unity or Flutter for mobile and desktop.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Graphic Design</h3>
            <p className="text-gray-600">
              Visual identities, logos, and creative assets made with precision and purpose.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
