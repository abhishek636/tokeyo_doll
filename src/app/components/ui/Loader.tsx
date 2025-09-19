// components/Loader.tsx
import React from "react";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 80 }) => {
  return (
    <div className="h-screen w-screen bg-[#010101] relative overflow-hidden fixed top-0 z-50">
        <div className="flex items-center justify-center w-screen h-screen bg-[#010101] fixed top-0 z-50">
            <img
                src="/assets/gifs/loader.gif"
                alt="Loading..."
                className="object-contain w-[400px]"

            />
        </div>
    </div>
  );
};

export default Loader;
