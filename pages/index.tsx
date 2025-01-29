import fs from "fs";
import path from "path";

import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";

import { Marquee } from "../components/marquee/marquee";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Expandable } from "@/components/expandable";

const getHospitalLogos = () => {
  const logosDir = path.join(process.cwd(), "public/hospital-logo");
  const filenames = fs.readdirSync(logosDir);

  return filenames.map((filename) => `/hospital-logo/${filename}`);
};

export const getStaticProps = async () => {
  const logos = getHospitalLogos();

  return {
    props: {
      logos,
    },
  };
};

interface IndexPageProps {
  logos: string[];
}

export default function IndexPage({ logos }: IndexPageProps) {
  return (
    <DefaultLayout>
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
          <span className={title()}>Trusted by&nbsp;</span>
          <span className={title({ color: "blue" })}>Clients&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Hear what our satisfied clients have to say.
          </div>
        </div>
      </section>
      <Marquee />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>Hospitals&nbsp;</span>
          <span className={title()}>using our products&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            These are our loyal clients.
          </div>
        </div>
      </section>
      <Expandable logos={logos} />
      <br />
      <br />
    </DefaultLayout>
  );
}
