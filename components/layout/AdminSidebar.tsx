'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from '@/lib/actions/auth'
import { cn } from '@/lib/utils/cn'

const NAV_ITEMS = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/admin/properties', label: 'Properties', icon: '🏔️' },
  { href: '/admin/enquiries', label: 'Enquiries', icon: '📬' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-[#0a110d] border-r border-[#1e3a2f] flex flex-col">
      <div className="p-6 border-b border-[#1e3a2f]">
        <Link href="/">
          <span className="font-serif text-xl text-cream">Pahadi</span>
          <span className="font-serif text-xl text-gold"> Admin</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-4 py-3 text-sm font-sans transition-colors duration-200',
              pathname.startsWith(item.href)
                ? 'bg-[#1e3a2f] text-gold'
                : 'text-mist hover:bg-[#161e1a] hover:text-cream'
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-[#1e3a2f]">
        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-sans text-mist hover:text-red-400 transition-colors duration-200"
          >
            <span>🚪</span>
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  )
}
