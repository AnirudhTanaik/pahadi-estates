import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-gold font-sans text-sm tracking-widest uppercase mb-4">
        404 — Page Not Found
      </p>
      <h1 className="font-serif text-6xl md:text-8xl text-cream mb-6">
        Lost in the <span className="italic text-gold">Mountains</span>
      </h1>
      <p className="text-mist font-sans max-w-md mb-10">
        The page you&apos;re looking for seems to have wandered off into the
        Himalayas. Let&apos;s guide you back.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 bg-gold text-[#0e0e0e] font-sans font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
      >
        Return Home
      </Link>
    </div>
  )
}
