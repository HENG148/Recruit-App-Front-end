'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti';

type NavLink = {
  label: string;
  path: string;
}

const link: NavLink[] = [
  { label: 'about', path: "/abouts" },
  { label: 'contact', path: '/contacts' },
]

const NavLinks = ({ href, children }: { href: string, children: React.ReactNode }) => {
  // const router = useRouter();
  const pathname = usePathname()
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
      {children}
    </Link>
  )
}

const Nav:React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (): void => {
    try {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
      setIsOpen(true);
    } catch (err) {
      console.error('Error in handleMouseEnter:', err)
    }
  }

  const handleMouseLeave = (): void => {
    try {
      closeTimeout.current = setTimeout(() => {
        try {
          setIsOpen(false)
        } catch (innerError) {
          console.error('Error in handleMouseLeave callback:', innerError)
        }
      }, 200)
    } catch (error) {
      console.error('Error setting timeout in handleMouseLeave:', error)
    }
  }
  return (
    <nav className='font-primary flex items-center gap-8 text-[1.1rem]'>
      <Link href='/' className={`${pathname === '/' ? 'text-[#149ac5] border-b-3 border-[#149ac5]': ""} inline-block capitalize hover:text-[#149ac5] transition-all`}>home</Link>
      <div 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className=' capitalize flex items-center'>
          Job
          <TiArrowSortedDown 
            className={`text-[#1a5276] [transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
        {open && (
          <div className='font-accent grid gap-y-[2px] absolute w-[6.5rem] justify-center py-2 ml-[-1.5rem] ttq bg-[#fff] border shadow-lg rounded z-10 text-[0.95rem] hover:bg-[#fff]'>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href={{ pathname: '/jobListing', query: { page: '1' } }}>IT related</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>Other</Link>
          </div>
        )}
      </div>

      <div className=''
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className='capitalize flex items-center text-[#000]'>
          media
          <TiArrowSortedDown 
            className={`text-[#1a5276] transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
        {isOpen && (
          <div className={`font-accent grid gap-y-1 absolute w-[11rem] justify-center py-2 ml-[-1.5rem] bg-[#fff] border border-gray-200 shadow-lg rounded-[7px] z-10 text-[0.95rem] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/media'>All</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>General Knowledge</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>IT Knowledge</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>Seekers Review</Link>
          </div>
        )}
      </div>
      {link.map((lnk, idx) => (
        <Link
          href={lnk.path}
          key={idx}
          className={`${lnk.path === pathname ? 'text-[#1a5276] border-b-2 border-[#1a5276]': ""} text-black capitalize hover:text-main transition-all`}>
          {lnk.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
