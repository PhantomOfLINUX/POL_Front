import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
const url = process.env.NEXT_PUBLIC_BASE_API


export async function GET(request: NextRequest) {
  const GoogleUrl = request.nextUrl;
  const code = GoogleUrl.searchParams.get("code")
  const ob = await fetch(`${url}/api/oauth2/google`,
  {method:'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    code:code,
    name:"",
    eamil:"",
    password:""
  })});
  console.log(ob)
  redirect('http://localhost:3000/')//배포시 바꿔야함
}