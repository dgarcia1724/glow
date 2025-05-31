import React, { useState, useRef } from "react";
import { dummyUser } from "@/data/dummyUser";
import { useRouter } from "next/navigation";

export default function EditContent() {
  const router = useRouter();
  const [photos, setPhotos] = useState<File[]>([]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handlePhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const newPhotos = [...photos];
      newPhotos[index] = e.target.files[0];
      setPhotos(newPhotos);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos[index] = null as unknown as File;
    setPhotos(newPhotos);
  };

  const photoCount = photos.filter(Boolean).length;

  return (
    <div className="flex-1">
      <div className="max-w-md mx-auto bg-white">
        {/* Photos Section */}
        <div className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">My Photos</h2>
            <p className="text-sm text-gray-500">{photoCount}/4 photos added</p>
            <div className="grid grid-cols-2 gap-4 overflow-visible">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-dashed border-black/80 rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-400 transition-colors relative overflow-visible"
                  onClick={(e) => {
                    // Only trigger file input if not clicking the X button
                    if ((e.target as HTMLElement).closest("button")) return;
                    inputRefs[index].current?.click();
                  }}
                >
                  <input
                    ref={inputRefs[index]}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoChange(e, index)}
                    className="absolute inset-0 w-full h-full opacity-0"
                    tabIndex={-1}
                  />
                  {photos[index] ? (
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      <img
                        src={URL.createObjectURL(photos[index])}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemovePhoto(index);
                        }}
                        className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border-2 border-black/10 z-30 cursor-pointer pointer-events-auto"
                      >
                        <svg
                          className="w-6 h-6 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <p className="text-sm text-gray-500">Add photo</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              My Core Values
            </h2>
            <div className="space-y-4">
              <div
                className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() =>
                  router.push("/main-app/profile/edit-profile/religion")
                }
              >
                <h3 className="text-sm font-bold text-black">
                  Religious Beliefs
                </h3>
                <p className="text-gray-600 mt-1">
                  {dummyUser.coreValues.religion}
                </p>
              </div>
              <div
                className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() =>
                  router.push("/main-app/profile/edit-profile/politics")
                }
              >
                <h3 className="text-sm font-bold text-black">
                  Political Views
                </h3>
                <p className="text-gray-600 mt-1">
                  {dummyUser.coreValues.politics}
                </p>
              </div>
              <div
                className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() =>
                  router.push(
                    "/main-app/profile/edit-profile/relationship-type"
                  )
                }
              >
                <h3 className="text-sm font-bold text-black">
                  Relationship Type
                </h3>
                <p className="text-gray-600 mt-1">
                  {dummyUser.coreValues.relationshipType}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Basic Info</h2>
            <div className="space-y-4">
              <div
                className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() =>
                  router.push("/main-app/profile/edit-profile/location")
                }
              >
                <h3 className="text-sm font-bold text-black">Location</h3>
                <p className="text-gray-600 mt-1">
                  {dummyUser.location.city}, {dummyUser.location.state}
                </p>
              </div>
              <div
                className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() =>
                  router.push("/main-app/profile/edit-profile/bio")
                }
              >
                <h3 className="text-sm font-bold text-black">Bio</h3>
                <p className="text-gray-600 mt-1">{dummyUser.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
