import React from 'react';
import Button from '../../../Button/Button';
import SectionHeading from '../../../Heading/SectionHeading';

function HeroSection() {
  return (
    <section className="relative section-pad bg-lightBg2 hero-section overflow-hidden  xs:mb-4">
      <div className="container mt-4 md:mt-6 xl:mt-6 lg:mb-3">
        <div className="flex flex-wrap">
          <div className="col-md col-6 text-center md:text-left lg:text-left xl:text-left xl:mt-5 md:mb-6">
           <h1
              className="mx-auto text-36 md:text-42 xl:text-48 leading-[38px] lg:mt-1 font-iight md:leading-[48px] xl:leading-[64px] xs:mt-2">
              <span className="font-bold">Enhance the</span> <i>Wholesaler Experience</i> <span className="font-bold">and Create Profitable Agencies</span>.
            </h1>

            <p className="text-darkPurple font-medium opacity-90 leading-5 md:leading-7 mt-2">
              On a day-to-day basis, insurance wholesalers need to manage multiple interests, swifty onboard their agencies, and be a trusted partner 
              to everyone in their network. Not to mention, they need to stay on top of their performance. Vymo makes their lives easier by helping 
              them onboard, grow, retain and manage their agencies efficiently and automatically.
            </p>
            <Button className="mt-1 md:mt-2 started-btn red-btn">Get Started</Button>
          </div>
          <div className="col-md col-6 select-none lg:mt-[-2px] xl:mt-[-82px] xs:mb-4">
            <div className="relative xl:h-[582px] xl:w-[720px]">
              <img
                // width="1289"
                // height="1022"
                // width="1120"
                height="682"
                className="h-full"
                src="/img/use-cases/hero-bg2.png"
                alt="wholesaler banner"
              />
              {/* <div className="play-button top-[-140px] left-[28%]">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 10.268C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16667 24.0281 0.5 23.0659 0.5 21.5263V2.47372C0.5 0.934118 2.16667 -0.0281307 3.5 0.74167L20 10.268Z"
                    fill="white"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
