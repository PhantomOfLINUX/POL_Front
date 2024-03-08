import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const url = process.env.NEXT_PUBLIC_BASE_API

const getSocialLoginToken = async (name:string|undefined,code:string|null) => {
  try{
    const ob = await fetch(`${url}/api/auth/${name}`,{
      method:'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code})
    }).then(res=>res.json());
  }catch(err){
    console.error(err)
  }
}

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;
  const { pathname } = nextUrl;
  const code = nextUrl.searchParams.get("code")
  await getSocialLoginToken(pathname.split('/').at(-1),code)
  return NextResponse.redirect(new URL('/', nextUrl))
}