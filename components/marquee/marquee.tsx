import React from "react";

import { ReviewCard } from "../review-card";

import { contentConfig } from "./../../config/content";

export const Marquee = () => {
  return (
    <>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee space-x-8 py-4 whitespace-nowrap">
          {contentConfig.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              hospital={review.hospital}
              hospitalLogo={review.hospitalLogo}
              image={review.image}
              name={review.name}
              review={review.review}
              title={review.title}
            />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee-2 space-x-8 py-4 pl-8 whitespace-nowrap">
          {contentConfig.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              hospital={review.hospital}
              hospitalLogo={review.hospitalLogo}
              image={review.image}
              name={review.name}
              review={review.review}
              title={review.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
