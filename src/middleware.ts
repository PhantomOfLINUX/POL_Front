import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const url =  process.env.NEXT_PUBLIC_BASE_API;


const ReaccessToken = async (refreshToken:string) => {
  const IsRefreshToken = await fetch(`${url}/api/auth/refresh`,{
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({refreshToken}),
    credentials: 'include'
  })
  console.log(IsRefreshToken.status)
}


export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { origin, pathname } = nextUrl;
  const accessToken = cookies.get("POL_ACCESS_TOKEN");
  const refreshToken = cookies.get("POL_REFRESH_TOKEN")
  if(accessToken===undefined&&refreshToken!==undefined){ 
    ReaccessToken(refreshToken.value)
  }
  if(pathname.startsWith("/problem")&&accessToken===undefined){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/:path*',
}

//로그인유무 확인
