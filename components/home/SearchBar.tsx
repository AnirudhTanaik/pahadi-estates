'use client'

import { useState } from 'react'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'

export function SearchBar() {
  const [district, setDistrict] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for search routing can be added here
    console.log('Searching for:', { district, propertyType, budget })
  }

  return (
    <section className="reveal relative -mt-16 z-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#161e1a] border border-[#2d5441] p-6 md:p-8 shadow-2xl">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Select
            label="Location"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            options={[
              { label: 'All Districts', value: '' },
              { label: 'Shimla', value: 'shimla' },
              { label: 'Kullu', value: 'kullu' },
              { label: 'Kangra', value: 'kangra' },
              { label: 'Kinnaur', value: 'kinnaur' },
            ]}
          />
          <Select
            label="Property Type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            options={[
              { label: 'All Types', value: '' },
              { label: 'Residential Plot', value: 'residential' },
              { label: 'Commercial', value: 'commercial' },
              { label: 'Holiday Home', value: 'holiday' },
            ]}
          />
          <Select
            label="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            options={[
              { label: 'Any Budget', value: '' },
              { label: 'Under 50 Lakhs', value: 'under_50l' },
              { label: '50L - 1 Cr', value: '50l_1cr' },
              { label: '1 Cr - 3 Cr', value: '1cr_3cr' },
              { label: 'Above 3 Cr', value: 'above_3cr' },
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
