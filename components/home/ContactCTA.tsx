import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function ContactCTA() {
  return (
    <section className="reveal relative py-32 overflow-hidden border-t border-[#1e3a2f]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#080e0b]">
        {/* Subtle grid pattern */}
        <div 
           className="absolute inset-0" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(45,84,65,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,84,65,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">
          Ready to Claim your <br />
          <span className="italic text-gold">Mountain Haven?</span>
        </h2>
        <p className="font-sans text-mist text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Speak with our real estate experts for a curated list of properties that match your vision or for guidance on Section 118 legalities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="px-10">
              Schedule a Consultation
            </Button>
          </Link>
          <Link href="tel:+919418613789">
             <Button variant="outline" size="lg" className="px-10">
               +91 94186 13789
             </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
