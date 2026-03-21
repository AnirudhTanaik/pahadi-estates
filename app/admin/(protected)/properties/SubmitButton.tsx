'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/Button'

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? 'Saving...' : label}
    </Button>
  )
}
