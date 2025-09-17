// components/Step3.jsx
import React from 'react';
 
const Step3 = () => {
    return (
        <div className="flex items-center bg-[#1D1D1D] rounded-2xl">
            <div className=" p-6  mb-8 flex justify-center items-center" style={{ minHeight: '300px' }}>
                {/* Mobile Frame */}
                <div className="relative">
                    <div className="w-32 h-56 bg-gray-900 rounded-[1.5rem] p-2 border-3 border-gray-600 shadow-xl">
                        <div className="w-full h-full bg-black rounded-[1.2rem] overflow-hidden relative">
                           
 
                            {/* Character Video in Phone */}
                            <div className="pt-6 pb-4 px-2 h-full flex flex-col">
                                <div className="flex-1 flex items-center justify-center mb-3">
                                    <div className="relative  bg-gradient-to-b from-[#3B82F6]/30 to-transparent rounded-lg overflow-hidden border border-[#3B82F6]/50">
                                        <video
                                            src="/videos/doll.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="rounded-xl w-full h-full object-cover"
                                        />
 
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                </div>
 
                                {/* Chat Interface */}
                                <div className="space-y-1">
                                    <div className="bg-gray-800 rounded p-1">
                                        <div className="w-8 h-1 bg-gray-600 rounded"></div>
                                    </div>
                                    <div className="bg-[#3B82F6] rounded p-1 ml-3">
                                        <div className="w-6 h-1 bg-white/80 rounded"></div>
                                    </div>
                                </div>
                            </div>
 
                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Step Info */}
            <div className="text-center">
                <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
                    <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
                    <span className="text-white font-semibold">Step 3</span>
                </div>
                <h3 className="text-[32px] text-white mb-3 mt-7">Talk</h3>
                <p className="text-gray-400 text-[20px]">Have real conversations that feel natural and alive.</p>
            </div>
 
        </div>
    );
};
 
export default Step3;
 