import { PropertyGrid } from '@/components/properties/PropertyGrid'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { getFeaturedProperties } from '@/lib/queries/properties'

export async function FeaturedListings() {
  const properties = await getFeaturedProperties()

  return (
    <section className="reveal w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Featured <span className="italic text-gold">Properties</span>
            </h2>
            <p className="font-sans text-mist max-w-2xl">
              Explore our handpicked selection of premium estates, plots, and commercial spaces across the most sought-after locations in Himachal Pradesh.
            </p>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="shrink-0">
              View All Properties
            </Button>
          </Link>
        </div>

        <PropertyGrid properties={properties} mosaic />
      </div>
    </section>
  )
}
