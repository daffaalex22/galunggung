import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

import CustomAvatar from "./custom-avatar";

interface ReviewCardProps {
  name: string;
  title: string;
  image: string;
  review: string;
  hospital: string;
  hospitalLogo: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  title,
  image,
  review,
  hospital,
  hospitalLogo,
}) => {
  return (
    <Card isPressable className="w-80 max-w-[340px] whitespace-normal">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <CustomAvatar
            isBordered
            aria-label="profile-picture"
            radius="full"
            size="md"
            src={image}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {title}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{review}</p>
      </CardBody>
      <CardFooter className="gap-3 justify-between">
        <div className="flex basis-1/2 gap-1">
          <Image
            alt={hospital}
            className="w-full h-auto max-w-14 md:w-1/2"
            height={50}
            src={hospitalLogo}
            width={200}
          />
        </div>
        <div className="flex basis-1/2 gap-1 justify-end px-2">
          <p className="font-semibold text-default-400 text-small">
            {hospital}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
