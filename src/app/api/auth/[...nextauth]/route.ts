import {
  RequestCookies,
  ResponseCookies,
} from "next/dist/compiled/@edge-runtime/cookies";
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const url = process.env.NEXT_PUBLIC_BASE_API

const getSocialLoginToken = async (name:string|undefined,code:string|null) => {
  try{
    const getTokenOK = await fetch(`${url}/api/auth/${name}`,{
      method:'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code})
    })
    const getToken = await getTokenOK.json();
    if(getTokenOK.ok){
      return getToken.token
    }
    else return undefined
  }catch(err){
    console.error(err)
  }
}

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


export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;
  const { pathname } = nextUrl;
  const code = nextUrl.searchParams.get("code")
  const response = NextResponse.redirect(new URL("/","https://www.pol.or.kr/"));
  const token = await getSocialLoginToken(pathname.split('/').at(-1),code);
    if(token){
      const {refreshToken,accessToken} = token;
      const now = new Date();
      const time = now.getTime();
      response.cookies.set({
        name:"POL_REFRESH_TOKEN",
        value:refreshToken,
        domain:".pol.or.kr",
        expires:time+1000*60*60
      });
      response.cookies.set({
        name:"POL_ACCESS_TOKEN",
        value:accessToken,
        domain:".pol.or.kr",
        expires:time+1000*60*60
      });
    applySetCookie(request,response)
  }
  return response
}