'use client'

import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { InfoSlide } from "@/data/InfoSlideData";

interface SlideItem {
  imageSrc: string | StaticImageData,
  altText: string;
}

interface SliderProps {
  // slides: SlideItem[];
  autoplayDelay?: number,
  showPagination?: boolean,
  showNavigation?: boolean;
}

const InfoSlider: React.FC<SliderProps> = ({
  // slides,
  autoplayDelay = 7000,
  showPagination = true,
  showNavigation = true,
}) => {
  return (
    <div className="">
      <div>
        <Swiper
          modules={[...(showNavigation ? [Pagination] : []), ...(showNavigation ? [Navigation] : []), Autoplay]}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={
            showPagination
              ? { clickable: true, dynamicBullets: true, type: 'bullets' }
              : false
          }
          navigation={showNavigation}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
        >
          {InfoSlide.map((slide, idx) => (
            <SwiperSlide key={idx} className="px-[19rem]">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1000}
                height={0}
                className=""
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default InfoSlider;