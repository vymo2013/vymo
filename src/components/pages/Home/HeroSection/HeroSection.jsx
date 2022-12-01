import React from 'react';
import Button from '../../../Button/Button';
import DeployedSection from '../../../sections/DeployedSection';
import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="relative section-pad hero-section">
      <div className="container">
        <div className="w-full md:w-3/4 mx-auto">
          <h2 className="text-32 md:text-64 tracking-tighter font-bold text-center hidden md:block mt-6 mb-1 mx-0">
            Drive sales productivity. Bottom up.
          </h2>
          <h2 className="text-32 md:text-64 tracking-tighter font-bold text-center block md:hidden mt-5">
            Fix your sales engagement. Improve outcomes.
          </h2>
          <p className="text-[21px] opacity-60 text-center font-medium mt-2 hidden md:block">
            Give your sales teams and leadership visibility and control.
          </p>
          <p className="text-16 opacity-60 text-center font-medium mt-2 block md:hidden">
            Vymo captures sales activities automatically and nudges next best
            actions contextually to improve outcomes. Give your sales teams and
            leadership visibility and control.
          </p>
          <div className="hidden md:flex relative mt-5">
            <div className="flex-1">
              <Button className="float-right  md:py-[16px] md:px-[24px]">
                See Vymo in action
              </Button>
            </div>
            <div className="flex-1">
              <Button secondary className="ml-1  md:py-[16px] md:px-[24px]">
                View Solutions
              </Button>
              <div className="z-0 inline-block absolute -translate-y-1/3 translate-x-3 rotate-[5deg] -top-1">
                <img src="/img/design-element/curve-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 mb-5 md:mb-7">
          <div className="client-card hidden md:block relative z-30">
            <div className="client-img">
              <img
                src="/img/peter-aiden.png"
                alt=""
                width="281px"
                height="364px"
              />
              <div className="absolute bg-primaryRed client-dialog md:-bottom-4 lg:-bottom-3 xl:-bottom-2 right-0 md:translate-x-[85%] lg:translate-x-[80%] xl:translate-x-2/3 w-[240px]">
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
              </div>
            </div>
            <div className="absolute bottom-0 left-2">
              <p className="client-name">Peter Aiden</p>
              <p className="client-profession">Insurance Agent</p>
            </div>
          </div>
          <div className="client-card relative z-20">
            <div className="client-img">
              <img
                src="/img/emily-rose.png"
                alt=""
                width="355px"
                height="443px"
              />
              <div className="absolute bg-primaryRed client-dialog md:bottom-[60%]  xl:bottom-1/2 right-0 md:translate-x-[60%] lg:translate-x-[35%] translate-y-full xl:translate-x-1/4 w-[300px] hidden md:block">
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
              </div>
              <div className="absolute bg-primaryRed client-dialog bottom-5 left-1 -translate-y-1/2 w-[200px] block md:hidden">
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
              </div>
            </div>
            <div className="absolute bottom-0 left-2">
              <p className="client-name">Emily Rose</p>
              <p className="client-profession">Insurance Agent</p>
            </div>
          </div>
          <div className="client-card relative z-10">
            <div className="client-img">
              <img
                src="/img/jack-mosby.png"
                alt=""
                width="355px"
                height="458px"
              />
              <div className="absolute bg-primaryRed client-dialog md:bottom-[-85px] lg:-bottom-2 xl:bottom-2 right-0 md:translate-x-[60%] lg:translate-x-[65%] xl:translate-x-2/4 w-[300px] hidden md:block">
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
              </div>
              <div className="absolute bg-primaryRed client-dialog bottom-[40%] right-1 w-[200px] block md:hidden">
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
              </div>
            </div>
            <div className="absolute bottom-0 left-2">
              <p className="client-name">Jack Mosby</p>
              <p className="client-profession">Sales Leader</p>
            </div>
          </div>
          <div className="client-card hidden md:block relative z-0">
            <div className="client-img">
              <img
                src="/img/veronika-james.png"
                alt=""
                width="277px"
                height="339px"
              />
            </div>
            <div className="absolute bottom-0 left-2">
              <p className="client-name">Veronika James</p>
              <p className="client-profession">Insurance Agent</p>
            </div>
          </div>
        </div>
        <div className="row justify-center overflow-hidden">
          <DeployedSection />
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