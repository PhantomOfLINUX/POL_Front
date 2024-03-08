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
    else return undefined
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
      if(token){
        const now = new Date();
        const time = now.getTime();
        const response = NextResponse.redirect(nextUrl);
        response.cookies.set({
          name:"POL_ACCESS_TOKEN",
          value:token,
          expires:time+1000*60*60
        });
        applySetCookie(request, response);
        return response;
      }
    }
  } 
  if(pathname.startsWith("/problem")&&accessToken===undefined)
    return NextResponse.redirect(new URL('/login', nextUrl))
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