import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'green' | 'red' | 'mist' | 'pine'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-1 text-xs font-sans font-medium tracking-wide',
        {
          'bg-gold/20 text-gold border border-gold/40': variant === 'gold',
          'bg-[#1e3a2f] text-[#4ade80] border border-[#2d5441]': variant === 'green',
          'bg-red-900/30 text-red-400 border border-red-800/40': variant === 'red',
          'bg-[#161e1a] text-mist border border-[#2d5441]': variant === 'mist',
          'bg-[#1e3a2f] text-cream border border-[#2d5441]': variant === 'pine',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
