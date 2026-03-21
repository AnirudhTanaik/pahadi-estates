import { getEnquiries } from '@/lib/queries/enquiries'
import { formatDate } from '@/lib/utils/formatters'

function whatsappLink(phone: string, name: string, propertyTitle: string | null): string {
  // Strip everything except digits, then remove leading country code if present
  const digits = phone.replace(/\D/g, '')
  // If already has 91 prefix and 12 digits total, use as-is; otherwise prepend 91
  const normalized = digits.startsWith('91') && digits.length === 12 ? digits : `91${digits}`

  const property = propertyTitle ?? 'your enquiry'
  const text = `Hi ${name}, we received your enquiry for ${property}. Let's connect.`

  return `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`
}

export default async function EnquiriesPage() {
  const enquiries = await getEnquiries()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-cream mb-1">Enquiries</h1>
        <p className="font-sans text-mist text-sm">
          {enquiries.length} {enquiries.length === 1 ? 'enquiry' : 'enquiries'} · sorted by latest
        </p>
      </div>

      <div className="bg-[#161e1a] border border-[#2d5441]/40 overflow-hidden">

        {/* Table header */}
        <div className="grid grid-cols-[1.5fr_130px_120px_1fr_120px_140px] gap-4 px-5 py-3 border-b border-[#2d5441]/40 bg-[#0e0e0e]">
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Name</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Phone</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">City</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Property</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Date</span>
          <span className="font-sans text-xs text-mist uppercase tracking-widest">Action</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#2d5441]/20">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="grid grid-cols-[1.5fr_130px_120px_1fr_120px_140px] gap-4 items-start px-5 py-4 hover:bg-[#1a2420] transition-colors"
            >
              {/* Name + optional message */}
              <div className="min-w-0">
                <p className="font-sans text-sm text-cream font-medium truncate">{enquiry.name}</p>
                {enquiry.message && (
                  <p className="font-sans text-xs text-mist mt-1 line-clamp-2 italic">
                    &ldquo;{enquiry.message}&rdquo;
                  </p>
                )}
              </div>

              {/* Phone */}
              <span className="font-sans text-sm text-mist">{enquiry.phone}</span>

              {/* City */}
              <span className="font-sans text-sm text-mist truncate">{enquiry.city}</span>

              {/* Property title */}
              <div className="min-w-0">
                {enquiry.property ? (
                  <span className="font-sans text-sm text-mist truncate block">{enquiry.property.title}</span>
                ) : (
                  <span className="font-sans text-sm text-mist/40 italic">General</span>
                )}
              </div>

              {/* Date */}
              <span className="font-sans text-xs text-mist">{formatDate(enquiry.created_at)}</span>

              {/* WhatsApp */}
              <a
                href={whatsappLink(enquiry.phone, enquiry.name, enquiry.property?.title ?? null)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#25D366] border border-[#25D366]/30 px-3 py-1.5 hover:bg-[#25D366]/10 transition-colors duration-200 w-fit"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          ))}

          {enquiries.length === 0 && (
            <p className="px-5 py-12 text-center font-sans text-sm text-mist">
              No enquiries yet.
            </p>
          )}
        </div>

      </div>
    </div>
  )
}
