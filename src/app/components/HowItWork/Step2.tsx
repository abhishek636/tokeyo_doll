"use client";
import React, { useState, useEffect } from "react";
import { AnimatedList } from "../../components/ui/AnimatedList";

const Step2 = () => {
  const items = ["Customize", "Memory", "Module", "System"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate active item every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the next item index, wrapping around to the beginning
  const nextIndex = (activeIndex + 1) % items.length;

  return (
    <div className="flex items-center bg-[#1D1D1D] rounded-2xl p-6 sm:flex-row flex-col  justify-center">
      {/* Left Side List */}
      <AnimatedList className="p-6" activeIndex={activeIndex}>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
          </div>
        ))}
      </AnimatedList>

      {/* Right Side Step Info */}
      <div className="text-center sm:text-left sm:px-none px-6 sm:pb-none pb-6">
        <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
          <span className="text-white font-semibold">
            Step 2
          </span>
        </div>

        <h3 className="text-[32px] text-white mb-3 mt-7">
          {/* {items[nextIndex]} */}
          Customize
        </h3>
        <p className="text-gray-400 text-[20px]">
          Adjust modules, memory, and voices.
        </p>
      </div>
    </div>
  );
};

export default Step2;