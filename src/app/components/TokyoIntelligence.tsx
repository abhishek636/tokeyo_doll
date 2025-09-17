// components/TokyoIntelligence.tsx
"use client";

import Image from 'next/image';

export default function TokyoIntelligence() {
    const characterImageSrc: string = '/images/anime-character.png'; 

    const handleButtonClick = (sectionId: string): void => {
        console.log(`Navigating to ${sectionId}`);
    };

    return (
        <section className="relative bg-black min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden border-2 border-blue-500">
            {/* Blue border effect - adjust as needed */}
            <div className="absolute inset-0 border-2 border-blue-500 pointer-events-none"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-20 z-10 text-center">
                Tokyo Intelligence
            </h1>

            <div className="relative w-full max-w-7xl flex items-center justify-center z-10">
                {/* Central Character Image */}
                <div className="relative z-20">
                    <Image
                        src={characterImageSrc}
                        alt="Anime Character"
                        width={400} 
                        height={400} 
                        className="object-contain"
                    />
                </div>
                
                {/* Interactive Elements (Models, Memory, Scene, etc.) */}
                {/* Left Side */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-1/2 md:translate-x-0 lg:right-[calc(50%+250px)] top-1/2 -translate-y-1/2 flex flex-col space-y-10 md:space-y-16 lg:space-y-20 transform -translate-x-full md:translate-x-0 md:-ml-64 lg:-ml-96">
                    <button
                        onClick={() => handleButtonClick('models')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                        </span>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            Models
                        </span>
                         <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 -rotate-12 transform origin-right"></div>
                    </button>

                    <button
                        onClick={() => handleButtonClick('scene')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z" clipRule="evenodd"></path></svg>
                        </span>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            Scene
                        </span>
                        <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 -rotate-12 transform origin-right"></div>
                    </button>

                    <button
                        onClick={() => handleButtonClick('modules')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM9 8a1 1 0 00-1 1v1a1 1 0 002 0V9a1 1 0 00-1-1zM6 11a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM11 5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1zM10 13a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM13 8a1 1 0 00-1 1v1a1 1 0 002 0V9a1 1 0 00-1-1zM15 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM14 11a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z"></path></svg>
                        </span>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            Modules
                        </span>
                        <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute right-full mr-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 -rotate-12 transform origin-right"></div>
                    </button>
                </div>

                {/* Right Side */}
                <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:-translate-x-0 lg:left-[calc(50%+250px)] top-1/2 -translate-y-1/2 flex flex-col space-y-10 md:space-y-16 lg:space-y-20 transform translate-x-full md:translate-x-0 md:ml-64 lg:ml-96">
                    <button
                        onClick={() => handleButtonClick('memory')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 rotate-12 transform origin-left"></div>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            Memory
                        </span>
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM11 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"></path></svg>
                        </span>
                    </button>

                    <button
                        onClick={() => handleButtonClick('providers')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 rotate-12 transform origin-left"></div>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            Providers
                        </span>
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18H4v-1a4 4 0 0112 0v1z"></path></svg>
                        </span>
                    </button>

                    <button
                        onClick={() => handleButtonClick('system')}
                        className="flex items-center space-x-2 text-white text-lg group relative transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        <div className="absolute left-full ml-2 w-20 h-0.5 bg-gray-500 group-hover:bg-blue-400 transition-colors duration-300 rotate-12 transform origin-left"></div>
                        <span className="px-4 py-2 bg-gray-700 rounded-md shadow-lg group-hover:bg-gray-600 transition-colors duration-300">
                            System
                        </span>
                        <span className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.5 1.5 0 01-2.22.88c-1.56-.38-1.56-2.6 0-2.98.88-.38.88-2.22 0-2.98-.38-1.56 1.56-2.6 1.56-2.98.88-.38-.88-2.22 0-2.98.38-1.56 2.6-1.56 2.98 0a1.5 1.5 0 012.22-.88c1.56.38 1.56 2.6 0 2.98-.88.38-.88 2.22 0 2.98zM10 17a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Call to Action Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-20 z-10">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Construct Behavioral Architecture
                </button>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Fuse Personality with Digital Embodiment
                </button>
                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Deploy Agent into Immersive Ecosystems
                </button>
            </div>
        </section>
    );
}