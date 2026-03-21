import { createProperty } from '@/lib/actions/properties'
import { PropertyForm } from '../PropertyForm'
import Link from 'next/link'

export default function NewPropertyPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/admin/properties"
          className="font-sans text-xs text-mist hover:text-gold transition-colors mb-4 inline-block"
        >
          ← Back to Properties
        </Link>
        <h1 className="font-serif text-4xl text-cream mb-1">Add New Property</h1>
        <p className="font-sans text-mist text-sm">Fill in the details to create a new listing</p>
      </div>

      <PropertyForm action={createProperty} submitLabel="Create Property" />
    </div>
  )
}
