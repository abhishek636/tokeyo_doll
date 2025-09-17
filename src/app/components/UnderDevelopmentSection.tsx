'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Vision',
    subtitle: 'Vision',
    icon: (<img src="/assets/gifs/vision.gif" alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 2,
    title: 'Short-Term Memory',
    subtitle: 'Short-term memory specific setting and management',
    icon: (<img src="/assets/gifs/memory.gif" alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 3,
    title: 'Long-Term Memory',
    subtitle: 'Long-term memory specific settings and management',
    icon: (<img src="/assets/gifs/memory.gif" alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 4,
    title: 'Discord',
    subtitle: 'Chat & voice chat over Discord',
    icon: (<img src="/assets/gifs/discord.gif" alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 5,
    title: 'X / Twitter',
    subtitle: 'X / Twitter and other social media',
    icon: (<img src="/assets/gifs/x.gif" alt="Consciousness Icon" width="98" height="98" />),
  },
];

const UnderDevelopmentSlider = () => {
  return (
    <div className="w-full max-w-full md:max-w-6xl mx-auto text-white">
      <h3 className="text-center mb-6">Under Development</h3>
      <div className="w-full overflow-hidden relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          dir="rtl"
          autoplay={{ 
            delay: 1000, 
            disableOnInteraction: false 
          }}
          speed={2500}
          breakpoints={{
            320: {
              slidesPerView: 1.8,
            },
            480: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper w-full under-development-slider"
        >
          {slides.map(({ id, title, subtitle, icon }) => (
            <SwiperSlide key={id}>
              <div className="bg-black bg-opacity-30 border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 min-h-[320px]">
                <div className="md:w-[138px] md:h-[138px] w-[98px] h-[98px] flex items-center justify-center">{icon}</div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-sm text-gray-300">{subtitle}</p>
                </div>
                <div>
                  <span className="inline-block border border-yellow-400 text-yellow-400 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                    IN PROGRESS
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopmentSlider;
