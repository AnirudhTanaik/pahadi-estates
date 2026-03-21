import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyGrid } from '@/components/properties/PropertyGrid'
import { getProperties } from '@/lib/queries/properties'
import { HP_DISTRICTS, PROPERTY_TYPES } from '@/lib/utils/constants'

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: { district?: string; property_type?: string; budget?: string; outside_hp?: string }
}) {
  const properties = await getProperties({
    district: searchParams.district,
    property_type: searchParams.property_type,
    budget: searchParams.budget,
    outside_hp: searchParams.outside_hp,
  })

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0e0e0e] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Explore <span className="italic text-gold">Properties</span>
            </h1>
            <p className="text-mist text-lg max-w-2xl">
              Discover our curated selection of luxury estates, commercial plots,
              and holiday homes across Himachal Pradesh.
            </p>
          </div>

          {/* Filters */}
          <form method="GET" className="flex flex-col md:flex-row gap-4 mb-10">

            {/* District */}
            <select
              name="district"
              defaultValue={searchParams.district || ''}
              className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white w-full"
            >
              <option value="">All Districts</option>
              {HP_DISTRICTS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Property Type */}
            <select
              name="property_type"
              defaultValue={searchParams.property_type || ''}
              className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white w-full"
            >
              <option value="">All Types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Outside HP */}
            <select
              name="outside_hp"
              defaultValue={searchParams.outside_hp || ''}
              className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white w-full"
            >
              <option value="">All Buyers</option>
              <option value="yes">Open to Outside HP Buyers</option>
            </select>

            <button
              type="submit"
              className="px-6 py-3 bg-gold text-[#0e0e0e] font-sans font-medium tracking-wide hover:bg-[#e8d5a3] transition-colors shrink-0"
            >
              Filter
            </button>
          </form>

          {/* Results */}
          <PropertyGrid properties={properties} />

        </div>
      </main>

      <Footer />
    </>
  )
}
