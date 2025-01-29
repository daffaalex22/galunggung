// filepath: /d:/Coding/galunggung-husada/components/hospital-card.tsx
import React from "react";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import clsx from "clsx"; // Optional: for combining class names

interface HospitalCardProps {
  logoURL: string;
  className?: string; // Add className prop
}

export const HospitalCard: React.FC<HospitalCardProps> = ({
  logoURL,
  className,
}) => {
  return (
    <Card isPressable className={clsx("w-100 max-w-[340px]", className)}>
      <CardBody className="flex justify-center items-center p-3 text-small text-default-400">
        <Image
          alt="Hospital Logo"
          className="overflow-hidden"
          height={100}
          src={logoURL}
          width={100}
        />
      </CardBody>
    </Card>
  );
};

export default HospitalCard;
