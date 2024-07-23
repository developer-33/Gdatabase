import React, { useState } from 'react';




const Carousel = ({carouselElement,items,options,onNext,onPrev,onChange,instanceOptions}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="carousel-example" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* Item 1 */}
        <div
          className={`${
            currentSlide === 0 ? 'block' : 'hidden'
          } duration-700 ease-in-out`}
        >
          <img
            src="/src/client/assets/call0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="Slide 1"
          />
        </div>
        {/* Item 2 */}
        <div
          className={`${
            currentSlide === 1 ? 'block' : 'hidden'
          } duration-700 ease-in-out`}
        >
          <img
            src="/src/client/assets/call1.jpeg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="Slide 2"
          />
        </div>
        {/* Item 3 */}
        <div
          className={`${
            currentSlide === 2 ? 'block' : 'hidden'
          } duration-700 ease-in-out`}
        >
          <img
            src="/src/client/assets/call13.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="Slide 3"
          />
        </div>
        {/* Item 4 */}
        <div
          className={`${
            currentSlide === 3 ? 'block' : 'hidden'
          } duration-700 ease-in-out`}
        >
          <img
            src="/src/client/assets/call2.webp"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="Slide 4"
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
