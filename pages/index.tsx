import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/bg/intro-video.mp4" type="video/mp4" />
      </video>
      <h1 className="text-6xl font-extrabold glow">Welcome to My World</h1>
      <p className="mt-6 text-xl">Scroll down or use the nav to explore</p>
      <nav className="mt-10 space-x-6">
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <audio autoPlay loop className="hidden" controls>
        <source src="/bg/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}