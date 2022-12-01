import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function HeroSection() {
  return (
    <section className="relative section-pad hero-section overflow-x-hidden">
      <div className="container mt-5 lg:mt-[54px]">
        <div className="flex flex-wrap justify-between items-center px-[15px] lg:px-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:-mt-3">
            <SectionHeading
              textAlign="center"
              className="max-w-[280px] md:max-w-[600px] lg:max-w-[480px] lg:text-left mx-auto lg:mx-0">
              Engineered to deliver Insights and interventions
            </SectionHeading>
            <p className="text-darkPurple font-medium opacity-60 leading-5 md:leading-7 mt-1">
              You need more than systems of record to improve sales activities
              and customer experience, you need insights delivered real time in
              the field to make a impact.
            </p>
            <Button className="mt-1 md:mt-2 started-btn" large responsiveLarge>
              Get Started
            </Button>
          </div>
          <div className="w-full lg:w-[50%] select-none mt-[40px] lg:mt-0">
            <div className="relative">
              <img
                className="absolute w-[120%] lg:max-w-[120%] -top-4 lg:-top-6"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
