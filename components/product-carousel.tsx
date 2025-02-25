import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

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
    <Card aria-label="product-card" className="py-4">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="overflow-hidden rounded-xl">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              alt="Card background"
              aria-label="product-image"
              className="object-cover rounded-xl"
              height={200}
              src={imageSource}
              width={200}
            />
          </motion.div>
        </div>
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
      className="mySwiper cursor-grab"
      freeMode={true}
      modules={[FreeMode]}
      slidesPerView={3}
      spaceBetween={30}
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              viewport={{
                once: true,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, delay: 0.75 * index },
              }}
            >
              <ProductCard
                description={item.description}
                imageSource={item.image}
                title={item.title}
              />
            </motion.div>
          </AnimatePresence>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
