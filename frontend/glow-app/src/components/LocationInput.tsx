"use client";
import React, { useEffect, useRef } from "react";

interface GoogleMapsWindow extends Window {
  google: {
    maps: {
      places: {
        Autocomplete: new (
          input: HTMLInputElement,
          options?: {
            types?: string[];
            fields?: string[];
          }
        ) => {
          addListener: (event: string, callback: () => void) => void;
          getPlace: () => {
            formatted_address?: string;
            geometry?: {
              location: {
                lat: () => number;
                lng: () => number;
              };
            };
            name?: string;
          };
        };
      };
    };
  };
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
  const autocompleteRef =
    useRef<ReturnType<typeof window.google.maps.places.Autocomplete>>();

  useEffect(() => {
    const initializeAutocomplete = () => {
      if (!inputRef.current) return;
      const googleWindow = window as unknown as GoogleMapsWindow;
      autocompleteRef.current =
        new googleWindow.google.maps.places.Autocomplete(inputRef.current, {
          types: ["geocode", "establishment"],
          fields: ["formatted_address", "geometry", "name"],
        });
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          onLocationSelect(place.formatted_address);
        }
      });
    };

    // Only add the script if it hasn't been added yet
    if (!(window as any).google || !(window as any).google.maps) {
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeAutocomplete;
        document.head.appendChild(script);
      } else {
        // If script exists but google is not loaded yet, add onload
        const script = document.getElementById("google-maps-script");
        if (script) script.addEventListener("load", initializeAutocomplete);
      }
    } else {
      initializeAutocomplete();
    }

    return () => {
      // No need to remove the script, just clean up listeners if needed
    };
  }, [onLocationSelect]);

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
