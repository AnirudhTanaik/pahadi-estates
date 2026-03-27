'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProperty(formData: FormData) {
  const supabase = await createClient()

  const photos = formData.getAll('photos') as string[]

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    price: Number(formData.get('price')),
    district: formData.get('district') as string,
    location_name: formData.get('location_name') as string,
    property_type: formData.get('property_type') as string,
    area_bigha: formData.get('area_bigha') ? Number(formData.get('area_bigha')) : null,
    area_sqft: formData.get('area_sqft') ? Number(formData.get('area_sqft')) : null,
    latitude: formData.get('latitude') ? Number(formData.get('latitude')) : null,
    longitude: formData.get('longitude') ? Number(formData.get('longitude')) : null,
    outside_hp_eligible: formData.get('outside_hp_eligible') === 'true',
    is_featured: formData.get('is_featured') === 'true',
    status: formData.get('status') as string,
    photos,
    road_access: formData.get('road_access') as string,
    water: formData.get('water') === 'true',
    electricity: formData.get('electricity') === 'true',
  }

  const { error } = await supabase.from('properties').insert(data)
  if (error) {
    console.error(error)
    throw new Error(error.message)
  }

  revalidatePath('/properties')
  revalidatePath('/')
  redirect('/admin/properties')
}

export async function updateProperty(id: string, formData: FormData) {
  const supabase = await createClient()

  const photos = formData.getAll('photos') as string[]

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    price: Number(formData.get('price')),
    district: formData.get('district') as string,
    location_name: formData.get('location_name') as string,
    property_type: formData.get('property_type') as string,
    area_bigha: formData.get('area_bigha') ? Number(formData.get('area_bigha')) : null,
    area_sqft: formData.get('area_sqft') ? Number(formData.get('area_sqft')) : null,
    latitude: formData.get('latitude') ? Number(formData.get('latitude')) : null,
    longitude: formData.get('longitude') ? Number(formData.get('longitude')) : null,
    outside_hp_eligible: formData.get('outside_hp_eligible') === 'true',
    is_featured: formData.get('is_featured') === 'true',
    status: formData.get('status') as string,
    photos,
    road_access: formData.get('road_access') as string,
    water: formData.get('water') === 'true',
    electricity: formData.get('electricity') === 'true',
  }

  const { error } = await supabase.from('properties').update(data).eq('id', id)
  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/properties')
  revalidatePath(`/properties/${id}`)
  revalidatePath('/')
  redirect('/admin/properties')
}

export async function deleteProperty(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('properties').delete().eq('id', id)
  if (error) {
    return { error: error.message }
  }
  revalidatePath('/properties')
  revalidatePath('/admin/properties')
  revalidatePath('/')
}

export async function toggleFeatured(id: string, is_featured: boolean) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('properties')
    .update({ is_featured: !is_featured })
    .eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/admin/properties')
  revalidatePath('/')
}
