import React from 'react';
import Button from '../../../Button/Button';
import DeployedSection from '../../../sections/DeployedSection';
import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="relative section-pad home-page hero-section">
      <div className="container box">
        <div className="w-full mx-auto">
          <p className="text-[20px] opacity-65 font-light mt-6 hidden md:block f-color">
            Give your sales teams and leadership visibility and control.
          </p>
          <h1 className="text-32 md:text-64 hidden md:block mb-1 mx-0">
            <span className="font-bold">Drive</span><i> sales productivity</i>. <span className="font-bold d-bck">Bottom up.</span>
          </h1>
          
          <p className="text-16 opacity-90 text-center font-medium mt-6 mb-1 block md:hidden">
            <span className="font-medium text-[42px] l-h40"> <span className="font-bold">Drive</span><i> sales productivity</i>. <span className="font-bold d-bck">Bottom up.</span></span> </p>
            <p className="text-14 opacity-60 text-center font-medium pt-1 mb-4 block md:hidden">  Give your sales teams and leadership visibility and control.</p>
            <p className="md:hidden text-center"><a href="#!" className="float-btn r0">
                See Vymo in action →
            </a></p>

          <div className="hidden md:flex relative mt-0">
            <div className="flex-1">
              {/* <Button className="float-right  md:py-[16px] md:px-[24px]"> */}
              <a href="#!" className="float-right float-btn">
                See Vymo in action →
              </a>
            </div>
            {/*<div className="flex-1">
              <Button secondary className="ml-1  md:py-[16px] md:px-[24px]">
                View Solutions
              </Button>
              <div className="z-0 inline-block absolute -translate-y-1/3 translate-x-3 rotate-[5deg] -top-1">
                <img src="/img/design-element/curve-arrow.svg" alt="" />
              </div>
            </div>*/}
          </div>
        </div>
        <div className="flex mt-2 mb-4 xs-pad">  
          <div className="client-card hidden md:block relative z-30">
            <div className="client-img">
              <img
                src="/img/frame1.webp"
                alt=""
                width="214px"
                height="215px"
              />
              {/*<div className="absolute bg-primaryRed client-dialog md:-bottom-4 lg:-bottom-3 xl:-bottom-2 right-0 md:translate-x-[85%] lg:translate-x-[80%] xl:translate-x-2/3 w-[240px]">
                <div className="flex flex-row">
                  <div>
                    <p className="action-text action-title">
                      Judy Green is meeting John Smith.
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="action-text text-lightGreen">
                        Set up a joint Call?
                      </p>
                      <div className="action-icons mr-2">
                        <img
                          alt=""
                          src="/img/icons/red-close.svg"
                          width="25px"
                          height="25px"
                        />
                        <img
                          alt=""
                          src="/img/icons/green-tick.svg"
                          width="25px"
                          height="25px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
            {/*<div className="absolute bottom-0 left-2">
              <p className="client-name">Peter Aiden</p>
              <p className="client-profession">Insurance Agent</p>
            </div>*/}
          </div>
          <div className="client-card relative z-20">
            <div className="client-img">
              <img
                src="/img/frame2.webp"
                alt=""
                width="223px"
                height="362px"
              />
              {/*<div className="absolute bg-primaryRed client-dialog md:bottom-[60%]  xl:bottom-1/2 right-0 md:translate-x-[60%] lg:translate-x-[35%] translate-y-full xl:translate-x-1/4 w-[300px] hidden md:block">
                <div className="flex flex-row">
                  <div className="mr-2">
                    <img
                      src="/img/icons/calender-hero.svg"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="action-text action-title">
                      Your calendar is free between 4 - 6 PM. Meet
                      <span className="text-lightBlue"> John Smith</span>
                    </p>
                    <div className="relative">
                      <p className="absolute renewal-text bg-primaryRed text-white flex justify-center items-center">
                        <img
                          src="/img/icons/renewal.svg"
                          width="12px"
                          height="12px"
                          alt=""
                        />
                        <span className="inline-block">
                          Renewal due in 14 days
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/*<div className="absolute bg-primaryRed client-dialog bottom-5 left-1 -translate-y-1/2 w-[200px] block md:hidden">
                <div className="flex flex-row">
                  <div className="mr-1">
                    <img
                      src="/img/icons/chart-hero.svg"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="action-text action-title md-text">
                      Renewals are 15% less than usual in South Dakota.
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="action-text text-lightGreen md-text">
                        Call Jack Finch now?
                      </p>
                      <div className="action-icons mr-0">
                        <img
                          alt=""
                          src="/img/icons/red-close.svg"
                          width="25px"
                          height="25px"
                        />
                        <img
                          alt=""
                          src="/img/icons/green-phone.svg"
                          width="25px"
                          height="25px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
            {/*<div className="absolute bottom-0 left-2">
              <p className="client-name">Emily Rose</p>
              <p className="client-profession">Insurance Agent</p>
            </div>*/}
          </div>
          <div className="client-card relative z-10">
            <div className="client-img">
              <img
                src="/img/frame3.webp"
                alt=""
                width="347px"
                height="382px"
              />
              {/*<div className="absolute bg-primaryRed client-dialog md:bottom-[-85px] lg:-bottom-2 xl:bottom-2 right-0 md:translate-x-[60%] lg:translate-x-[65%] xl:translate-x-2/4 w-[300px] hidden md:block">
                <div className="flex flex-row">
                  <div className="mr-2">
                    <img
                      src="/img/icons/chart-hero.svg"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="action-text action-title">
                      Renewals are 15% less than usual in South Dakota.
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="action-text text-lightGreen">
                        Call Jack Finch now?
                      </p>
                      <div className="action-icons mr-2">
                        <img
                          alt=""
                          src="/img/icons/red-close.svg"
                          width="25px"
                          height="25px"
                        />
                        <img
                          alt=""
                          src="/img/icons/green-phone.svg"
                          width="25px"
                          height="25px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/*<div className="absolute bg-primaryRed client-dialog bottom-[40%] right-1 w-[200px] block md:hidden">
                <div className="flex flex-row">
                  <div className="mr-1">
                    <img
                      src="/img/icons/calender-hero.svg"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="action-text action-title md-text">
                      Your calendar is free between 4 - 6 PM. Meet
                      <span className="text-lightBlue"> John Smith</span>
                    </p>
                    <div className="relative">
                      <p className="absolute left-[-25px] bottom-[-22px] renewal-text w-[160px] bg-primaryRed text-white flex justify-center items-center">
                        <img
                          src="/img/icons/renewal.svg"
                          width="12px"
                          height="12px"
                          alt=""
                        />
                        <span className="inline-block">
                          Renewal due in 14 days
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
            {/*<div className="absolute bottom-0 left-2">
              <p className="client-name">Jack Mosby</p>
              <p className="client-profession">Sales Leader</p>
            </div>*/}
          </div>
          <div className="client-card hidden md:block relative z-0">
            <div className="client-img">
              <img
                src="/img/frame4.webp"
                alt=""
                width="151px"
                height="151px"
              />
            </div>
           {/* <div className="absolute bottom-0 left-2">
              <p className="client-name">Veronika James</p>
              <p className="client-profession">Insurance Agent</p>
            </div>*/}
          </div>
          <div className="client-card hidden md:block relative z-0">
            <div className="client-img">
              <img
                src="/img/frame5.webp"
                alt=""
                width="160px"
                height="255px"
              />
            </div>
           {/* <div className="absolute bottom-0 left-2">
              <p className="client-name">Veronika James</p>
              <p className="client-profession">Insurance Agent</p>
            </div>*/}
          </div>
        </div>
        <div className="container home">
          <div className="row overflow-hidden col-xs-12 logo-shw">
            <DeployedSection />
          </div>
        </div>
        {/* <div className="grid grid-cols-3 md:grid-cols-5 logo-container">
          {logos.map((l) => (
            <div key={l.src} className="mx-auto my-2 md:my-auto">
              <img
                src={`/img/logo/${l.src}`}
                alt={l.src}
                width={l.width}
                height={l.height}
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
