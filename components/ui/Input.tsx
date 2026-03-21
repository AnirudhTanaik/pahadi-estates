import { cn } from '@/lib/utils/cn'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm text-mist font-sans">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'bg-[#0e0e0e] border border-[#2d5441] text-cream placeholder-mist px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full',
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

Input.displayName = 'Input'
export { Input }
