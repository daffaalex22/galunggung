import { Head } from "./head";
import { Footer } from "./../components/footer";
import WhatsAppButton from "./../components/whatsapp";

import { Navbar } from "@/components/navbar";
import { LargeCarousel } from "@/components/large-carousel";

interface TextProps {
  addressTitle: string;
  addressContent: string;
  contactTitle: string;
  contactCTA: string;
  contactDescription: string;
  [key: string]: string;
}

export default function DefaultLayout({
  children,
  largeCarouselItems,
  footerImage,
  text,
  contactData,
}: {
  children: React.ReactNode;
    largeCarouselItems: string[];
    footerImage: string;
    text: TextProps;
    contactData: Record<string, string>;
}) {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <Head />
        <Navbar />
        <LargeCarousel items={largeCarouselItems} />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <Footer
          contactData={contactData}
          footerImage={footerImage}
          text={text}
        />
        <WhatsAppButton />
      </div>
    </>
  );
}
