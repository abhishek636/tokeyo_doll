'use client';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function SwiperGallery() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      modules: [Autoplay],
      simulateTouch: true,
      watchSlidesProgress: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  const slidesData = [
    {
      videoSrc: '/videos/doll.mp4',
      title: 'Aria',
      description: ' Smart & supportive, great for learning and brainstorming',
    },
    {
      videoSrc: '/videos/doll.mp4', // Change this to your second video file
      title: 'Kai',
      description: 'Energetic & fun, perfect for gaming and casual chats.',
    },
    {
      videoSrc: '/videos/doll.mp4', // Change this to your third video file
      title: 'Luna',
      description: 'Calm & thoughtful, always there to listen and guide.',
    }
  ];

  const slides = slidesData.concat(slidesData).map((slide, index) => (
    <div key={index} className="swiper-slide">
      <div className="relative w-[60%] max-w-md mx-auto">
        <video
          src={slide.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 95.42%)',
          }}
        />
      </div>
      <p className="mt-2 font-medium text-white text-3xl text-center w-[60%] mx-auto">
        {slide.title}
      </p>
      <p className="mt-2 text-sm text-center w-[55%] mx-auto">
        {slide.description}
      </p>
    </div>
  ));

  return (
    <div className='md:py-20 py-10'>
      <h2 className='text-center block lg:mb-20 md:mb-32 sm:mb-32 mb-16'>Meet Your AI Characters</h2>
      <div className="relative w-full my-10 mx-auto">
        <div className="swiper-container max-w-[1300px] pt-[15px] mx-auto overflow-hidden">
          <div className="swiper-wrapper">
            {slides}
          </div>
          <span className="slider-frame absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] 2xl:w-[18%] xl:w-[20%] lg:w-[25%] md:w-[50%] sm:w-[60%] w-[65%]">
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
      </div>
      <div className='flex justify-center'>
        <Link href="#" className="px-9 py-3 rounded-full bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition mt-20">
          Pick one to start, then make it truly yours
        </Link>
      </div>
    </div>
  );
}