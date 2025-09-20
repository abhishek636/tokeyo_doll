'use client';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function SwiperComponent() {
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
          controls={false}
          className="sm:w-full w-[280px] mx-auto h-auto object-cover sm:px-0"
          loading="lazy"
          poster="/assets/images/placeholder.jpg" // Add a poster image
        />
      </div>
      <div className="text-content w-full text-center p-4 z-40 relative z-20">
        <p className="font-medium text-white text-3xl relative z-50">{slide.title}</p>
        <p className="mt-2 text-sm text-[#A0A0A0] text-center w-[55%] mx-auto">{slide.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="relative swiper-container max-w-[1300px] pt-[15px] mx-auto overflow-hidden">
      <div className="swiper-wrapper h-full flex items-center">
        {slides}
      </div>
      <span className="slider-frame absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 2xl:w-[388px] xl:w-[400px] lg:w-[352px] sm:w-[438px] w-[280px]">
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
  );
}
