'use client'

import { CONTACT, FOOTER } from '@/app/data'
import { ArrowUp } from 'lucide-react'

interface FooterProps {
  onEnrollClick: () => void
}

export function Footer({ onEnrollClick }: FooterProps) {
  return (
    <footer className="bg-[#080808] py-16 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Closing CTA */}
        <div className="mb-16 text-center">
          <h3
            className="font-serif text-3xl sm:text-4xl font-500 mb-8 text-balance"
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
                Phone / WhatsApp
              </p>
              <div className="flex flex-col gap-1">
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
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center justify-center sm:justify-start gap-1 font-medium transition-colors duration-200"
                  style={{ color: 'var(--gold)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
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

        {/* Bottom Row: Copyright + Social + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--cream-50)' }}>
            {FOOTER.copyright}
          </p>

          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="transition-all duration-200"
              style={{ color: 'var(--cream-50)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--cream-50)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-8 h-8 flex items-center justify-center border transition-all duration-200"
              style={{ borderColor: 'var(--gold-40)', color: 'var(--cream-50)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-40)'
                e.currentTarget.style.color = 'var(--cream-50)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

