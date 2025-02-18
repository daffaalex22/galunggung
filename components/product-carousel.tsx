import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

interface ProductCarouselProps {
  items: Array<Record<string, string>>;
}

interface ProductCardProps {
  imageSource: string;
  title: string;
  description: string;
}

const ProductCard = ({ imageSource, title, description }: ProductCardProps) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSource}
          width="auto"
        />
      </CardBody>
    </Card>
  );
};

export const ProductCarousel = ({ items }: ProductCarouselProps) => {
  console.log("ITEMS", items);

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
        <SwiperSlide key={index} className="cursor-grab">
          <ProductCard
            description={item.description}
            imageSource={item.image}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
