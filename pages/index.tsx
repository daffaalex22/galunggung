import fs from "fs";
import path from "path";

import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { useTranslations } from "next-intl";

import { Marquee } from "../components/marquee/marquee";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Expandable } from "@/components/expandable";

const getHospitalLogos = () => {
  const logosDir = path.join(process.cwd(), "public/images/hospital-logo");
  const filenames = fs.readdirSync(logosDir);

  return filenames.map((filename) => `/images/hospital-logo/${filename}`);
};

const getLargeCarouselItems = () => {
  const largeCarouselDir = path.join(
    process.cwd(),
    "public/images/large-carousel",
  );
  const filenames = fs.readdirSync(largeCarouselDir);

  return filenames.map((filename) => `/images/large-carousel/${filename}`);
};

interface StaticPropsContext {
  locale: string;
}

interface StaticProps {
  props: {
    logos: string[];
    largeCarouselItems: string[];
    messages: Record<string, string>;
  };
}

export const getStaticProps = async (
  context: StaticPropsContext,
): Promise<StaticProps> => {
  const logos = getHospitalLogos();
  const largeCarouselItems = getLargeCarouselItems();

  return {
    props: {
      logos,
      largeCarouselItems,
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  };
};

interface IndexPageProps {
  logos: string[];
  largeCarouselItems: string[];
}

export default function IndexPage({
  logos,
  largeCarouselItems,
}: IndexPageProps) {
  const t = useTranslations("home");

  return (
    <DefaultLayout largeCarouselItems={largeCarouselItems}>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>{t("review_title_1")}</span>
          <span className={title({ color: "blue" })}>
            {t("review_title_2")}
          </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {t("review_subtitle")}
          </div>
        </div>
      </section>
      <Marquee />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>
            {t("client_list_title_1")}
          </span>
          <span className={title()}>{t("client_list_title_2")}</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            {t("client_list_subtitle")}
          </div>
        </div>
      </section>
      <Expandable logos={logos} />
      <br />
      <br />
    </DefaultLayout>
  );
}
