
'use client';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function SwiperGallery() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      modules: [Autoplay, EffectCoverflow],
      simulateTouch: true,
      watchSlidesProgress: true,
      loop: true,
      speed: 3000,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  const slidesData = [
    {
      videoSrc: '/videos/doll.mp4',
      title: 'Aria',
      description: 'Smart & supportive, great for learning and brainstorming',
    },
    {
      videoSrc: '/videos/doll2.mp4',
      title: 'Kai',
      description: 'Energetic & fun, perfect for gaming and casual chats.',
    },
    {
      videoSrc: '/videos/doll3.mp4',
      title: 'Luna',
      description: 'Calm & thoughtful, always there to listen and guide.',
    },
  ];

  const slides = slidesData.concat(slidesData).map((slide, index) => (
    <div key={index} className="swiper-slide flex justify-center items-center">
      <div className="relative w-full max-w-sm mx-auto">
        <video
          src={slide.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover px-4 sm:px-0"
        />
        {/* <Image src="/fader.png" width={1096} height={700} alt="hand" className="absolute bottom-0 left-0" priority loading="eager"/> */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 95.42%)',
          }}
        /> */}
      </div>
      <div className="text-content -mt-12 w-full text-center p-4 z-40 relative">
        <p className="font-medium text-white text-3xl">{slide.title}</p>
        <p className="mt-2 text-sm text-center w-[55%] mx-auto">{slide.description}</p>
      </div>
    </div>
  ));

  return (
    <div className='md:py-20 py-10'>
      <h2 className='text-center block mb-16'>Meet Your AI Characters</h2>
      <div className="relative w-full mx-auto 2xl:h-[785px] xl:h-[810px] lg:h-[745px] sm:h-[856px] h-[684px] flex items-center">
        <div className="relative swiper-container max-w-[1300px] pt-[15px] mx-auto overflow-hidden">
          <div className="swiper-wrapper h-full flex items-center">
            {slides}
          </div>

        </div>
        <span className="slider-frame absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] 2xl:w-[388px] xl:w-[400px] lg:w-[352px] sm:w-[438px] w-[338px]">
          <Image
            src="/iPhone14Pro.svg"
            alt="Swiper frame decoration"
            width={800}
            height={600}
            className="w-full h-full"
            priority
          />
        </span>
      </div>
      <div className='flex justify-center'>
        <Link href="#" className="px-9 py-3 rounded-full bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition mt-16">
          Pick one to start, then make it truly yours
        </Link>
      </div>
    </div>
  );
}
