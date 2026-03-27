'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Property } from '@/types/property'
import { formatPrice } from '@/lib/utils/formatters'

interface PropertyCardProps {
  property: Property
  featured?: boolean
}

function ImageGalleryModal({ photos, onClose }: { photos: string[]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#161e1a] border border-[#2d5441]/40 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-[#0e0e0e]/80 text-cream hover:text-gold hover:bg-[#0e0e0e] transition-colors border border-[#2d5441]/40"
          aria-label="Close gallery"
        >
          ✕
        </button>

        <p className="text-mist text-xs font-sans uppercase tracking-wide mb-4">
          All Photos ({photos.length})
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PropertyCard({ property, featured }: PropertyCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false)

  const photos = property.photos && property.photos.length > 0 ? property.photos : []
  const photo = photos.length > 0
    ? photos[0]
    : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  const extraCount = photos.length > 1 ? photos.length - 1 : 0

  return (
    <>
      {galleryOpen && photos.length > 0 && (
        <ImageGalleryModal photos={photos} onClose={() => setGalleryOpen(false)} />
      )}

      <Link
        href={`/properties/${property.id}`}
        className="reveal group relative block bg-[#161e1a] border border-[#2d5441]/40 overflow-hidden hover:border-gold/40 transition-all duration-300"
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
          <img
            src={photo}
            alt={property.title}
            className="w-full h-full object-cover"
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

          {/* +N overlay */}
          {extraCount > 0 && (
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setGalleryOpen(true)
              }}
              className="absolute bottom-3 right-3 bg-[#0e0e0e]/75 hover:bg-[#0e0e0e] text-cream text-xs font-sans px-3 py-1.5 border border-[#2d5441]/60 hover:border-gold/60 transition-colors"
            >
              +{extraCount} photos
            </button>
          )}

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
              {formatPrice(property.price)}
            </div>
            <div className="inline-flex items-center justify-center bg-transparent border border-gold text-gold font-sans text-xs px-4 py-2 group-hover:bg-gold group-hover:text-[#0e0e0e] transition-colors duration-300">
              View Details
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
