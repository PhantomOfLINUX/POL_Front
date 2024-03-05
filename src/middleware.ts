import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { origin, pathname } = nextUrl;
  const accessToken = cookies.get("POL_ACCESS_TOKEN");

  //return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/problem',
}

//로그인유무 확인
