import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/home/HeroSection'
import { SearchBar } from '@/components/home/SearchBar'
import { FeaturedListings } from '@/components/home/FeaturedListings'
import { WhyInvest } from '@/components/home/WhyInvest'
import { Testimonials } from '@/components/home/Testimonials'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[#0e0e0e] pb-20">
        <HeroSection />
        <SearchBar />
        <FeaturedListings />
        <WhyInvest />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
