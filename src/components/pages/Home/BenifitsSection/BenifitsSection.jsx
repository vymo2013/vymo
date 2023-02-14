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
      className="benifits-section relative fade-in"
      ref={ref}>
      <div className="box">
        <div className="row relative z-10 col-xs-12 col-10 offset-1 section-pad m-pad">
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-1">
            <h2 className="text-center lg:text-left text-28 md:text-48 text-white font-light leading-[38px] md:leading-[64px]">
              <span className="font-bold">The</span><i> single </i><span className="font-bold">pane of glass for sellers.</span>
            </h2>
            <p className="text-center lg:text-left  text-20 text-white opacity-70 mt-2 mb-[40px]">
              Get data, insights, and interventions when you need it.
            </p>
            {/*<Button className="block mx-auto lg:mx-0 md:py-2 md:px-4">
              More customer stories here
            </Button>*/}
          </div>
          <div className="w-full lg:w-1/2 p-2 md:p-1 mt-3 md:mt-6 lg:mt-0 relative z-10">

            <p className="text-center lg:text-left  text-18 text-white opacity-70 mt-2 mb-[20px] pd-40r">
              With Vymo your sellers don’t have to toggle between multiple systems for Planning, Prospecting, or Servicing. Vymo integrates with all your systems and turns your systems of record into insights and actions for your sellers.
            </p>
            
            <a href="#!" className="yell-btn">
                More customer stories here →
            </a>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="row relative z-10 col-xs-12 col-10 offset-1 section-pad2 mt-2">
            <div className="grid grid-cols-4 col-12 mb-4 mt-3">
              <div className="py-2 rounded-2xl benifit-card h-full">
                <div className="w-full">
                  <img src="/img/logo/hdfc-bank.png" alt="HDFC Bank" width="135px" height="24px" />
                </div>
                <h3 className="mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                  2<b>x</b><span className="relative -left-1"> <img src="/img/arrow-up.png" width="30px" className="imh"/></span></h3>
                <p
                  className="text-12 lg:text-16 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                  Increase in custome <span className="d-bck">sourcing</span>
                </p>
              </div>

              <div className="py-2 rounded-2xl benifit-card h-full">
                <div className="w-full">
                  <img src="/img/logo/sun-life.png" alt="Sun Life" width="127px" height="31px" />
                </div>
                <h3 className="mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                  65<b>%</b><span className="relative -left-1"> <img src="/img/arrow-up.png" width="30px" className="imh"/></span></h3>
                <p
                  className="text-12 lg:text-16 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                  reduction in ‘time to win’ a <span className="d-bck">new customer</span>
                </p>
              </div>

              <div className="py-2 rounded-2xl benifit-card h-full">
                <div className="w-full">
                  <img src="/img/fe-credit.png" alt="FE Credit" width="108px" height="26px" />
                </div>
                <h3 className="mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                  100<b>%</b><span className="relative -left-1"> </span></h3>
                <p
                  className="text-12 lg:text-16 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                  Complete digitization of FEC <span className="d-bck">field sales with Vymo</span>
                </p>
              </div>

              <div className="py-2 rounded-2xl benifit-card h-full">
                <div className="w-full">
                  <img src="/img/bnp.png" alt="BNP Paribas" width="141px" height="30px" />
                </div>
                <h3 className="mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                  15<b>%</b><span className="relative -left-1"> <img src="/img/arrow-up.png" width="30px" className="imh"/></span></h3>
                <p
                  className="text-12 lg:text-16 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                  increase in revenue generated  <span className="d-bck">per sales rep</span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default BenifitsSection;
