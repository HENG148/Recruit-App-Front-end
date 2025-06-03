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
    <div className="w-full mx-auto">
      <div>
        <Swiper
          // modules={[...(showNavigation ? [Pagination] : []), ...(showNavigation ? [Navigation] : []), Autoplay]}
          // slidesPerView={1}
          // scrollbar={{ draggable: true }}
          // pagination={
          //   showPagination
          //     ? { clickable: true, dynamicBullets: true, type: 'bullets' }
          //     : false
          // }
          // navigation={showNavigation}
          // autoplay={{
          //   delay: autoplayDelay,
          //   disableOnInteraction: false,
          // }}

          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            type: 'bullets',
            el: ".swiper-pagination"
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
        >
          {InfoSlide.map((slide, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1150}
                  height={0}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !ralative mt-4"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default InfoSlider;