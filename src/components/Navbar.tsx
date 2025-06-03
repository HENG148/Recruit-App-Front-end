import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/10.png';
import Image from 'next/image';
import Nav from './Nav';
import LocalSwitcher from './localeSwitch/local-switcher';
import { useTranslations } from 'next-intl';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  title: string;
  // className: string;
}

const Navbar: React.FC<HeaderProps> = () => {
  const t = useTranslations("Log");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <header className="fixed w-full top-2 left-0 right-0 bg-white border border-[#cde6ff] backdrop-blur-sm z-50 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center"> {/*   */}
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={160}
              priority
            />
          </Link>
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* Mobile menu button */}
          <div className='xl:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        <div className="items-center gap-4 mr-10 sm:gap-6 hidden xl:flex">
          <div className="flex items-center gap-2 pr-4 sm:gap-3">
            <Link 
              href="/register" 
              className="border border-[#1a5276] px-6 py-[10px] rounded-[30px] text-sm sm:text-[15px] hover:bg-[#edf2f4] transition-colors whitespace-nowrap"
            >
              {t("register")}
            </Link>
            <Link 
              href="/" 
              className="px-7 py-[10px] rounded-[30px] text-sm sm:text-[15px] bg-[#1a5276] text-white hover:bg-[#2c6081] transition-colors whitespace-nowrap"
            >
              {t("log-in")}
            </Link>
          </div>
          <LocalSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;


// import Link from 'next/link';
// import React from 'react'
// import logo from '../../public/10.png'
// import Image from 'next/image';
// import Nav from './Nav';
// import LocalSwitcher from './localeSwitch/local-switcher';
// import { useTranslations } from 'next-intl';

// interface HeaderProps {
//   title: string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//   className: string;
// }

// const Navbar: React.FC<HeaderProps> = () => {
//   const t = useTranslations("Log")
//   return (
//     <>
//       {/* <div className='h-20 sm:px-12 md:px-34 2xl:px-80'> */}
//       <div className='fixed transform left-[50%] -translate-x-1/2 mx-auto'>
//         {/* <div className='font-accent w-auto flex border border-[#cde6ff] rounded-[40px] justify-between bg-transparent pr-8 py-2 fixed top-3 2xl:mx-80 sm:px-12'> left-[50%] transform -translate-x-1/2  */}
//         <div className='flex justify-between'>
//           <div className='flex items-center'>
//             <Link href='/'>
//               <Image
//                 // className='cursor-pointer'
//                 src={logo}
//                 alt=''
//                 width={160}
//               />
//             </Link>
//             <div className='hidden xl:flex'>
//               <Nav />
//             </div>
//           </div>

//           <div className='flex items-center gap-10'>
//             <div className='flex items-center gap-3 w-auto'>
//               <Link href="/" className='border border-[#1a5276] grid justify-items-center py-[10px] rounded-[30px] text-[15px] w-[7rem] hover:bg-[#edf2f4]'>
//                 {t("register")}
//               </Link>
//               <Link href="/" className='w-[6.5rem] border border-[#1a5276] grid justify-items-center py-[10px] rounded-[30px] text-[15px] bg-[#1a5276] text-[#fff] hover:bg-[#2c6081]'>
//                 {t("log-in")}
//               </Link>
//             </div>
//             <LocalSwitcher />
//           </div>
//         </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//       </div>
//     </>
//   )
// }

// export default Navbar
