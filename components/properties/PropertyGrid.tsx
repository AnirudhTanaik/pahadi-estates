import type { Property } from '@/types/property'
import { PropertyCard } from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
  mosaic?: boolean
}

export function PropertyGrid({ properties, mosaic }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-4xl mb-4">🏔️</div>
        <h3 className="font-serif text-2xl text-cream mb-2">No properties found</h3>
        <p className="font-sans text-mist text-sm">
          No properties match your current filters. Try adjusting your search.
        </p>
      </div>
    )
  }

  if (mosaic && properties.length >= 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First card spans 2 rows */}
        <div className="md:row-span-2">
          <div className="h-full">
            <PropertyCard property={properties[0]} featured />
          </div>
        </div>
        {properties.slice(1).map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}
