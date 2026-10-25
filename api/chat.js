// Vercel Serverless Function: /chat/<number> -> the lab's WhatsApp chat.
// Used by the WhatsApp lab report templates' "Chat with lab" button (Meta blocks wa.me links in buttons).
// The approved templates' URL carries a literal "{{1}}" before the number, so we take the trailing digits.

export default function handler(req, res) {
  const url = new URL(req.url || '/', 'https://www.aarohcare.com')
  let raw = url.searchParams.get('path') || url.pathname
  try {
    raw = decodeURIComponent(raw)
  } catch {
    // keep raw as-is when it is not valid percent-encoding
  }

  const match = raw.match(/(\d{10,15})\/?$/)
  const location = match ? `https://wa.me/${match[1]}` : 'https://www.aarohcare.com/'

  res.statusCode = 307
  res.setHeader('Location', location)
  res.setHeader('Cache-Control', 'no-store')
  res.end()
}
