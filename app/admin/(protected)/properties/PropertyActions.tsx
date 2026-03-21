'use client'

import { useTransition } from 'react'
import { deleteProperty, toggleFeatured } from '@/lib/actions/properties'
import type { Property } from '@/types/property'

export function PropertyActions({ property }: { property: Property }) {
  const [pending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm(`Delete "${property.title}"? This cannot be undone.`)) return
    startTransition(() => {
      deleteProperty(property.id)
    })
  }

  function handleToggleFeatured() {
    startTransition(() => {
      toggleFeatured(property.id, property.is_featured)
    })
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleToggleFeatured}
        disabled={pending}
        title={property.is_featured ? 'Remove from featured' : 'Mark as featured'}
        className={`font-sans text-xs transition-colors disabled:opacity-40 ${property.is_featured ? 'text-gold hover:text-mist' : 'text-mist hover:text-gold'
          }`}
      >
        {property.is_featured ? '★ Featured' : '☆ Feature'}
      </button>
      <a
        href={`/admin/properties/edit?id=${property.id}`}
        className="font-sans text-xs text-mist hover:text-cream transition-colors"
      >
        Edit
      </a>
      <button
        onClick={handleDelete}
        disabled={pending}
        className="font-sans text-xs text-red-500 hover:text-red-400 transition-colors disabled:opacity-40"
      >
        Delete
      </button>
    </div>
  )
}
