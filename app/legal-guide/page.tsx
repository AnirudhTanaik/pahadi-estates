import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import legalGuideData from '@/lib/legalGuideData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Guide for Buyers | Pahadi Estates — HP Property Law',
  description:
    'Complete legal guide for buying property in Himachal Pradesh. Section 118, stamp duty, property verification, NRI rules, HP RERA — everything explained simply.',
  keywords:
    'Section 118 HP, buy property Himachal Pradesh, HP stamp duty, NRI property HP, property verification Himachal, HP RERA',
}

const NAV_ITEMS = [
  { id: 'section-118', label: 'Section 118' },
  { id: 'who-can-buy', label: 'Who Can Buy' },
  { id: 'verification', label: 'Verification Checklist' },
  { id: 'stamp-duty', label: 'Stamp Duty' },
  { id: 'bonafide-himachali', label: 'Bonafide Certificate' },
  { id: 'land-conversion', label: 'Land Conversion' },
  { id: 'hp-rera', label: 'HP RERA' },
  { id: 'home-loan', label: 'Home Loan' },
  { id: 'nri-guide', label: 'NRI Guide' },
  { id: 'scams-red-flags', label: 'Red Flags' },
  { id: 'faq', label: 'FAQ' },
]

export default function LegalGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0e0e0e]">
        {/* Hero */}
        <div className="bg-[#080e0b] border-b border-[#1e3a2f] pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-gold" />
              <span className="text-gold font-sans text-xs tracking-widest uppercase">
                Buyer Resources
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
              Legal Guide for <span className="italic text-gold">HP Property Buyers</span>
            </h1>
            <p className="text-mist font-sans text-base md:text-lg leading-relaxed max-w-2xl">
              Himachal Pradesh mein property khareedna exciting hai — lekin thoda complex bhi.
              Yeh guide aapko Section 118 se lekar stamp duty tak, sab kuch simple language
              mein samjhaega.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gold text-[#0e0e0e] font-sans font-medium text-sm tracking-wide hover:bg-gold-light transition-colors"
              >
                Talk to an Expert
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center px-6 py-3 border border-[#2d5441] text-cream font-sans text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
              >
                Jump to FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky section nav */}
        <div className="sticky top-16 z-30 bg-[#080e0b]/95 backdrop-blur border-b border-[#1e3a2f] overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-0 min-w-max">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-4 text-xs font-sans text-mist hover:text-gold border-b-2 border-transparent hover:border-gold transition-all whitespace-nowrap tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
          {legalGuideData.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#080e0b] border-t border-[#1e3a2f] py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-cream mb-4">
              Still have questions?
            </h2>
            <p className="text-mist font-sans text-sm leading-relaxed mb-8">
              Our team has helped hundreds of non-HP and NRI buyers navigate Himachal
              property laws. Reach out — pehli consultation free hai.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-[#0e0e0e] font-sans font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Contact Pahadi Estates
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section Router
// ─────────────────────────────────────────────────────────────────────────────

function SectionRenderer({ section }: { section: (typeof legalGuideData)[number] }) {
  if (section.type === 'article') return <ArticleSection section={section} />
  if (section.type === 'table') return <TableSection section={section} />
  if (section.type === 'checklist') return <ChecklistSection section={section} />
  if (section.type === 'faq') return <FAQSection section={section} />
  return null
}

// ─────────────────────────────────────────────────────────────────────────────
// Article
// ─────────────────────────────────────────────────────────────────────────────

function ArticleSection({
  section,
}: {
  section: Extract<(typeof legalGuideData)[number], { type: 'article' }>
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <SectionTitle title={section.title} />
      <div className="space-y-5 mt-8">
        {section.content.map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p key={i} className="text-mist font-sans text-sm leading-relaxed">
                {block.text}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h3
                key={i}
                className="font-serif text-xl text-cream mt-8 mb-2"
              >
                {block.text}
              </h3>
            )
          }
          if (block.type === 'subheading') {
            return (
              <p key={i} className="text-gold font-sans text-sm font-medium">
                {block.text}
              </p>
            )
          }
          if (block.type === 'highlight') {
            return (
              <div
                key={i}
                className="border-l-2 border-gold bg-[#161e1a] px-5 py-4 text-cream font-sans text-sm leading-relaxed"
              >
                {block.text}
              </div>
            )
          }
          if (block.type === 'list' && block.items) {
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-mist font-sans text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          }
          if (block.type === 'cta') {
            return (
              <div
                key={i}
                className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[#2d5441] bg-[#080e0b] px-5 py-4"
              >
                <p className="text-cream font-sans text-sm flex-1">{block.text}</p>
                <Link
                  href="/contact"
                  className="flex-shrink-0 px-5 py-2 bg-gold text-[#0e0e0e] font-sans text-xs font-medium tracking-wide hover:bg-gold-light transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            )
          }
          return null
        })}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Table
// ─────────────────────────────────────────────────────────────────────────────

function TableSection({
  section,
}: {
  section: Extract<(typeof legalGuideData)[number], { type: 'table' }>
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <SectionTitle title={section.title} />
      <div className="mt-8 space-y-6">
        {section.content.map((block, i) => (
          <div key={i}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm font-sans">
                <thead>
                  <tr className="bg-[#1e3a2f]">
                    {block.columns.map((col) => (
                      <th
                        key={col}
                        className="text-left px-4 py-3 text-gold font-medium tracking-wide text-xs uppercase border border-[#2d5441]"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={ri % 2 === 0 ? 'bg-[#0e0e0e]' : 'bg-[#161e1a]'}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 border border-[#1e3a2f] leading-snug ${
                            ci === 0
                              ? 'text-cream font-medium'
                              : 'text-mist'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {block.note && (
              <p className="mt-3 text-mist font-sans text-xs leading-relaxed border-l border-[#2d5441] pl-3">
                {block.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Checklist
// ─────────────────────────────────────────────────────────────────────────────

function ChecklistSection({
  section,
}: {
  section: Extract<(typeof legalGuideData)[number], { type: 'checklist' }>
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <SectionTitle title={section.title} />
      <div className="mt-8 space-y-5">
        {section.content.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 border border-[#1e3a2f] bg-[#161e1a] p-5 hover:border-[#2d5441] transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e3a2f] border border-gold flex items-center justify-center">
              <span className="text-gold font-serif text-sm font-bold">{item.step}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-serif text-cream text-lg mb-1">{item.title}</h4>
              <p className="text-mist font-sans text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              {item.tip && (
                <div className="flex gap-2 text-xs font-sans text-gold">
                  <span className="flex-shrink-0">Tip:</span>
                  <span className="text-mist">{item.tip}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border border-[#2d5441] bg-[#080e0b] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-cream font-sans text-sm flex-1">
          Property verification khud karna mushkil lagta hai? Pahadi Estates yeh sab aapke
          liye karta hai — professionally aur transparently.
        </p>
        <Link
          href="/contact"
          className="flex-shrink-0 px-5 py-2 bg-gold text-[#0e0e0e] font-sans text-xs font-medium tracking-wide hover:bg-gold-light transition-colors"
        >
          Get Help
        </Link>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

function FAQSection({
  section,
}: {
  section: Extract<(typeof legalGuideData)[number], { type: 'faq' }>
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <SectionTitle title={section.title} />
      <div className="mt-8 divide-y divide-[#1e3a2f]">
        {section.content.map((item, i) => (
          <div key={i} className="py-6">
            <h3 className="font-serif text-cream text-lg mb-3 leading-snug">
              {item.question}
            </h3>
            <p className="text-mist font-sans text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared
// ─────────────────────────────────────────────────────────────────────────────

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px bg-gold flex-shrink-0" />
      <h2 className="font-serif text-2xl md:text-3xl text-cream leading-tight">{title}</h2>
    </div>
  )
}
