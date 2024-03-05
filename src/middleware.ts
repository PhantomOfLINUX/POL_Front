import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const url =  process.env.NEXT_PUBLIC_BASE_API;

const ReAccessToken = async (refreshToken:string) => {
  try{
    const newAccessTokenOk = await fetch(`${url}/api/auth/refresh`,{
      credentials: 'include',
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({refreshToken}),
    })
    if(!newAccessTokenOk.ok){
      alert("")
    }
  }catch(error) {
    console.error(error)
  }
}


export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  const accessToken = cookies.get("POL_ACCESS_TOKEN");
  const refreshToken = cookies.get("POL_REFRESH_TOKEN")
  if(accessToken===undefined&&refreshToken!==undefined)
    await ReAccessToken(refreshToken.value)
  if(pathname.startsWith("/problem")&&accessToken===undefined)
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/:path*',
}
