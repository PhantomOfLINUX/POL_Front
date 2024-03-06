import {
  RequestCookies,
  ResponseCookies,
} from "next/dist/compiled/@edge-runtime/cookies";
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
    const newAccessToken = await newAccessTokenOk.json();
    if(newAccessTokenOk.ok){
      return newAccessToken.accessToken
    }
    else return ""
  }catch(error) {
    console.error(error)
  }
}


export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  const accessToken = cookies.get("POL_ACCESS_TOKEN");
  const refreshToken = cookies.get("POL_REFRESH_TOKEN")
  if(accessToken===undefined&&refreshToken!==undefined){
    if(!accessToken){
      const token = await ReAccessToken(refreshToken.value)
      const response = NextResponse.redirect(request.url);
      response.cookies.set("POL_ACCESS_TOKEN", token);
      applySetCookie(request, response);
      return response;
    }
  } 
  if(pathname.startsWith("/problem")&&accessToken===undefined)
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/:path*',
};

function applySetCookie(req: NextRequest, res: NextResponse): void {
  const resCookies = new ResponseCookies(res.headers);
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  resCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  NextResponse.next({
    request: { headers: newReqHeaders },
  }).headers.forEach((value, key) => {
    if (
      key === "x-middleware-override-headers" ||
      key.startsWith("x-middleware-request-")
    ) {
      res.headers.set(key, value);
    }
  });
}