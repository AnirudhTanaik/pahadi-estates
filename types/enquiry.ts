export interface Enquiry {
  id: string
  created_at: string
  name: string
  phone: string
  city: string
  is_hp_resident: boolean
  message: string | null
  property_id: string | null
  property?: {
    title: string
  } | null
}
