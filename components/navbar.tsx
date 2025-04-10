import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { Tab, Tabs } from "@heroui/tabs";
import { FlagIcon } from "react-flag-kit";
import { useRouter } from "next/router";
import { Progress } from "@heroui/progress";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

const searchInput = (
  <Input
    aria-label="Search"
    classNames={{
      inputWrapper: "bg-default-100",
      input: "text-sm",
    }}
    endContent={
      <Kbd className="hidden lg:inline-block" keys={["command"]}>
        K
      </Kbd>
    }
    labelPlacement="outside"
    placeholder="Search..."
    startContent={
      <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
    }
    type="search"
  />
);

export const Navbar = () => {
  const router = useRouter();

  const [readingProgress, setReadingProgress] = useState(1);
  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;

    setReadingProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { locale, locales, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <>
      <Progress
        aria-label="reading-progress"
        classNames={{
          base: "fixed z-50",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-[#5EA2EF] to-[#0072F5]",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        radius="none"
        size="sm"
        value={readingProgress}
      />
      <HeroUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start sm:justify-end items-center gap-1"
              href="/"
            >
              <Image
                alt="Galunggung Perkasa Husada"
                className="w-1/2 h-auto"
                height={50}
                src="/images/logo/square-trans.png"
                width={50}
              />
              {/* <p className="font-bold text-inherit">GALUNGGUNG</p> */}
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-4 justify-start ml-2">
            {/* {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))} */}
          </div>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              aria-label="whatsapp-icon"
              href={siteConfig.links.whatsapp}
              title="Whatsapp"
            >
              <FaWhatsapp className="text-default-500" size={24} />
            </Link>
            <Link
              isExternal
              aria-label="email-icon"
              href={siteConfig.links.email}
              title="Email"
            >
              <CiMail
                className="text-default-500"
                size={24}
                strokeWidth={1.2}
              />
            </Link>
            <ThemeSwitch />
            <Tabs
              aria-label="language-switch"
              defaultSelectedKey={locale}
              size="sm"
              onSelectionChange={(selectedKey) =>
                changeLanguage(selectedKey as string)
              }
            >
              <Tab key="id">
                <FlagIcon code="ID" />
              </Tab>
              <Tab key="en">
                <FlagIcon code="US" />
              </Tab>
            </Tabs>
          </NavbarItem>
          {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal href={siteConfig.links.whatsapp}>
            <FaWhatsapp className="text-default-500" size={24} />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {/* {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
            <Tabs
              aria-label="language-switch"
              defaultSelectedKey={locale}
              size="sm"
              onSelectionChange={(selectedKey) =>
                changeLanguage(selectedKey as string)
              }
            >
              <Tab key="id">
                <FlagIcon code="ID" />{" "}
              </Tab>
              <Tab key="en">
                <FlagIcon code="US" />{" "}
              </Tab>
            </Tabs>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
