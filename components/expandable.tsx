import { useState } from "react";

import { HospitalCard } from "./hospital-card";

interface ExpandableProps {
  logos: string[];
}

export const Expandable = ({ logos }: ExpandableProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex flex-wrap gap-4 justify-center`}>
      <div
        className={`flex flex-wrap justify-center items-end gap-4 space-y-2 transition-max-height duration-500 ease-in-out ${isExpanded ? "max-h-max" : "max-h-24 sm:max-h-40 overflow-hidden"}`}
      >
        {logos.map((logoURL, index) => (
          <HospitalCard
            key={index}
            className="w-20 h-20 sm:w-40 sm:h-36"
            logoURL={logoURL}
          />
        ))}
      </div>
      {/* <Link
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "bordered",
        })}
        onPress={toggleExpansion}
      >
        {isExpanded ? "See less" : "See more"}
      </Link> */}
    </div>
  );
};
