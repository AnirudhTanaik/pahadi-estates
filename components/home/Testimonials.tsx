const TESTIMONIALS = [
  {
    name: 'Rajiv Mathur',
    location: 'Delhi',
    text: 'Pahadi Estates made buying land in Shimla as an outsider seamless. They handled all the Section 118 permissions professionally.',
    role: 'Bought Residential Plot',
  },
  {
    name: 'Anita Desai',
    location: 'Mumbai',
    text: 'We found our dream holiday home in Kullu through them. The transparency in title verification gave us immense peace of mind.',
    role: 'Bought Holiday Home',
  },
  {
    name: 'Vikram Singh',
    location: 'Chandigarh',
    text: 'Excellent portfolio of commercial properties. The team understood our business needs and found the perfect highway location.',
    role: 'Commercial Investor',
  },
]

export function Testimonials() {
  return (
    <section className="reveal w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
             Trusted by <span className="italic text-gold">340+ Families</span>
           </h2>
           <p className="font-sans text-mist max-w-2xl mx-auto">
             Hear from our clients who found their perfect piece of the Himalayas with absolute peace of mind.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="reveal bg-[#161e1a] border border-[#2d5441]/40 p-8 hover:border-gold/30 transition-colors"
            >
              <div className="text-gold text-4xl font-serif mb-6 leading-none">&ldquo;</div>
              <p className="font-sans text-cream text-lg italic mb-8 leading-relaxed">
                {testimonial.text}
              </p>
              <div>
                <div className="font-serif text-xl text-cream">{testimonial.name}</div>
                <div className="font-sans text-xs text-mist uppercase tracking-wider mt-1">
                  {testimonial.role} | {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
