'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CollaborativeData } from '@/data/InfoSlideData';
import Image from 'next/image';

const Collaborative:React.FC = () => {
  return (
    <div className='w-full xl:w-[65%] md:w-full'>
      <Swiper 
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={5}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {CollaborativeData.map((img, idx) => (
          <SwiperSlide key={idx} className=''>
            <Image src={img.img} alt={img.alt} width={224} height={600} className='object-cover'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Collaborative
