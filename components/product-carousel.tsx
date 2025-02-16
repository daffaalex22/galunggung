import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

interface ProductCarouselProps {
  items: string[];
}

interface ProductCardProps {
  imageSource: string;
}

const ProductCard = ({ imageSource }: ProductCardProps) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-center">
        <h4 className="font-bold text-large">Product Title</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width="auto"
        />
      </CardBody>
    </Card>
  );
};

export const ProductCarousel = ({ items }: ProductCarouselProps) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
      freeMode={true}
      modules={[FreeMode]}
      slidesPerView={3}
      spaceBetween={30}
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard imageSource={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
