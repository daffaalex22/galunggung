import axios from "axios";
import * as motion from "motion/react-client";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { addToast } from "@heroui/toast";

import { Marquee } from "../components/marquee/marquee";

import { ProductCarousel } from "./../components/product-carousel";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Expandable } from "@/components/expandable";

const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL;
const STRAPI_API_URL = STRAPI_BASE_URL + `/api`;

interface ReviewData {
  name: string;
  title: string;
  review: string;
  avatar: {
    url: string;
  };
  institutionName: string;
  institutionLogo: {
    url: string;
  };
}

const getReviews = async () => {
  const response = await axios.get(`${STRAPI_API_URL}/reviews`, {
    params: {
      populate: ["avatar", "institutionLogo"],
    },
  });

  const reviews = response.data.data.map((review: ReviewData) => {
    return {
      name: review.name,
      title: review.title,
      review: review.review,
      avatar: STRAPI_BASE_URL + review.avatar.url,
      institutionName: review.institutionName,
      institutionLogo: STRAPI_BASE_URL + review.institutionLogo.url,
    };
  });

  return reviews;
};

interface ProductData {
  title: string;
  description: string;
  image: {
    url: string;
  };
}

const getProducts = async () => {
  const response = await axios.get(`${STRAPI_API_URL}/products`, {
    params: {
      populate: "image",
    },
  });

  const products = response.data.data.map((product: ProductData) => {
    return {
      title: product.title,
      description: product.description,
      image: STRAPI_BASE_URL + product.image.url,
    };
  });

  return products;
};

const getContactData = async () => {
  const response = await axios.get(`${STRAPI_API_URL}/contact`);

  const contactData = response.data.data;

  return contactData;
};

const getHomeTexts = async ({ locale }: { locale: string }) => {
  let localeParam = "en";

  if (locale === "id") {
    localeParam = "id-ID";
  }

  const response = await axios.get(`${STRAPI_API_URL}/home-text`, {
    params: {
      locale: localeParam,
    },
  });

  const homeTexts = response.data.data;

  return homeTexts;
};

interface CarouselImage {
  url: string;
}

interface HomePictureResponse {
  data: {
    carousel: CarouselImage[];
    footer: {
      url: string;
    };
    clientLogos: {
      url: string;
    }[];
  };
}

interface ClientLogo {
  url: string;
}

const getHomePictures = async () => {
  const response = await axios.get(`${STRAPI_API_URL}/home-picture`, {
    params: {
      populate: ["carousel", "clientLogos", "footer"],
    },
  });

  const largeCarouselItems: string[] = (
    response.data as HomePictureResponse
  ).data.carousel.map((item: CarouselImage) => STRAPI_BASE_URL + item.url);

  const footerImage = STRAPI_BASE_URL + response.data.data.footer.url;

  const hospitalLogos: string[] = response.data.data.clientLogos.map(
    (item: ClientLogo) => STRAPI_BASE_URL + item.url,
  );

  return {
    largeCarouselItems,
    footerImage,
    hospitalLogos,
  };
};

interface StaticPropsContext {
  locale: string;
}

interface StaticProps {
  props: {
    hospitalLogos: string[];
    largeCarouselItems: string[];
    footerImage: string;
    text: Record<string, string>;
    contactData: Record<string, string>;
    products: Array<Record<string, string>>;
    reviews: Array<Record<string, string>>;
  };
}

export const getStaticProps = async (
  context: StaticPropsContext,
): Promise<StaticProps> => {
  const pictureData = await getHomePictures();
  const text = await getHomeTexts({ locale: context.locale });
  const contactData = await getContactData();
  const products = await getProducts();
  const reviews = await getReviews();

  return {
    props: {
      ...pictureData,
      text,
      contactData,
      products,
      reviews,
    },
  };
};

interface TextProps {
  reviewTitle1: string;
  reviewTitle2: string;
  reviewSubtitle: string;
  productTitle1: string;
  productTitle2: string;
  productSubtitle: string;
  clientsTitle1: string;
  clientsTitle2: string;
  clientsSubtitle: string;
  addressTitle: string;
  addressContent: string;
  contactTitle: string;
  contactCTA: string;
  contactDescription: string;
  [key: string]: string;
}

interface IndexPageProps {
  hospitalLogos: string[];
  largeCarouselItems: string[];
  footerImage: string;
  text: TextProps;
  contactData: Record<string, string>;
  products: Array<Record<string, string>>;
  reviews: Array<Record<string, string>>;
}

export default function IndexPage({
  hospitalLogos,
  largeCarouselItems,
  footerImage,
  text,
  contactData,
  products,
  reviews,
}: IndexPageProps) {
  return (
    <DefaultLayout
      contactData={contactData}
      footerImage={footerImage}
      largeCarouselItems={largeCarouselItems}
      text={text}
    >
      <motion.section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        initial={{ opacity: 0, y: 40 }}
        viewport={{
          once: true,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>{text.productTitle1}</span>
          <span className={title({ color: "blue" })}>{text.productTitle2}</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {text.productSubtitle}
          </div>
        </div>
      </motion.section>
      <ProductCarousel items={products} />
      <motion.section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16"
        initial={{ opacity: 0, y: 40 }}
        viewport={{
          once: true,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>{text.reviewTitle1}</span>
          <span className={title({ color: "blue" })}>{text.reviewTitle2}</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {text.reviewSubtitle}
          </div>
        </div>
      </motion.section>
      <Marquee data={reviews} />
      <motion.section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16"
        initial={{ opacity: 0, y: 40 }}
        viewport={{
          once: true,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>{text.clientsTitle1}</span>
          <span className={title()}>{text.clientsTitle2}</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {text.clientsSubtitle}
          </div>
        </div>
      </motion.section>
      <Expandable logos={hospitalLogos} />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <motion.div
          className="inline-block max-w-xl text-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          viewport={{
            once: true,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          <span className={title({ color: "blue" })}>{text.contactCTA}</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {text.contactDescription}
          </div>
        </motion.div>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <Snippet
              hideSymbol
              aria-label="phone-number"
              variant="bordered"
              onCopy={() => {
                addToast({
                  title: "Phone number copied",
                });
              }}
            >
              <span>
                {/* <FaWhatsapp className="inline mr-4" size={22} /> */}
                <Code className="cursor-pointer" color="primary">
                  {contactData.phoneNumber}
                </Code>
              </span>
            </Snippet>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <Snippet
              hideSymbol
              aria-label="email"
              className="ml-4"
              variant="bordered"
              onCopy={() => {
                addToast({
                  title: "Email copied",
                });
              }}
            >
              <span>
                {/* <FaWhatsapp className="inline mr-4" size={22} /> */}
                <Code className="cursor-pointer" color="primary">
                  {contactData.email}
                </Code>
              </span>
            </Snippet>
          </motion.span>
        </div>
      </section>
      <br />
      <br />
      <br />
    </DefaultLayout>
  );
}
