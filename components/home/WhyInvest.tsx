import Image from 'next/image'

const BENEFITS = [
  {
    title: 'Pristine Environment',
    description: 'Breathe pure Himalayan air and live amidst unpolluted nature away from the city chaos.',
    icon: '🏔️',
  },
  {
    title: 'High ROI',
    description: 'Himachal real estate has shown consistent appreciation with growing tourism and infrastructure.',
    icon: '📈',
  },
  {
    title: 'Legal Safety',
    description: 'We ensure 100% clean documentation compliant with Section 118 of HP Tenancy Act.',
    icon: '⚖️',
  },
  {
    title: 'Holiday Rentals',
    description: 'Turn your property into a lucrative homestay or boutique resort when you are away.',
    icon: '🏡',
  },
]

export function WhyInvest() {
  return (
    <section className="reveal py-24 bg-[#080e0b] border-y border-[#1e3a2f]" id="why-hp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-gold" />
              <span className="text-gold font-sans text-xs tracking-widest uppercase">
                The Pahadi Advantage
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-tight">
              Why Invest in <br />
              <span className="italic text-gold">Himachal Pradesh?</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="reveal group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-mist text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative aspect-[4/5] w-full  border border-[#2d5441]/40 p-4">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                  alt="Himachal Mountains"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative Corner */}
             <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold m-2" />
             <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold m-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
