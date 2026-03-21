import { getAllProperties } from '@/lib/queries/properties'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils/formatters'
import Link from 'next/link'
import { PropertyActions } from './PropertyActions'

export default async function AdminPropertiesPage() {
  const properties = await getAllProperties()

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-4xl text-cream mb-1">Properties</h1>
          <p className="font-sans text-mist text-sm">{properties.length} total listings</p>
        </div>
        <Link
          href="/admin/properties/new"
          className="inline-flex items-center gap-2 bg-gold text-[#0e0e0e] font-sans font-medium text-sm px-6 py-3 hover:bg-gold-light transition-colors duration-200"
        >
          + Add Property
        </Link>
      </div>

      <div className="bg-[#161e1a] border border-[#2d5441]/40 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_120px_100px_120px_160px] gap-4 px-5 py-3 border-b border-[#2d5441]/40 bg-[#0e0e0e]">
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Property</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Type</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Status</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Price</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Actions</span>
        </div>

        <div className="divide-y divide-[#2d5441]/20">
          {properties.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[1fr_120px_100px_120px_160px] gap-4 items-center px-5 py-4 hover:bg-[#1a2420] transition-colors"
            >
              {/* Title + location */}
              <div className="min-w-0">
                <p className="font-sans text-sm text-cream truncate">{p.title}</p>
                <p className="font-sans text-xs text-mist mt-0.5">{p.location_name}, {p.district}</p>
              </div>

              {/* Type */}
              <span className="font-sans text-xs text-mist truncate">{p.property_type}</span>

              {/* Status badge */}
              <Badge
                variant={
                  p.status === 'active' ? 'green' :
                  p.status === 'sold'   ? 'red'   : 'mist'
                }
              >
                {p.status}
              </Badge>

              {/* Price */}
              <span className="font-sans text-sm text-gold">{p.price_label || formatPrice(p.price)}</span>

              {/* Actions */}
              <PropertyActions property={p} />
            </div>
          ))}

          {properties.length === 0 && (
            <p className="px-5 py-12 text-center font-sans text-sm text-mist">
              No properties found. <Link href="/admin/properties/new" className="text-gold hover:underline">Add one →</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
