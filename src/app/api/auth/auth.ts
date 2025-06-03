import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth';

export const authConfig = {
  providers: [], // Add your providers  ( Google, Credentials, etc...)
  pages: {
    signIn: '/login',
    error: '/auth-error',
  },
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = ['/create-cv', '/dashboard'] // Add your protected routes.
      
      const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

      if (isProtectedRoute && !isLoggedIn) {
        const redirectUrl = new URL("/login", request.nextUrl.origin);
        redirectUrl.searchParams.set("callbackUrl", pathname);
        return Response.redirect(redirectUrl)
      }
      return true
    }
  }
} satisfies NextAuthConfig;

export const { auth, signIn, signOut} = NextAuth(authConfig)