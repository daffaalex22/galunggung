import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/config/site";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(siteConfig.links.whatsapp, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        aria-label="Chat on WhatsApp"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
