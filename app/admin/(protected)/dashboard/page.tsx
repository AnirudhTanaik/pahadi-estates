import { getDashboardStats } from '@/lib/queries/enquiries'
import { getAllProperties } from '@/lib/queries/properties'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils/formatters'
import Link from 'next/link'

export default async function DashboardPage() {
  const [stats, recentProperties] = await Promise.all([
    getDashboardStats(),
    getAllProperties(),
  ])

  const recent = recentProperties.slice(0, 5)

  const statCards = [
    { label: 'Total Properties', value: stats.totalProperties, icon: '🏔️', variant: 'mist' as const },
    { label: 'Active Listings', value: stats.activeProperties, icon: '✅', variant: 'green' as const },
    { label: 'Sold', value: stats.soldProperties, icon: '🤝', variant: 'gold' as const },
    { label: 'Total Enquiries', value: stats.totalEnquiries, icon: '📬', variant: 'mist' as const },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-cream mb-1">Dashboard</h1>
        <p className="font-sans text-mist text-sm">Overview of your property listings and enquiries</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {statCards.map((card) => (
          <div key={card.label} className="bg-[#161e1a] border border-[#2d5441]/40 p-5">
            <div className="text-2xl mb-3">{card.icon}</div>
            <div className="font-serif text-3xl text-cream mb-1">{card.value}</div>
            <div className="font-sans text-xs text-mist tracking-wide">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-10">
        <Link
          href="/admin/properties/new"
          className="inline-flex items-center gap-2 bg-gold text-[#0e0e0e] font-sans font-medium text-sm px-6 py-3 hover:bg-gold-light transition-colors duration-200"
        >
          <span>+</span> Add New Property
        </Link>
        <Link
          href="/admin/enquiries"
          className="inline-flex items-center gap-2 border border-[#2d5441] text-mist font-sans text-sm px-6 py-3 hover:border-gold hover:text-gold transition-colors duration-200"
        >
          View Enquiries
        </Link>
      </div>

      {/* Recent Properties */}
      <div className="bg-[#161e1a] border border-[#2d5441]/40">
        <div className="flex items-center justify-between p-5 border-b border-[#2d5441]/40">
          <h2 className="font-serif text-xl text-cream">Recent Properties</h2>
          <Link
            href="/admin/properties"
            className="font-sans text-xs text-gold hover:text-gold-light transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-[#2d5441]/20">
          {recent.map((p) => (
            <div key={p.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#1a2420] transition-colors">
              <div className="flex-1 min-w-0">
                <p className="font-sans text-sm text-cream truncate">{p.title}</p>
                <p className="font-sans text-xs text-mist mt-0.5">{p.location_name}, {p.district}</p>
              </div>
              <div className="flex items-center gap-4 ml-4 shrink-0">
                <span className="font-sans text-sm text-gold">{p.price_label || formatPrice(p.price)}</span>
                <Badge variant={p.status === 'active' ? 'green' : p.status === 'sold' ? 'red' : 'mist'}>
                  {p.status}
                </Badge>
                <Link
                  href={`/admin/properties/edit?id=${p.id}`}
                  className="font-sans text-xs text-mist hover:text-gold transition-colors"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
          {recent.length === 0 && (
            <p className="px-5 py-8 text-center font-sans text-sm text-mist">No properties yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
