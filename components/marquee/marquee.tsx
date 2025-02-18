import React from "react";

import { ReviewCard } from "../review-card";

export const Marquee = ({ data }: { data: Array<Record<string, string>> }) => {
  return (
    <>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee space-x-8 py-4 whitespace-nowrap">
          {data.map((review, index) => (
            <ReviewCard
              key={index}
              hospital={review.institutionName}
              hospitalLogo={review.institutionLogo}
              image={review.avatar}
              name={review.name}
              review={review.review}
              title={review.title}
            />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee-2 space-x-8 py-4 pl-8 whitespace-nowrap">
          {data.map((review, index) => (
            <ReviewCard
              key={index}
              hospital={review.institutionName}
              hospitalLogo={review.institutionLogo}
              image={review.avatar}
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
