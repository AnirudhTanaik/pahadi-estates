'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { HP_DISTRICTS, PROPERTY_TYPES, BUDGET_RANGES } from '@/lib/utils/constants'

export function SearchBar() {
  const router = useRouter()

  const [district, setDistrict] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (district) params.set('district', district)
    if (propertyType) params.set('property_type', propertyType)
    if (budget) params.set('budget', budget)
    router.push(`/properties${params.size ? `?${params.toString()}` : ''}`)
  }

  return (
    <section className="reveal relative mt-6 md:-mt-16 z-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#161e1a] border border-[#2d5441] p-6 md:p-8 shadow-2xl">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Select
            name="district"
            label="Location"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            options={[
              { label: 'All Districts', value: '' },
              ...HP_DISTRICTS.map((d) => ({ label: d, value: d })),
            ]}
          />
          <Select
            name="property_type"
            label="Property Type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            options={[
              { label: 'All Types', value: '' },
              ...PROPERTY_TYPES.map((t) => ({ label: t, value: t })),
            ]}
          />
          <Select
            name="budget"
            label="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            options={[
              { label: 'Any Budget', value: '' },
              ...BUDGET_RANGES.map((b) => ({ label: b.label, value: b.value })),
            ]}
          />
          <Button type="submit" size="lg" className="h-[46px] w-full">
            Search Properties
          </Button>
        </form>
      </div>
    </section>
  )
}
