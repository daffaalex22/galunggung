import { Divider } from "@heroui/divider";

interface TextProps {
  addressTitle: string;
  addressContent: string;
  contactTitle: string;
  contactCTA: string;
  contactDescription: string;
  [key: string]: string;
}

export const Footer = ({
  text,
  contactData,
}: {
  footerImage: string;
  text: TextProps;
  contactData: Record<string, string>;
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider className="w-11/12" />
      <footer className="w-full flex flex-wrap justify-center items-center p-3">
        <p className="text-gray-400 text-sm inline mr-3">
          {text.addressTitle[0] + text.addressTitle.slice(1).toLowerCase()}
          {": "}
          {text.addressContent}
        </p>
        <p className="text-gray-500 text-sm inline">
          {" "}
          Copyright © {currentYear} PT Galunggung Perkasa Husada
        </p>
      </footer>
    </>
  );
};
