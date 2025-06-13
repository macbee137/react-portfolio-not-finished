import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HobbyCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    { src: '/images/carousel/tree.jpg', alt: 'Tree' },
    { src: '/images/carousel/mountain1.jpg', alt: 'Playing guitar' },
    { src: '/images/carousel/dubro.jpg', alt: 'Snowboarding' },
    { src: '/images/carousel/vienna.jpg', alt: 'Hiking in the mountains' },
    { src: '/images/carousel/charlie.jpg', alt: 'Painting as a hobby' },
    { src: '/images/carousel/selas1.jpg', alt: 'Painting as a hobby' },
    { src: '/images/carousel/mountain2.jpg', alt: 'Painting as a hobby' },
    { src: '/images/carousel/selas2.jpg', alt: 'Painting as a hobby' },
  ];

  return (
    <div className="relative w-full bg-my-custom-blue/75 dark:bg-gray-700 p-4 shadow-lg overflow-hidden rounded">
      <div className="relative">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-my-custom-blue to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-my-custom-blue to-transparent z-10" />
        
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="px-2">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-md object-cover mx-auto"
                style={{ maxHeight: '200px' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HobbyCarousel;
