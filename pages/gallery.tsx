export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold glow mb-10">Visual Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src="/images/cityscape.jpg" alt="City" className="rounded-lg shadow-lg" />
        <img src="/images/neon-poster.webp" alt="Poster" className="rounded-lg shadow-lg" />
        <img src="/images/logo.png" alt="Logo" className="rounded-lg shadow-lg" />
      </div>
    </div>
  )
}