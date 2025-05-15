"use client";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

interface LocationInputProps {
  onLocationSelect: (location: string) => void;
  placeholder?: string;
  className?: string;
}

export default function LocationInput({
  onLocationSelect,
  placeholder = "Enter your address, neighborhood, or ZIP",
  className = "",
}: LocationInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initializeAutocomplete;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeAutocomplete = () => {
    if (!inputRef.current) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["geocode", "establishment"],
        fields: ["formatted_address", "geometry", "name"],
      }
    );

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current.getPlace();
      if (place.formatted_address) {
        onLocationSelect(place.formatted_address);
      }
    });
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      required
      className={`w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black ${className}`}
    />
  );
}
