import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

interface ProfilePictureWithEditProps {
  imageUrl: string;
  onEditClick?: () => void;
}

export default function ProfilePictureWithEdit({
  imageUrl,
  onEditClick,
}: ProfilePictureWithEditProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onEditClick}
    >
      <div className="w-48 h-48 rounded-full overflow-hidden transition-all duration-300">
        <div
          className={`w-full h-full rounded-full p-[10px] bg-gradient-to-tr ${
            isHovered
              ? "from-yellow-300 via-yellow-400 to-yellow-200"
              : "from-yellow-200 via-yellow-300 to-yellow-100"
          }`}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEditClick?.();
          }}
          className={`px-8 py-3 rounded-full bg-gradient-to-tr text-black font-medium transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-200 text-center cursor-pointer ${
            isHovered
              ? "from-yellow-300 via-yellow-400 to-yellow-200"
              : "from-yellow-200 via-yellow-300 to-yellow-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <FiEdit2 className="w-4 h-4" />
            <span>Edit</span>
          </div>
        </button>
      </div>
    </div>
  );
}
