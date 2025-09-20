"use client";
import React from "react";

export default function NeonCircleLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-40 h-40">
        {/* Outer Circle Glow */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 animate-pulse blur-md"></div>

        {/* Main Circle */}
        <div className="absolute inset-0 rounded-full border-[3px] border-blue-500 animate-spin-slow"></div>

        {/* Animated Wave Effect */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-b-blue-500 animate-spin-slower"></div>
      </div>
    </div>
  );
}
