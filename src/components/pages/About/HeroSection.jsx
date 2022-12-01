import React from 'react';
function HeroSection() {
  return (
    <section className="relative section-pad about-hero-section bg-lightBg2">
      <div className="container">
        <div className="relative h-[550px] sm:h-[660px] md:h-auto">
          <div className="w-full md:w-2/4 mx-auto text-center relative mb-7">
            <h2 className="text-36 md:text-64 tracking-[-2px]  leading-[44px] md:leading-[80px] font-bold text-center mt-6 mb-1 mx-0">
              Helping sales teams do more
            </h2>
            <p className="text-whale text-16 md:text-18 mt-1 font-medium">
              Vymo is a sales engagement platform for global enterprises.
            </p>
            <img
              className="top-[280px] sm:top-[350px] md:top-auto relative md:absolute mx-auto w-4/5 md:w-full md:scale-110 left-3 bottom-0 md:bottom-[-136px]"
              src="/img/design-element/curve-about-hero.svg"
              alt=""
            />
          </div>
          <img
            className="absolute left-0 lg:left-4 bottom-[100px] sm:bottom-[180px] md:bottom-[-136px] w-[181px] sm:w-[220px] md:w-auto"
            src="/img/about/hero-1.png"
            alt=""
            width="269px"
            height="394px"
          />
          <img
            className="absolute right-0 bottom-[200px] sm:bottom-[260px] md:bottom-[-136px] w-[181px] sm:w-[220px] md:w-auto"
            src="/img/about/hero-2.png"
            alt=""
            width="256px"
            height="277px"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
