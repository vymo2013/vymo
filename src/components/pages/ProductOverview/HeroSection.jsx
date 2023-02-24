import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function HeroSection() {
  return (
    <section className="relative section-pad hero-section overflow-x-hidden">
      <div className="container mt-5 lg:mt-[0px]">
        <div className="flex flex-wrap justify-between items-center px-[15px] lg:px-0 lg:mt-1 mb-4">

          {/*<div className="w-full lg:w-1/2 text-center lg:text-left lg:-mt-3"></div>*/}

          <div className="w-full text-center lg:-mt-0 bg-vec pb-2">

            <img src="/img/product-overview/p-vector1.svg" width="98%" className="hidden md:block lg:mt-0 md:max-w-[1100px] mx-auto"/>

            <h1
              textAlign="center"
              className="max-w-[280px] md:max-w-[1000px] text-center mx-auto text-36 leading-[44px] md:text-64 lg:mt-1 xs:mt-2 font-iight md:leading-[68px]">
              <span className="font-bold">Engineered to</span> <i>deliver Insights</i> <span className="font-bold">and</span> <i>interventions</i>
            </h1>

            <p className="max-w-[280px] md:max-w-[800px] text-center text-darkPurple font-normal leading-5 md:leading-7 mt-3 mb-4 mx-auto md:text-18">
              You need more than systems of record to improve sales activities
              and customer experience, you need insights delivered real time in
              the field to make a impact.
            </p>

            <a href="#!"><Button className="mt-1 md:mt-2 started-btn red-btn">
              See how Vymo can help
            </Button></a>

          </div>
        {/*  <div className="w-full lg:w-[50%] select-none mt-[40px] lg:mt-0">
            <div className="relative">
              <img
                className="absolute w-[100%] lg:max-w-[100%] -top-4 lg:-top-6"
                src="/img/design-element/zigzag.svg"
                width="743"
                height="629"
                alt=""
              />
              <img
                className="absolute w-6 md:w-auto -top-4 -right-4 md:-right-[68px] md:-top-[68px]"
                src="/img/design-element/star-sonic.svg"
                width="136"
                height="136"
                alt=""
              />
              <img
                className="max-w-[106%] sm:w-full  relative xl:-right-[6%]"
                src="/img/product-overview/hero-bg.png"
                width="596.26"
                height="423"
                alt=""
              />
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
