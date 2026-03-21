import { cn } from '@/lib/utils/cn'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-[#2d5441] border-t-gold',
        {
          'w-4 h-4': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-10 h-10': size === 'lg',
        },
        className
      )}
    />
  )
}
