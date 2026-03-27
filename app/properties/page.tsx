import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyGrid } from '@/components/properties/PropertyGrid'
import { getProperties } from '@/lib/queries/properties'
import { HP_DISTRICTS, PROPERTY_TYPES, BUDGET_RANGES } from '@/lib/utils/constants'

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ district?: string; property_type?: string; budget?: string; outside_hp?: string }>
}) {
  const { district: rawDistrict, property_type: rawType, budget: rawBudget, outside_hp: rawOutsideHp } = await searchParams
  const district = rawDistrict || ""
  const property_type = rawType || ""
  const budget = rawBudget || ""

  let minPrice = undefined
  let maxPrice = undefined

  if (budget && budget.includes("-")) {
    const [min, max] = budget.split("-").map(Number)
    minPrice = min
    maxPrice = max
  }

  const properties = await getProperties({
    district,
    property_type,
    minPrice,
    maxPrice,
    outside_hp: rawOutsideHp,
  })
  const activeFilters = [
    rawDistrict,
    rawType,
    rawBudget,
    rawOutsideHp,
  ].filter(Boolean).length

  const selectClass =
    'bg-[#0e0e0e] border border-[#2d5441] text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full appearance-none cursor-pointer'

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0e0e0e] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Explore <span className="italic text-gold">Properties</span>
            </h1>
            <p className="text-mist text-lg max-w-2xl">
              Discover our curated selection of luxury estates, commercial plots,
              and holiday homes across Himachal Pradesh.
            </p>
          </div>

          {/* Filters */}
          <form method="GET" className="bg-[#161e1a] border border-[#2d5441] p-5 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">

              {/* District */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-mist font-sans">Location</label>
                <select name="district" defaultValue={rawDistrict ?? ''} className={selectClass}>
                  <option value="">All Districts</option>
                  {HP_DISTRICTS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-mist font-sans">Property Type</label>
                <select name="property_type" defaultValue={rawType ?? ''} className={selectClass}>
                  <option value="">All Types</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-mist font-sans">Budget</label>
                <select name="budget" defaultValue={rawBudget ?? ''} className={selectClass}>
                  <option value="">Any Budget</option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </select>
              </div>

              {/* Outside HP */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-mist font-sans">Buyer Eligibility</label>
                <select name="outside_hp" defaultValue={rawOutsideHp ?? ''} className={selectClass}>
                  <option value="">All Buyers</option>
                  <option value="yes">Open to Outside HP</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gold text-[#0e0e0e] font-sans font-medium text-sm tracking-wide hover:bg-[#e8d5a3] transition-colors duration-200"
                >
                  {activeFilters > 0 ? `Filter (${activeFilters})` : 'Filter'}
                </button>
                {activeFilters > 0 && (
                  <a
                    href="/properties"
                    className="px-4 py-3 border border-[#2d5441] text-mist hover:text-cream hover:border-gold text-sm font-sans transition-colors duration-200 flex items-center"
                  >
                    ✕
                  </a>
                )}
              </div>

            </div>
          </form>

          {/* Results count */}
          <p className="font-sans text-sm text-mist mb-6">
            {properties.length === 0
              ? 'No properties found.'
              : `${properties.length} ${properties.length === 1 ? 'property' : 'properties'} found`}
            {activeFilters > 0 && ' — filters applied'}
          </p>

          {/* Results */}
          <PropertyGrid properties={properties} />

        </div>
      </main>

      <Footer />
    </>
  )
}
