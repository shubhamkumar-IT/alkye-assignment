"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VRSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="w-full px-2 md:px-10  py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        autoplay={{ delay: 5000 }}
        loop
        className="relative"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          768: {
            slidesPerView: 1.5, // Tablets & up
          },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/details/${item.id}`}>
              <div className="relative group h-[90vh]  rounded-xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-fill md:object-cover   transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Text Content */}
                <div className="relative z-20 flex flex-col  items-start h-full p-4 md:p-16 text-white max-w-3xl">
                  <span className="bg-black text-white px-3 py-1 text-lg rounded-full mb-3 animate-slide-up">
                    {item.prompt}
                  </span>
                  {/* <h2 className="text-4xl font-bold mb-4">{item.title}</h2> */}
                  <p className="text-xl text-white/90 animate-slide-up">
                    {item.short_description}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
