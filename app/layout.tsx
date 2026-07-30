import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Solalina Photography School',
  description: 'A 2-week intensive photography program in Yenagoa, Bayelsa. Learn from experienced professionals. Limited to 40 participants.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://solalina-school.vercel.app'),
  openGraph: {
    title: 'Solalina Photography School',
    description: 'Discover. Learn. Capture. A photography intensive by Solalina Studios.',
    type: 'website',
    siteName: 'Solalina Photography School',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-[#080808] text-[#F5F0E8]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
