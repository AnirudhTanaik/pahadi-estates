'use client'

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
  const [photos, setPhotos] = useState<string[]>(
    defaultValues?.photos?.length ? defaultValues.photos : ['']
  )

  function addPhoto() {
    setPhotos((p) => [...p, ''])
  }

  function updatePhoto(index: number, value: string) {
    setPhotos((p) => p.map((url, i) => (i === index ? value : url)))
  }

  const v = defaultValues

  return (
    <form action={action} className="space-y-8">

      {/* Basic Info */}
      <section>
        <h2 className="font-serif text-2xl text-cream mb-5 pb-3 border-b border-[#2d5441]/40">
          Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Input
              label="Title"
              name="title"
              required
              defaultValue={v?.title}
            />
          </div>

          <div className="md:col-span-2">
            <Textarea
              label="Description"
              name="description"
              rows={5}
              defaultValue={v?.description}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-mist">District</label>
            <select name="district" required defaultValue={v?.district ?? ''}>
              <option value="" disabled>Select district</option>
              {HP_DISTRICTS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <Input
            label="Location Name"
            name="location_name"
            defaultValue={v?.location_name ?? ''}
          />

          <div>
            <label>Property Type</label>
            <select name="property_type" required defaultValue={v?.property_type ?? ''}>
              <option value="" disabled>Select type</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Status</label>
            <select name="status" defaultValue={v?.status ?? 'active'}>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <h2>Pricing</h2>
        <Input
          label="Price"
          name="price"
          type="number"
          defaultValue={v?.price}
        />
      </section>

      {/* Area */}
      <section>
        <h2>Area & Location</h2>

        <Input name="area_bigha" defaultValue={v?.area_bigha ?? ''} />
        <Input name="area_sqft" defaultValue={v?.area_sqft ?? ''} />

        {/* IMPORTANT FIX: no v?. for missing fields */}
        <Input name="latitude" defaultValue="" />
        <Input name="longitude" defaultValue="" />
      </section>

      {/* Utilities */}
      <section>
        <h2>Utilities</h2>

        {[
          {
            name: 'water_available',
            label: 'Water Available',
            defaultChecked: v?.water_available
          },
          {
            name: 'electricity_available',
            label: 'Electricity Available',
            defaultChecked: v?.electricity_available
          },
          {
            name: 'outside_hp_eligible',
            label: 'Outside HP Allowed',
            defaultChecked: v?.outside_hp_eligible
          },
          {
            name: 'is_featured',
            label: 'Featured',
            defaultChecked: v?.is_featured
          }
        ].map((f) => (
          <label key={f.name}>
            <input
              type="checkbox"
              name={f.name}
              defaultChecked={f.defaultChecked ?? false}
            />
            {f.label}
          </label>
        ))}
      </section>

      {/* Photos */}
      <section>
        <h2>Photos</h2>

        {photos.map((url, i) => (
          <input
            key={i}
            name="photos"
            value={url}
            onChange={(e) => updatePhoto(i, e.target.value)}
          />
        ))}

        <button type="button" onClick={addPhoto}>
          Add Photo
        </button>
      </section>

      <SubmitButton label={submitLabel} />

    </form>
  )
}