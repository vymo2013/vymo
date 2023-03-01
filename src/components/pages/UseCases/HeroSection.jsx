import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';

function HeroSection() {
  return (
    <section className="relative section-pad bg-lightBg2 hero-section overflow-hidden">
      <div className="container mt-4 md:mt-6 xl:mt-6">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-[41.5%] text-center xl:text-left xl:mt-4">
            <SectionHeading className="heading">
              We make wholesaler excellence happen
            </SectionHeading>
            <p className="text-darkPurple font-medium opacity-60 leading-5 md:leading-7 mt-1">
              Wholesalers and Marketing Reps have to maintain relationships
              across vast producer networks, deal with complex onboarding, and
              coach their agencies to success. Vymo helps wholesalers juggle
              their roles efficiently and productively
            </p>
            <Button className="mt-1 md:mt-2 started-btn red-btn">Get Started</Button>
          </div>
          <div className="w-full xl:w-[58%] select-none mt-[-82px] xl:mt-0">
            <div className="relative bottom-[-82px] xl:bottom-0 xl:absolute xl:h-[682px] xl:w-[1120px]">
              <img
                // width="1289"
                // height="1022"
                // width="1120"
                height="682"
                className="h-full"
                src="/img/use-cases/hero-bg2.png"
                alt=""
              />
              <div className="play-button top-[-140px] left-[28%]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
