import { createClient } from '@/lib/supabase/server'
import type { Property, PropertyFilters } from '@/types/property'

export async function getProperties(filters?: PropertyFilters): Promise<Property[]> {
  const supabase = await createClient()
  let query = supabase
    .from('properties')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (filters?.district) {
    query = query.eq('district', filters.district)
  }
  if (filters?.property_type) {
    query = query.eq('property_type', filters.property_type)
  }
  if (filters?.outside_hp === 'yes') {
    query = query.eq('outside_hp_eligible', true)
  }
  if (filters?.budget) {
    const [min, max] = filters.budget.split('-').map(Number)
    query = query.gte('price', min).lte('price', max)
  }

  const { data, error } = await query
  if (error) {
    console.error('Error fetching properties:', error)
    return []
  }
  return data || []
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
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching all properties:', error)
    return []
  }
  return data || []
}
