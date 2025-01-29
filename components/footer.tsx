import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-wrap items-center justify-between bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white py-0">
      <div className="bg-[url('/medical-tensimeter.jpg')] bg-cover bg-center bg-no-repeat h-80 w-full lg:basis-2/3 opacity-80 p-4 text-white flex flex-col lg:h-full gap-4">
        <p className="font-semibold lg:font-bold italic">CONTACT US </p>
        <p className="font-semibold text-2xl lg:text-5xl uppercase">
          Contact us for additional details or assistance.
        </p>
        <p className="max-sm:text-sm">
          Connect with us for further information, help, or to explore how we
          can fulfill your medical device requirements.
        </p>
        <Link
          isExternal
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} lg:w-1/3 max-w-80 bg-gradient-to-r  from-[#0072F5] to-[#5EA2EF]`}
        >
          <p className="text-sm lg:text-lg font-semibold">
            {siteConfig.contacts.phone}
          </p>
        </Link>
        <Link
          isExternal
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} lg:w-1/2 max-w-5xl bg-gradient-to-r  from-[#0072F5] to-[#5EA2EF]`}
        >
          <p className="text-sm lg:text-lg font-semibold">
            {siteConfig.contacts.email}
          </p>
        </Link>
      </div>
      <div className="flex flex-col w-full flex-wrap p-4 gap-4 lg:h-full lg:w-full lg:basis-1/3 lg:flex-col lg:justify-start lg:items-start lg:gap-2">
        <Image
          alt="Galunggung Perkasa Husada"
          className="max-sm:w-1/2 w-full h-auto md:w-1/2"
          height={50}
          src="/logo/long-trans.png"
          width={200}
        />
        <h1 className="basis-1 font-semibold italic">ADDRESS</h1>
        <p className="max-sm:text-sm basis-1">KP Bale Endah, Tasikmalaya</p>
        <p className="max-sm:text-sm">
          {" "}
          Copyright © {currentYear} PT Galunggung Perkasa Husada
        </p>
      </div>
    </footer>
  );
};
