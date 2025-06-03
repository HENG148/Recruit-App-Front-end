"use client"

import Footer from "@/components/footers/page";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation"

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = [
    '/login',
    '/register',
    '/coverLetter'
  ]

  const shouldHideHeaderFooter = noHeaderFooterRoutes.some(route => 
    pathname?.endsWith(route)
  )

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar title="" />}
      <main>{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  )
}