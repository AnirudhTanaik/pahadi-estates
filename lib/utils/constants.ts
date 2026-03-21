export const BUSINESS_PHONE = '919418613789'

export function whatsappLink(message: string = "Hi, I'm interested in your properties in Himachal Pradesh."): string {
  return `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(message)}`
}

export const HP_DISTRICTS = [
  'Shimla',
  'Kullu',
  'Kangra',
  'Kinnaur',
  'Mandi',
  'Solan',
  'Sirmaur',
  'Hamirpur',
  'Una',
  'Bilaspur',
  'Chamba',
  'Lahaul & Spiti',
]

export const PROPERTY_TYPES = [
  'Residential Plot',
  'Commercial',
  'Holiday Estate',
  'Villa',
  'Apartment',
]

export const BUDGET_RANGES = [
  { label: 'Under ₹25 Lakh', value: '0-2500000' },
  { label: '₹25L – ₹50L', value: '2500000-5000000' },
  { label: '₹50L – ₹1 Cr', value: '5000000-10000000' },
  { label: '₹1 Cr – ₹2 Cr', value: '10000000-20000000' },
  { label: 'Above ₹2 Cr', value: '20000000-999999999' },
]
