import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
const url = process.env.NEXT_PUBLIC_BASE_API


export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const code = url.searchParams.get("code")
  const ob = await fetch(`${url}/api/oauth2/google`,
  {method:'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(code)});
  console.log(ob)
  redirect('http://localhost:3000/')
}