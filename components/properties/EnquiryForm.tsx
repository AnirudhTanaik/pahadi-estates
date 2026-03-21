'use client'

import { useRef, useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { submitEnquiry } from '@/lib/actions/enquiries'

interface EnquiryFormProps {
  propertyTitle: string
  propertyId?: string
}

export function EnquiryForm({ propertyTitle, propertyId }: EnquiryFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const result = await submitEnquiry(formData)

    if (result.success) {
      setSuccess(true)
      formRef.current?.reset()
    } else {
      setError(result.error ?? 'Something went wrong.')
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div id="enquiry-form" className="bg-[#161e1a] border border-gold p-8 text-center animate-fade-up">
        <div className="text-gold text-4xl mb-4">✓</div>
        <h4 className="font-serif text-2xl text-cream mb-2">Enquiry Sent</h4>
        <p className="font-sans text-mist text-sm">
          Our property experts will contact you shortly regarding <span className="text-gold">{propertyTitle}</span>.
        </p>
      </div>
    )
  }

  return (
    <div id="enquiry-form" className="bg-[#161e1a] border border-[#2d5441]/40 p-6 md:p-8">
      <h3 className="font-serif text-2xl text-cream mb-6">Enquire About This Property</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Only render the hidden field when we have a valid propertyId */}
        {propertyId && (
          <input type="hidden" name="property_id" value={propertyId} />
        )}
        <Input label="Full Name" name="name" placeholder="Enter your name" required />
        <Input label="Phone Number" name="phone" type="tel" placeholder="Enter your phone number" required />
        <Input label="City" name="city" placeholder="Your city" required />
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="is_hp_resident"
            name="is_hp_resident"
            value="true"
            className="w-4 h-4 accent-gold"
          />
          <label htmlFor="is_hp_resident" className="font-sans text-sm text-mist">
            I am a Himachal Pradesh resident
          </label>
        </div>
        <Textarea
          label="Message"
          name="message"
          placeholder={`I am interested in learning more about ${propertyTitle}.`}
          rows={4}
        />
        {error && (
          <p className="font-sans text-sm text-red-400">{error}</p>
        )}
        <Button type="submit" disabled={loading} className="w-full mt-4">
          {loading ? 'Sending...' : 'Request Details'}
        </Button>
      </form>
      <p className="font-sans text-xs text-mist mt-6 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </div>
  )
}
