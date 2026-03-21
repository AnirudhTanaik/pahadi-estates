import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/80 via-[#0e0e0e]/50 to-[#0e0e0e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {/* Tag badge */}
        <div className="inline-flex items-center gap-2 mb-8" style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
          <div className="w-6 h-px bg-gold" />
          <span className="text-gold font-sans text-xs tracking-widest uppercase">
            Himachal Pradesh · Trusted Since 2005
          </span>
          <div className="w-6 h-px bg-gold" />
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8" style={{ animation: 'fadeUp 0.6s ease 0.35s both' }}>
          Own a piece of the{' '}
          <span className="italic text-gold">Himalayas</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-mist text-lg md:text-xl max-w-2xl mb-12 leading-relaxed" style={{ animation: 'fadeUp 0.6s ease 0.6s both' }}>
          Premium residential plots, commercial properties and holiday estates
          across Shimla, Kullu, Kangra and Kinnaur — curated for those who
          seek more than a home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.6s ease 0.8s both' }}>
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-4 bg-gold text-[#0e0e0e] font-sans font-medium tracking-wide hover:bg-[#e8d5a3] transition-colors duration-200"
          >
            View Properties
          </Link>
          <Link
            href="/legal-guide"
            className="inline-flex items-center px-8 py-4 border border-gold/60 text-gold font-sans font-medium tracking-wide hover:bg-gold/10 transition-colors duration-200"
          >
            Legal Guide for Buyers
          </Link>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-8 right-6 md:right-12 z-10 flex items-end gap-8 md:gap-12">
        {[
          { num: '20+', label: 'Years' },
          { num: '340+', label: 'Deals' },
          { num: '8', label: 'Districts' },
        ].map((stat) => (
          <div key={stat.label} className="text-right">
            <div className="font-serif text-3xl md:text-4xl text-gold">
              {stat.num}
            </div>
            <div className="font-sans text-xs text-mist tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold/60" />
      </div>
    </section>
  )
}
