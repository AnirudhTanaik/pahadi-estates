import { createClient } from '@/lib/supabase/server'
import type { Property } from '@/types/property'

export interface InsertPropertyInput {
  title: string
  description: string
  property_type: string
  status: 'active' | 'sold' | 'pending'
  price: number
  district: string
  location_name: string
  area_bigha?: number | null
  area_sqft?: number | null
  is_featured?: boolean
  outside_hp_eligible?: boolean
  photos?: string[]
  water_available?: boolean
  electricity_available?: boolean
}

export async function insertProperty(input: InsertPropertyInput): Promise<{ id: string } | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('properties')
    .insert({
      title: input.title,
      description: input.description,
      property_type: input.property_type,
      status: input.status,
      price: input.price,
      district: input.district,
      location_name: input.location_name,
      area_bigha: input.area_bigha ?? null,
      area_sqft: input.area_sqft ?? null,
      is_featured: input.is_featured ?? false,
      outside_hp_eligible: input.outside_hp_eligible ?? false,
      photos: input.photos ?? [],
      water_available: input.water_available ?? false,
      electricity_available: input.electricity_available ?? false,
    })
    .select('id')
    .single()

  if (error) {
    console.error('Error inserting property:', error)
    return null
  }
  return data
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('is_featured', true)
    .eq('status', 'active')
    .limit(6)

  if (error) {
    console.error('Error fetching featured properties:', error)
    return []
  }
  return data || []
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching property:', error)
    return null
  }
  return data
}

export async function getRelatedProperties(district: string, excludeId: string): Promise<Property[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('district', district)
    .eq('status', 'active')
    .neq('id', excludeId)
    .limit(3)

  if (error) {
    console.error('Error fetching related properties:', error)
    return []
  }
  return data || []
}

export async function getAllProperties(): Promise<Property[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching all properties:', error)
    return []
  }
  return data || []
}
export async function getProperties(filters?: {
  district?: string
  property_type?: string
  minPrice?: number
  maxPrice?: number
  outside_hp?: string
}): Promise<Property[]> {
  const supabase = await createClient()

  let query = supabase
    .from("properties")
    .select("*")
    .eq("status", "active")

  // District
  if (filters?.district) {
    query = query.eq("district", filters.district)
  }

  // Property Type
  if (filters?.property_type) {
    query = query.eq("property_type", filters.property_type)
  }

  // Budget Range — use !== undefined so minPrice: 0 is not skipped
  if (filters?.minPrice !== undefined && filters?.maxPrice !== undefined) {
    query = query
      .gte("price", filters.minPrice)
      .lte("price", filters.maxPrice)
  }

  // Outside HP eligibility
  if (filters?.outside_hp === "yes") {
    query = query.eq("outside_hp_eligible", true)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching properties:", error)
    return []
  }

  return data || []
}