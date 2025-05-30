'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState, useTransition } from 'react'
import England from "../../../public/EnglandFlag.png"
import Cambodia from '../../../public/CambodiaFlag.png'
import Image from 'next/image';
import { MdOutlineTranslate } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";

type Language = {
  code: string;
  label: string;
  flag: any;
  // icon: React.ReactElement
}

const language:Language[] = [
  { code: 'kh', label: 'ខ្មែរ', flag: Cambodia},
  { code: 'en', label: 'English', flag: England },
]

const LocalSwitcher = () => {
  const router = useRouter();
  const localActive = useLocale()
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)
  } 

  ///
  const initialLang = language.find((lang) => lang.code === localActive) || language[0];
  const [selected, setSelected] = useState<Language>(initialLang);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setSelected(lang);
    router.replace(`/${lang.code}`);
    setOpen(false)
  }
  return (
    <div className='relative w-full font-accent'>
      <div className='h-[4.3rem] bottom-[-10px] absolute mr-3 w-[1.5px] right-[52px] bg-[#e0e0e0]'></div>
      <button
        className='flex items-center gap-2 p-2 transition-all bg-[#fff] hover:bg-[#f5f5f5] rounded-[50px] py-3 px-3 justify-items-center'
        onClick={() => setOpen(!open)}>
        {/* <IoIosArrowDown className={`transition-transform ${open ? "rotate-180" : ""}`} /> */}
        <MdOutlineTranslate className='text-[1.6rem] text-[#828282]' />
      </button>
      {open && (
        <ul className='absolute right-[-3rem] w-[8rem] mt-2 bg-[#fff] border shadow-lg overflow-hidden z-10 px-2 pb-2' >
          <li className='font-semibold text-[0.8rem] pt-2 pb-2 pl-1'>TRANSLATIONS</li>
          {language.map((lang) => (
            <li 
              key={lang.code}
              className={`p-2 cursor-pointer rounded-[10px] ${localActive === lang.code ? 'bg-[#e3eaee] text-main' : 'hover:bg-[#f6f6f6] '}`}
              onClick={() => handleSelect(lang)}
            >
              <p className='text-[0.9rem]'>{lang.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LocalSwitcher;