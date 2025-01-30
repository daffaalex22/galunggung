import { Head } from "./head";
import { Footer } from "./../components/footer";
import WhatsAppButton from "./../components/whatsapp";

import { Navbar } from "@/components/navbar";
import { LargeCarousel } from "@/components/large-carousel";

export default function DefaultLayout({
  children,
  largeCarouselItems,
}: {
  children: React.ReactNode;
    largeCarouselItems: string[];
}) {
  return (
    <>
      <div className="relative flex flex-col">
        <Head />
        <Navbar />
        <LargeCarousel items={largeCarouselItems} />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
