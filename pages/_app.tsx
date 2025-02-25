import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import { ToastProvider } from "@heroui/toast";

import { fontSans, fontMono } from "@/config/fonts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Asia/Jakarta"
    >
      <HeroUIProvider navigate={router.push}>
        <ToastProvider placement={"top-center"} toastOffset={60} />
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </NextIntlClientProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
