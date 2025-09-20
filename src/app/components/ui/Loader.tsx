// components/Loader.tsx
"use client";
import React, { useEffect } from "react";

interface LoaderProps {
  size?: number;
  progress?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 80, progress = 0 }) => {
  useEffect(() => {
    // Lock scroll when loader mounts
    document.body.style.overflow = "hidden";

    // Unlock scroll when loader unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#000101] fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center space-y-4">
        <img
          src="/assets/gifs/loader.gif"
          alt="Loading..."
          className="object-contain w-[320px]"
        />

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white text-sm font-medium">
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default Loader;
