import { cn } from '@/lib/utils/cn'
import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm text-mist font-sans">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'bg-[#0e0e0e] border border-[#2d5441] text-cream placeholder-mist px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full resize-none',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-red-400 text-xs font-sans">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export { Textarea }
