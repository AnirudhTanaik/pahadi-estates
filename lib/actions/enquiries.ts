'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  city: z.string().min(2, 'City is required'),
  is_hp_resident: z.boolean(),
  property_type: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
  // Accept a valid UUID or omit the field entirely — never pass null or empty string
  property_id: z.string().uuid().optional(),
})

export async function submitEnquiry(formData: FormData) {
  const rawPropertyId = formData.get('property_id')

  const raw = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    city: formData.get('city') as string,
    is_hp_resident: formData.get('is_hp_resident') === 'true',
    property_type: formData.get('property_type')?.toString() || undefined,
    budget: formData.get('budget')?.toString() || undefined,
    // Empty string from textarea → undefined (field is optional)
    message: formData.get('message')?.toString() || undefined,
    // Only include property_id if it looks like a non-empty value; validation will reject non-UUIDs
    property_id: rawPropertyId && rawPropertyId !== 'undefined' && rawPropertyId !== ''
      ? rawPropertyId.toString()
      : undefined,
  }

  const result = enquirySchema.safeParse(raw)
  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? 'Invalid form data',
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.from('enquiries').insert(result.data)

  if (error) {
    console.error('Error saving enquiry:', error)
    return { success: false, error: 'Failed to send enquiry. Please try again.' }
  }

  return { success: true }
}
