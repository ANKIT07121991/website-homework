import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

// FeatureItem.js
export default function FeatureItem({ feature, i }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      {/* Logo and Title in Flex Row */}
      <div className="flex items-center space-x-3 mb-4">
        <img src={feature.logo} alt={feature.title} className="w-12 h-12" />

        {/* Title with Black Background */}
        <div className="bg-black text-black-500 px-4 py-2 rounded-md">
          <h3 className="text-lg font-semibold">{feature.title}</h3>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 mt-2">{feature.content}</p>
    </div>
  );
}
