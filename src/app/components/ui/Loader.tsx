// components/Loader.tsx
"use client";
import React, { useEffect } from "react";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 80 }) => {
  useEffect(() => {
    // Lock scroll when loader mounts
    document.body.style.overflow = "hidden";

    // Unlock scroll when loader unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#010101] fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <img
        src="/assets/gifs/loader.gif"
        alt="Loading..."
        className="object-contain w-[400px]"
      />
    </div>
  );
};

export default Loader;
