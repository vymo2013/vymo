import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function HeroSection() {
  return (
    <section className="relative section-pad hero-section overflow-hidden">
      <div className="container mt-5 xl:mt-0">
        <div className="flex flex-wrap justify-between items-center px-[15px] xl:px-0">
          <div className="w-full xl:w-[47%] text-center xl:text-left xl:-mt-3">
            <SectionHeading className="heading">
              Don’t let a single lead slip out of your funnel unaccounted.
            </SectionHeading>
            <p className="text-darkPurple font-medium opacity-60 leading-5 md:leading-7 mt-1">
              Take control of your entire lead lifecycle with Vymo’s Lead
              Management System.{' '}
              <span className="block mt-2">
                Set up complex Lead Workflows for different types of leads and
                channels, gamify your Sales Playbook, and integrate your sales
                funnel so your lead progresses through your funnel hassle-free.
              </span>
            </p>
            <Button className="mt-1 md:mt-2 started-btn" large>
              See how we can help
            </Button>
          </div>
          <div className="w-full xl:w-[50%] select-none mt-[40px] xl:mt-0">
            <div className="xl:h-[577px] xl:w-[829px] relative">
              <img
                src="/img/lead-management/hero-bg15.png"
                width="1243"
                height="866"
                alt=""
                className="max-w-[120%] xl:max-w-[110%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
