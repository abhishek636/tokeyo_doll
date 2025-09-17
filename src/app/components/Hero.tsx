"use client";

import React from "react";
import { SparklesCore } from "../components/Backgrounds/sparkles";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center sm:px-4 sm:py-20 py-16">
            <div className="w-full absolute inset-0 h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            {/* Character Video */}
            <div className="relative w-full max-w-md sm:hidden block">
                <video
                    src="/videos/doll.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                />

                <div
                    className="absolute inset-0 pointer-events-none "
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 95.42%)",
                    }}
                />
            </div>
            <div className="relative w-full max-w-md sm:block hidden">
                <img src="/videos/doll.gif" alt="Animated GIF" className="z-10"/>

                <div
                    className="absolute inset-0 pointer-events-none "
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 95.42%)",
                    }}
                />
            </div>
             

            {/* Headline */}
            <h1 className="sm:mt-8 mt-4 text-white">
                AI Streamer Launchpad
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-white">
                Choose a character, customize their world, and start real conversations powered by AI.
            </p>

            {/* Buttons */}
            <div className="sm:mt-14 mt-8 flex gap-4 flex-wrap justify-center">
                <Link href="#" className="sm:px-9 sm:py-3 z-40 px-6 py-2 rounded-full bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition flex items-center justify-center">
                    Launch App
                </Link>
                <Link
                    href="#"
                    className="relative sm:px-9 z-40 sm:py-3 text-[#0071E3] text-lg
                   rounded-full border border-blue-500 
                   hover:text-white
                   transition-all duration-300 ease-in-out
                   shadow-[0_0_15px_rgba(0,0,255,0.5)] 
                   backdrop-blur-sm text-sm px-6 py-3 hover:bg-[#0071E3]"
                >
                    Visit Livestream
                </Link>
            </div>
        </section>
    );
};

export default Hero;
