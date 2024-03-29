import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function HeroSection() {
  return (
    <section className="relative section-pad hero-section overflow-hidden">
      <div className="container mt-5 lg:mt-2 xl:mt-6 mb-3">
        <div className="flex flex-wrap justify-between items-center px-[15px] xl:px-0 m-pt-4">
          <div className="col-md col-7 xl:-mt-3 lg:pt-5 xl:pt-  text-center md:text-left lg:text-left self-center">
            <h1 className="mx-auto text-36 md:text-46 xl:text-56 leading-[38px] lg:mt-1 font-iight md:leading-[56px] xl:leading-[60px]">
              <span className="font-bold">Convert</span>{' '}
              <i>more leads to customers,</i>{' '}
              <span className="font-bold">predictably</span>.
            </h1>
            <p className="text-darkPurple font-medium text-16 md:text-16 leading-5 md:leading-7 mt-2 leading-[28px] opacity-90 xs:mt-2">
              Take control of your entire lead lifecycle with Vymo’s Lead
              Management System. wSet up complex Lead Workflows for different
              types of leads and channels, gamify your Sales Playbook, and
              integrate your sales funnel so your lead progresses through your
              funnel hassle-free.
              {/* <span className="block mt-2">
                Set up complex Lead Workflows for different types of leads and
                channels, gamify your Sales Playbook, and integrate your sales
                funnel so your lead progresses through your funnel hassle-free.
              </span> */}
            </p>
            <Button className="mt-1 md:mt-2 red-btn">
              See how we can help
            </Button>
          </div>
          <div className="col-md col-5 select-none mt-[40px] xl:mt-0">
            <div className="lg:w-[700px] xl:w-[800px] relative md:pl-2 lead-banner">
              <img
                src="/img/lead-management/hero-bg15.png"
                width="100%"
                alt="lead management banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
