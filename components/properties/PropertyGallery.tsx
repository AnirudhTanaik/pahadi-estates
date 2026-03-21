import Image from 'next/image'

interface PropertyGalleryProps {
  photos: string[]
  title: string
}

export function PropertyGallery({ photos, title }: PropertyGalleryProps) {
  if (!photos || photos.length === 0) {
    return (
      <div className="w-full h-[50vh] bg-[#161e1a] flex items-center justify-center border border-[#2d5441]">
        <span className="text-mist font-sans">No Images Available</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-[60vh] max-h-[600px] mb-12">
      {/* Main Feature Image */}
      <div className="md:col-span-3 h-full relative group overflow-hidden border border-[#2d5441]/40">
        <Image
          src={photos[0]}
          alt={`${title} - Main View`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold m-3 pointer-events-none" />
      </div>

      {/* Side Thumbnail Images */}
      <div className="hidden md:flex flex-col gap-4 h-full">
        <div className="flex-1 relative group overflow-hidden border border-[#2d5441]/40">
          <Image
            src={photos[1] || photos[0]}
            alt={`${title} - View 2`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 relative group overflow-hidden border border-[#2d5441]/40">
          <Image
            src={photos[2] || photos[0]}
            alt={`${title} - View 3`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {photos.length > 3 && (
            <div className="absolute inset-0 bg-[#0e0e0e]/70 flex items-center justify-center cursor-pointer hover:bg-[#0e0e0e]/60 transition-colors">
              <span className="text-cream font-serif text-2xl">+{photos.length - 3}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
