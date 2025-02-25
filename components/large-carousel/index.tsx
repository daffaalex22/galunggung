import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./styles.module.css";
import "swiper/css/navigation";
import Image from "next/image";

interface LargeCarouselProps {
  items: string[];
}

export const LargeCarousel = ({ items }: LargeCarouselProps) => {
  return (
    <Swiper
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="mySwiper"
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      speed={1000}
      style={
        {
          "--swiper-navigation-color": "#FFF",
          "--swiper-navigation-size": "25px",
        } as React.CSSProperties
      }
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            alt={`Slide ${index + 1}`}
            height={200}
            src={item}
            width={1024}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
