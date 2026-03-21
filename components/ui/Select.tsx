import { cn } from '@/lib/utils/cn'
import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { label: string; value: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm text-mist font-sans">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'bg-[#0e0e0e] border border-[#2d5441] text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200 w-full appearance-none cursor-pointer',
            error && 'border-red-500',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-400 text-xs font-sans">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
export { Select }
