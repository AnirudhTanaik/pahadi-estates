import Image from 'next/image'
import Link from 'next/link'
import type { Property } from '@/types/property'
import { formatPrice } from '@/lib/utils/formatters'

interface PropertyCardProps {
  property: Property
  featured?: boolean
}

export function PropertyCard({ property, featured }: PropertyCardProps) {
  const photo = property.photos?.[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

  return (
    <Link
      href={`/properties/${property.id}`}
      className="reveal group relative block bg-[#161e1a] border border-[#2d5441]/40 overflow-hidden hover:border-gold/40 transition-all duration-300"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
        <Image
          src={photo}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {property.is_featured && (
            <span className="bg-gold text-[#0e0e0e] text-xs font-sans font-medium px-2 py-1">
              Featured
            </span>
          )}
          {property.status === 'sold' && (
            <span className="bg-red-700 text-white text-xs font-sans font-medium px-2 py-1">
              Sold
            </span>
          )}
          {property.status === 'pending' && (
            <span className="bg-[#2d5441] text-cream text-xs font-sans font-medium px-2 py-1">
              Under Offer
            </span>
          )}
        </div>

        {/* Outside HP badge */}
        {property.outside_hp_eligible && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-[#1e3a2f]/90 text-[#4ade80] text-xs font-sans border border-[#2d5441] px-2 py-1">
              ✓ Open to All Buyers
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <p className="text-mist text-xs font-sans tracking-wide uppercase mb-2 flex items-center gap-1">
          <span>📍</span> {property.location_name}, {property.district}
        </p>

        {/* Title */}
        <h3 className="font-serif text-lg text-cream mb-3 leading-snug group-hover:text-gold transition-colors">
          {property.title}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-3 text-xs text-mist font-sans mb-4">
          {property.area_bigha && (
            <span>{property.area_bigha} Bigha</span>
          )}
          {property.area_sqft && (
            <span>{property.area_sqft.toLocaleString()} sqft</span>
          )}
          <span className="text-[#2d5441]">|</span>
          <span>{property.property_type}</span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#2d5441]/40">
          <div className="font-serif text-xl text-gold">
            {property.price_label || formatPrice(property.price)}
          </div>
          <div className="inline-flex items-center justify-center bg-transparent border border-gold text-gold font-sans text-xs px-4 py-2 group-hover:bg-gold group-hover:text-[#0e0e0e] transition-colors duration-300">
            View Details
          </div>
        </div>
      </div>
    </Link>
  )
}
