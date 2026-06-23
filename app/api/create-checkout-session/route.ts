import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

// Simple in-memory rate limiter: max 5 requests per IP per minute
const rateLimiter = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const window = 60_000
  const max = 5
  const entry = rateLimiter.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimiter.set(ip, { count: 1, resetAt: now + window })
    return false
  }
  if (entry.count >= max) return true
  entry.count++
  return false
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Payments not configured' }, { status: 503 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const rawAmount = (body as Record<string, unknown>)?.amount
  const amountInCents = Math.round(Number(rawAmount))

  // Validate: minimum $1, maximum $1,000
  if (!Number.isFinite(amountInCents) || amountInCents < 100 || amountInCents > 100_000) {
    return NextResponse.json({ error: 'Amount must be between $1 and $1,000' }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Support Sahas Konreddy',
              description:
                'Helping fund the work of Hands of Hope and NextLine AI.',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/#support`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe session creation failed:', err)
    return NextResponse.json({ error: 'Payment session could not be created' }, { status: 500 })
  }
}
