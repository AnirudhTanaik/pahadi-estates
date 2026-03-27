'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { HP_DISTRICTS, PROPERTY_TYPES } from '@/lib/utils/constants'
import { SubmitButton } from './SubmitButton'
import type { Property } from '@/types/property'

interface PropertyFormProps {
  action: (formData: FormData) => Promise<void>
  defaultValues?: Partial<Property>
  submitLabel: string
}

export function PropertyForm({ action, defaultValues, submitLabel }: PropertyFormProps) {
  const router = useRouter()
  const [photos, setPhotos] = useState<string[]>(
    defaultValues?.photos?.length ? defaultValues.photos : ['']
  )

  function addPhoto() {
    setPhotos((p) => [...p, ''])
  }

  function updatePhoto(index: number, value: string) {
    setPhotos((p) => p.map((url, i) => (i === index ? value : url)))
  }

  function removePhoto(index: number) {
    setPhotos((p) => p.filter((_, i) => i !== index))
  }

  const v = defaultValues

  return (
    <form action={action} className="space-y-8">
      {/* Basic Info */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Input
              label="Title"
              name="title"
              required
              defaultValue={v?.title}
              placeholder="e.g. Panoramic Estate — Mashobra Ridge"
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Description"
              name="description"
              rows={5}
              defaultValue={v?.description}
              placeholder="Detailed property description..."
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-mist font-sans">District</label>
            <select
              name="district"
              required
              defaultValue={v?.district ?? ''}
              className="bg-[#0e0e0e] border border-[#2d5441] text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full"
            >
              <option value="" disabled>Select district</option>
              {HP_DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <Input
            label="Location Name"
            name="location_name"
            defaultValue={v?.location_name ?? ''}
            placeholder="e.g. Mashobra, Shimla"
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-mist font-sans">Property Type</label>
            <select
              name="property_type"
              required
              defaultValue={v?.property_type ?? ''}
              className="bg-[#0e0e0e] border border-[#2d5441] text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full"
            >
              <option value="" disabled>Select type</option>
              {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-mist font-sans">Status</label>
            <select
              name="status"
              required
              defaultValue={v?.status ?? 'active'}
              className="bg-[#0e0e0e] border border-[#2d5441] text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full"
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Price (₹)"
            name="price"
            type="number"
            required
            defaultValue={v?.price}
            placeholder="e.g. 8500000"
          />
        </div>
      </section>

      {/* Area & Location */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">Area & Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Area (Bigha)"
            name="area_bigha"
            type="number"
            step="0.01"
            defaultValue={v?.area_bigha ?? ''}
            placeholder="e.g. 2.5"
          />
          <Input
            label="Area (Sq.Ft)"
            name="area_sqft"
            type="number"
            defaultValue={v?.area_sqft ?? ''}
            placeholder="e.g. 27225"
          />
          <Input
            label="Latitude"
            name="latitude"
            type="number"
            step="any"
            defaultValue={v?.latitude ?? ''}
            placeholder="e.g. 31.1471"
          />
          <Input
            label="Longitude"
            name="longitude"
            type="number"
            step="any"
            defaultValue={v?.longitude ?? ''}
            placeholder="e.g. 77.1942"
          />
          <Input
            label="Road Access"
            name="road_access"
            defaultValue={v?.road_access ?? ''}
            placeholder="e.g. Motorable road to site"
          />
        </div>
      </section>

      {/* Utilities & Flags */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">Utilities & Flags</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { name: 'water', label: 'Water Available', defaultChecked: v?.water },
            { name: 'electricity', label: 'Electricity Available', defaultChecked: v?.electricity },
            { name: 'outside_hp_eligible', label: 'Open to Outside HP Buyers', defaultChecked: v?.outside_hp_eligible },
            { name: 'is_featured', label: 'Featured Listing', defaultChecked: v?.is_featured },
          ].map((field) => (
            <label key={field.name} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name={field.name}
                value="true"
                defaultChecked={field.defaultChecked ?? false}
                className="w-4 h-4 accent-gold"
              />
              <span className="font-sans text-sm text-mist group-hover:text-cream transition-colors">
                {field.label}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">Photos</h2>
        <div className="space-y-3">
          {photos.map((url, i) => (
            <div key={i} className="flex gap-3 items-center">
              <input
                type="url"
                name="photos"
                value={url}
                onChange={(e) => updatePhoto(i, e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="bg-[#0e0e0e] border border-[#2d5441] text-cream placeholder-mist px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 flex-1"
              />
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="text-red-500 hover:text-red-400 font-sans text-sm px-2"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addPhoto}
            className="font-sans text-sm text-gold hover:text-gold-light transition-colors"
          >
            + Add another photo URL
          </button>
        </div>
        <p className="font-sans text-xs text-mist mt-2">Enter public image URLs (Supabase Storage, Unsplash, etc.)</p>
      </section>

      <div className="flex gap-4 pt-2">
        <SubmitButton label={submitLabel} />
        <button
          type="button"
          onClick={() => router.back()}
          className="font-sans text-sm text-mist hover:text-cream transition-colors px-6 py-4"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
