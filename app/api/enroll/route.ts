import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs' // file handling needs the Node runtime, not edge

// --- tiny in-memory rate limiter -------------------------------------------
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_REQUESTS
}

// --- validation --------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/
const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Try again in a minute.' },
      { status: 429 }
    )
  }

  let incoming: FormData
  try {
    incoming = await req.formData()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid form submission.' },
      { status: 400 }
    )
  }

  const name = (incoming.get('name') as string | null)?.trim()
  const phone = (incoming.get('phone') as string | null)?.trim()
  const email = (incoming.get('email') as string | null)?.trim()
  const course = (incoming.get('course') as string | null)?.trim()
  const botcheck = incoming.get('botcheck') as string | null
  const proof = incoming.get('proof_of_payment') as File | null

  // Honeypot — bots fill every field, humans never see this one.
  if (botcheck) {
    return NextResponse.json({ success: true }) // silently accept, do nothing
  }

  if (!name || name.length < 2) {
    return NextResponse.json(
      { success: false, message: 'Please enter your full name.' },
      { status: 400 }
    )
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }
  if (!phone || !PHONE_RE.test(phone)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid phone number.' },
      { status: 400 }
    )
  }
  if (!course) {
    return NextResponse.json(
      { success: false, message: 'Please select what you&apos;re enrolling for.' },
      { status: 400 }
    )
  }

  const accessKey = process.env.WEB3FORMS_KEY

  if (accessKey) {
    try {
      const outgoing = new FormData()
      outgoing.append('access_key', accessKey)
      outgoing.append('subject', `New Enrollment: ${name} (${course})`)
      outgoing.append('from_name', 'Solalina Photography School')
      outgoing.append('replyto', email)
      outgoing.append('name', name)
      outgoing.append('phone', phone)
      outgoing.append('email', email)
      outgoing.append('course', course)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: outgoing,
      })

      const data = await res.json()
      if (!data.success) {
        console.warn('Web3Forms response:', data.message)
      }
    } catch (err) {
      console.error('Web3Forms dispatch error:', err)
    }
  } else {
    console.log('Notice: WEB3FORMS_KEY environment variable is not set. Proceeding to WhatsApp redirect.')
  }

  // Always return success so the user can proceed directly to WhatsApp receipt submission!
  return NextResponse.json({ success: true })
}

