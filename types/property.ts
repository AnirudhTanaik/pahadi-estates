export type PropertyStatus = 'active' | 'sold' | 'pending'
export type PropertyType = 'Residential Plot' | 'Commercial' | 'Holiday Estate' | 'Agricultural Land' | 'Villa' | 'Apartment'

export interface Property {
  id: string
  created_at: string
  title: string
  description: string
  price: number
  price_label: string
  district: string
  location_name: string
  property_type: string
  area_bigha: number | null
  area_sqft: number | null
  latitude: number | null
  longitude: number | null
  outside_hp_eligible: boolean
  is_featured: boolean
  status: PropertyStatus
  photos: string[]
  road_access: string | null
  water: boolean
  electricity: boolean
}

export interface PropertyFilters {
  district?: string
  property_type?: string
  budget?: string
  outside_hp?: string
}
