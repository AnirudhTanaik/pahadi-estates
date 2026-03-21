import { createClient } from '@/lib/supabase/server'

export interface Enquiry {
  id: string
  created_at: string
  name: string
  phone: string
  city: string
  is_hp_resident: boolean
  message: string | null
  property_id: string | null
  property: { title: string } | null
}

export async function getEnquiries(): Promise<Enquiry[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('enquiries')
    .select('id, created_at, name, phone, city, is_hp_resident, message, property_id, property:properties(title)')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching enquiries:', error)
    return []
  }
  return (data as unknown as Enquiry[]) || []
}

export async function getDashboardStats() {
  const supabase = await createClient()
  const [
    { count: totalProperties },
    { count: activeProperties },
    { count: soldProperties },
    { count: totalEnquiries },
  ] = await Promise.all([
    supabase.from('properties').select('*', { count: 'exact', head: true }),
    supabase.from('properties').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('properties').select('*', { count: 'exact', head: true }).eq('status', 'sold'),
    supabase.from('enquiries').select('*', { count: 'exact', head: true }),
  ])

  return {
    totalProperties: totalProperties || 0,
    activeProperties: activeProperties || 0,
    soldProperties: soldProperties || 0,
    totalEnquiries: totalEnquiries || 0,
  }
}
