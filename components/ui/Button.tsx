import { cn } from '@/lib/utils/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gold text-[#0e0e0e] hover:bg-gold-light': variant === 'primary',
            'border border-gold text-gold hover:bg-gold hover:text-[#0e0e0e]': variant === 'ghost',
            'border border-mist text-mist hover:border-cream hover:text-cream': variant === 'outline',
            'bg-red-700 text-white hover:bg-red-600': variant === 'danger',
          },
          {
            'text-xs px-4 py-2': size === 'sm',
            'text-sm px-6 py-3': size === 'md',
            'text-base px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export { Button }
