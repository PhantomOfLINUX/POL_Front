import {
  RequestCookies,
  ResponseCookies,
} from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {notFound} from "next/navigation";

import {isAdmin} from "@/utils/protection/protectAdminAccess";

const url = process.env.NEXT_PUBLIC_BASE_API;
const playerAccessiblePaths = ["/problem", "/challengelist"];
const adminAccessiblePaths = ["/admin"];

const ReAccessToken = async (refreshToken: string) => {
  try {
    const newAccessTokenOk = await fetch(`${url}/api/auth/refresh`, {
      credentials: 'include',
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    })
    const newAccessToken = await newAccessTokenOk.json();
    if (newAccessTokenOk.ok) {
      return newAccessToken.accessToken
    }
    else return undefined
  } catch (error) {
    console.error(error)
  }
}

async function refreshAccessToken(request: NextRequest, refreshToken: string): Promise<NextResponse | null> {
  const token = await ReAccessToken(refreshToken);
  if (token) {
    const now = new Date();
    const time = now.getTime();
    const response = NextResponse.redirect(request.url);
    response.cookies.set({
      name: "POL_ACCESS_TOKEN",
      value: token,
      domain: "",
      expires: time + 1000 * 60 * 60
    });
    applySetCookie(request, response);
    return response;
  }
  return null;
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

const isPlayerAccessiblePath = (pathname: string): boolean => {
  return playerAccessiblePaths.some(path => pathname.startsWith(path));
}

const redirectToLogin = (request: NextRequest, pathname: string): NextResponse => {
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', pathname);
  return NextResponse.redirect(loginUrl);
}

const isAdminAccessiblePath = (pathname: string): boolean => {
  return adminAccessiblePaths.some(path => pathname.startsWith(path));
}

const redirectToNotFound = (request: NextRequest, pathname: string): NextResponse => {
  const url = new URL('/not-found', request.url);
  return NextResponse.rewrite(url);
}

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname, host } = nextUrl;
  const accessToken = cookies.get("POL_ACCESS_TOKEN");
  const refreshToken = cookies.get("POL_REFRESH_TOKEN");

  if (!accessToken && refreshToken) {
    const response = await refreshAccessToken(request, refreshToken.value);
    if (response) {
      return response;
    }
  }

  if (isPlayerAccessiblePath(pathname) && !accessToken) {
    return redirectToLogin(request, pathname);
  }

  if (isAdminAccessiblePath(pathname) && !accessToken) {
    /*const isAdminPlayer = await isAdmin();
    if (!isAdminPlayer) {
      return redirectToNotFound(request, pathname);
    }*/
    return redirectToNotFound(request, pathname);
  }
}

export const config = {
  matcher: '/:path*',
};