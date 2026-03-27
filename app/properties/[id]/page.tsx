import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyGallery } from '@/components/properties/PropertyGallery'
import { EnquiryForm } from '@/components/properties/EnquiryForm'
import { formatPrice } from '@/lib/utils/formatters'
import { getPropertyById } from '@/lib/queries/properties'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const property = await getPropertyById(params.id)
  if (!property) return {}

  return {
    title: property.title,
    description: property.description,
  }
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const property = await getPropertyById(params.id)

  if (!property) notFound()

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0e0e0e] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Info */}
          <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-sans">
                <span className="bg-[#2d5441] text-cream px-3 py-1 font-medium tracking-wide">
                  {property.property_type}
                </span>

                {property.outside_hp_eligible && (
                  <span className="bg-[#1e3a2f] border border-[#2d5441] text-[#4ade80] px-3 py-1 font-medium">
                    ✓ Outside HP Buyers Eligible
                  </span>
                )}
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-cream mb-4">
                {property.title}
              </h1>

              <p className="font-sans text-mist text-lg flex items-center gap-2">
                <span>📍</span> {property.location_name}, {property.district}
              </p>
            </div>

            <div className="text-left md:text-right border-t md:border-none border-[#2d5441]/40 pt-4 md:pt-0">
              <div className="font-sans text-sm text-mist tracking-widest uppercase mb-1">
                Asking Price
              </div>
              <div className="font-serif text-4xl text-gold">
                {formatPrice(property.price)}
              </div>
            </div>
          </div>

          {/* ✅ FIX: null-safe photos */}
          <PropertyGallery photos={property.photos ?? []} title={property.title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <section>
                <h2 className="font-serif text-3xl text-cream mb-6 border-b border-[#2d5441]/40 pb-4">
                  Property Overview
                </h2>
                <p className="font-sans text-mist text-lg leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="font-serif text-3xl text-cream mb-6 border-b border-[#2d5441]/40 pb-4">
                  Key Features
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                  <FeatureCard
                    label="Area (Bigha)"
                    value={property.area_bigha?.toString() || 'N/A'}
                    icon="📏"
                  />

                  <FeatureCard
                    label="Area (Sq.Ft)"
                    value={property.area_sqft?.toLocaleString() || 'N/A'}
                    icon="📐"
                  />

                  {/* ✅ FIX: road_access removed */}
                  <FeatureCard
                    label="Road Access"
                    value="N/A"
                    icon="🛣️"
                  />

                  {/* ✅ FIX: correct field names */}
                  <FeatureCard
                    label="Water Connection"
                    value={property.water_available ? 'Available' : 'No'}
                    icon="💧"
                  />

                  <FeatureCard
                    label="Electricity"
                    value={property.electricity_available ? 'Available' : 'No'}
                    icon="⚡"
                  />

                  <FeatureCard
                    label="Status"
                    value={
                      property.status.charAt(0).toUpperCase() +
                      property.status.slice(1)
                    }
                    icon="🏷️"
                  />

                </div>
              </section>

              {/* Map */}
              <section>
                <h2 className="font-serif text-3xl text-cream mb-6 border-b border-[#2d5441]/40 pb-4">
                  Location
                </h2>

                <div className="w-full h-[400px] bg-[#161e1a] border border-[#2d5441]/40 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-4">🗺️</span>

                  <h3 className="font-serif text-2xl text-cream mb-2">
                    Map View Limited
                  </h3>

                  <p className="font-sans text-mist">
                    Exact coordinates for properties are shared during scheduled site visits.
                  </p>

                  <p className="font-sans text-sm text-gold mt-4">
                    Approximate Area: {property.location_name}, {property.district}
                  </p>
                </div>
              </section>

            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="sticky top-32">
                <EnquiryForm
                  propertyTitle={property.title}
                  propertyId={property.id}
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function FeatureCard({
  label,
  value,
  icon,
}: {
  label: string
  value: string | number
  icon: string
}) {
  return (
    <div className="bg-[#161e1a] border border-[#2d5441]/20 p-4 shrink-0 flex items-start gap-4">
      <div className="text-2xl mt-1">{icon}</div>

      <div>
        <div className="font-sans text-xs text-mist uppercase tracking-widest mb-1">
          {label}
        </div>
        <div className="font-serif text-xl text-cream">
          {value}
        </div>
      </div>
    </div>
  )
}