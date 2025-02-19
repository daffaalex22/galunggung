import { useState } from "react";
import * as motion from "motion/react-client";

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
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
          >
            <HospitalCard
              key={index}
              className="w-20 h-20 sm:w-40 sm:h-36"
              logoURL={logoURL}
            />
          </motion.div>
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
