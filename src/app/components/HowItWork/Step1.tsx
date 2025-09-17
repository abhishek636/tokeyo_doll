// components/Step1.jsx
"use client";
const Step1 = () => {
   const modules = [
    { id: 1, video: "/videos/doll.mp4", title: "Modules" },
    { id: 2, video: "/videos/doll.mp4", title: "Modules" },
    { id: 3, video: "/videos/doll.mp4", title: "Modules" },
  ];
  return (
    <div className="flex flex-col bg-[#1D1D1D] rounded-2xl p-6">
      {/* Character Swiper Section */}
     <div className="flex justify-center items-center gap-3  pt-16">
      {modules.map((module) => (
        <div
          key={module.id}
          className="relative group rounded-xl overflow-hidden cursor-pointer border-2 hover:scale-110 border-transparent hover:border-blue-500 transition-all duration-300"
        >
          {/* Video */}
          <video
            src={module.video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-56 h-60 object-cover"
          />
 
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div
              className="w-full text-center py-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 17, 17, 0) 25.17%, #111111 77.42%)",
              }}
            >
              {module.title}
            </div>
          </div>
 
        </div>
       
      ))}
    </div>
 
      {/* Step Info */}
      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
          <span className="text-white font-semibold">Step 1</span>
        </div>
 
        <h3 className="text-[32px] text-white mb-3 mt-7">Choose a Character</h3>
        <p className="text-gray-400 text-[20px]">
          Start with Aria, Kai, or Luna.
        </p>
      </div>
    </div>
  );
};
 
export default Step1;
 
 