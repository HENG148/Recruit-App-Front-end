import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server';
import { auth } from './app/api/auth/auth';

export default createMiddleware(routing);
export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
