import { notFound } from 'next/navigation'
import { getPropertyById } from '@/lib/queries/properties'
import { updateProperty } from '@/lib/actions/properties'
import { PropertyForm } from '../PropertyForm'
import Link from 'next/link'

export default async function EditPropertyPage({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  const id = searchParams.id
  if (!id) notFound()

  const property = await getPropertyById(id)
  if (!property) notFound()

  // bind() creates a new server action with `id` pre-filled as the first argument.
  // Next.js serializes bound server actions safely across the server/client boundary.
  const updatePropertyWithId = updateProperty.bind(null, id)

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/admin/properties"
          className="font-sans text-xs text-mist hover:text-gold transition-colors mb-4 inline-block"
        >
          ← Back to Properties
        </Link>
        <h1 className="font-serif text-4xl text-cream mb-1">Edit Property</h1>
        <p className="font-sans text-sm text-mist truncate">{property.title}</p>
      </div>

      <PropertyForm
        action={updatePropertyWithId}
        defaultValues={property}
        submitLabel="Save Changes"
      />
    </div>
  )
}
