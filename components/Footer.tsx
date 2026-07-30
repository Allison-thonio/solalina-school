import { CONTACT, FOOTER } from '@/app/data'

interface FooterProps {
  onEnrollClick: () => void
}

export function Footer({ onEnrollClick }: FooterProps) {
  return (
    <footer className="bg-[#080808] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Closing CTA */}
        <div className="mb-16 text-center">
          <h3
            className="font-serif text-3xl sm:text-4xl font-500 mb-8"
            style={{ color: 'var(--cream)' }}
          >
            {FOOTER.closingCTA}
          </h3>
          <button
            onClick={onEnrollClick}
            className="px-8 py-3 text-sm font-600 tracking-tight transition-all duration-300"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--ink)',
              fontSize: '0.85rem',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Enroll Now
          </button>
        </div>

        {/* Contact Info */}
        <div
          className="border-t border-[rgba(201,168,76,0.4)] pt-12 mb-12"
          style={{ borderTopColor: 'var(--gold-40)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <p
                className="text-xs tracking-wider uppercase mb-2"
                style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}
              >
                Phone
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="transition-colors duration-200"
                style={{ color: 'var(--cream-70)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cream-70)'
                }}
              >
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p
                className="text-xs tracking-wider uppercase mb-2"
                style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}
              >
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors duration-200"
                style={{ color: 'var(--cream-70)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cream-70)'
                }}
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p
                className="text-xs tracking-wider uppercase mb-2"
                style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}
              >
                Address
              </p>
              <p style={{ color: 'var(--cream-70)' }}>{CONTACT.address}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs" style={{ color: 'var(--cream-50)' }}>
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  )
}
