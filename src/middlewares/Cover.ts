import { auth } from "@/app/api/auth/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const protectedRoutes = ['/coverLetter', '/dashboard'];
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('./api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('.ico')
  ) {
    return NextResponse.next();
  }

  if (protectedRoutes.some(route => pathname.startsWith(route)) && !req.auth) {
    const loginUrl = new URL(`/login`, req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next();
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}