import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import Button from '../../../Button/Button';
import BenifitCard from './BenifitCard';
import './BenifitsSection.scss';
import ClientBenifitSlider from './ClientBenifitSlider';
function BenifitsSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="benifits-section section-pad relative fade-in"
      ref={ref}>
      <div className="container">
        <div className="row relative z-10">
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-1">
            <h2 className="text-center lg:text-left text-28 md:text-48 text-white font-bold leading-[38px] md:leading-[64px]">
              The single pane of glass for sellers. Get data, insights, and
              interventions when you need it.
            </h2>
            <p className="text-center lg:text-left  text-16 text-white opacity-60 mt-2 mb-[40px]">
              With Vymo your sellers don’t have to toggle between multiple
              systems for Planning, Prospecting, or Servicing. Vymo integrates
              with all your systems and records to turn them into insight and
              actions for your sellers. Everything they need to build great
              relationships, meet their income goals, and win - on one app.
            </p>
            <Button className="block mx-auto lg:mx-0 md:py-2 md:px-4">
              More customer stories here
            </Button>
          </div>
          <div className="w-full lg:w-1/2 p-2 md:p-1 mt-3 md:mt-6 lg:mt-0 relative z-10">
            <div className="grid grid-cols-2">
              <BenifitCard
                img="/img/logo/bnp.png"
                width="154px"
                height="33px"
                alt="BNP PARIBAS"
                description="Increase in revenue generated per sales rep"
                percentage={15}
                className="mr-1 md:mr-2"
              />
              <BenifitCard
                img="/img/logo/sun-life.png"
                width="127px"
                height="31px"
                alt="Sun Life"
                description="Reduction in ‘time to win’ a new customer"
                percentage={65}
                className="ml-1 md:ml-2"
              />
              <div className="col-span-2 text-white bg-[#2C233D] py-4 px-4 rounded-2xl benifit-card my-2 md:my-4">
                <ClientBenifitSlider />
              </div>
              <BenifitCard
                img="/img/logo/sun-life.png"
                width="127px"
                height="31px"
                alt="Sun Life"
                description="Increase in deals per RM"
                percentage={14}
                className="mr-1 md:mr-2"
              />
              <BenifitCard
                img="/img/logo/hdfc-bank.png"
                width="154px"
                height="26px"
                alt="HDFC Bank"
                description="Increase in Sales Productivity in 5 months"
                percentage={13}
                className="ml-1 md:ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-1/4 z-0 pointer-events-none invisible lg:visible">
        <img src="/img/design-element/benifit-curve.svg" alt="" />
      </div>
    </section>
  );
}

export default BenifitsSection;
