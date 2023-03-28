import React from 'react';
import Button from '../../../Button/Button';
import DeployedSection from '../../../sections/DeployedSection';
import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="relative section-pad home-page hero-section">
      <div className="container box">
        <div className="w-full mx-auto xl:mt-6 pt-6 pb-0">
          <h1 className="mt-2 text-32 md:text-52 hidden md:block mb-1 mx-auto text-center xl:leading-[64px] pb-4">
            <span className="font-bold">
              Sales Engagement Platform of choice for the World's
            </span>
            <i> Leading Financial Institutions. </i>
          </h1>
          <div className="pb-[48px] md:pb-[30px]">
            <DeployedSection />
          </div>
          <div className="hidden md:flex relative mt-0">
            <div className="flex-1">
              <a href="#!">
                <Button className="md:mt-2 started-btn red-btn mx-auto flex">
                  See how Vymo can help
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
