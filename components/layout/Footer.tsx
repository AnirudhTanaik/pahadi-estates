import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#080e0b] border-t border-[#1e3a2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif text-2xl mb-4">
              <span className="text-cream">Pahadi</span>
              <span className="text-gold"> Estates</span>
            </div>
            <p className="text-mist text-sm font-sans leading-relaxed mb-6">
              Premium property brokerage serving Himachal Pradesh since 2005.
              Trusted by 340+ families to find their piece of the Himalayas.
            </p>
            <p className="text-mist text-xs font-sans">
              RERA Reg. No. HP-RERA-2021-XXXX
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Properties</h4>
            <ul className="space-y-2">
              {[
                { href: '/properties?district=Shimla', label: 'Shimla Properties' },
                { href: '/properties?district=Kullu', label: 'Kullu Properties' },
                { href: '/properties?district=Kangra', label: 'Kangra Properties' },
                { href: '/properties?district=Kinnaur', label: 'Kinnaur Properties' },
                { href: '/properties?property_type=Residential+Plot', label: 'Residential Plots' },
                { href: '/properties?property_type=Commercial', label: 'Commercial' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist text-sm font-sans hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              {[
                { href: '/legal-guide', label: 'Legal Guide for Buyers' },
                { href: '/legal-guide#stamp-duty', label: 'Stamp Duty Rates' },
                { href: '/legal-guide#faq', label: 'Buyer FAQ' },
                { href: '/legal-guide#outside-hp', label: 'Outside HP Buyers' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist text-sm font-sans hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist text-sm font-sans hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-mist font-sans">
              <p>📍 The Mall Road, Shimla, HP 171001</p>
              <p>📞 +91 98000 00000</p>
              <p>✉ hello@pahadestates.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1e3a2f] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mist text-xs font-sans">
            © {new Date().getFullYear()} Pahadi Estates. All rights reserved.
          </p>
          <p className="text-mist text-xs font-sans">
            Properties in Himachal Pradesh are subject to HP Tenancy & Land Reforms Act, 1972.
          </p>
        </div>
      </div>
    </footer>
  )
}
