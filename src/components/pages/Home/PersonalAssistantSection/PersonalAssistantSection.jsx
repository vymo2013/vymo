import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PersonalAssistantSvg from '../../../assets/PersonalAssistantSvg';
import Button from '../../../Button/Button';
import SectionHeading from '../../../Heading/SectionHeading';
import './PersonalAssistantSection.scss';
gsap.registerPlugin(ScrollTrigger);
function PersonalAssistantSection() {
  useEffect(() => {
    const tabs = gsap.utils.toArray('.tab-item');
    const mm = gsap.matchMedia();
    // const t1 = gsap.to(tabs[0], {
    //   scale: 0.98,
    //   scrollTrigger: {
    //     trigger: tabs[0],
    //     start: 'center center',
    //     endTrigger: tabs[1],
    //     end: 'bottom 50%+=250px',
    //     // markers: true,
    //     pin: true,
    //     // anticipatePin: 1,
    //   },
    // });
    mm.add('(max-width:768px)', () => {
      // console.log('(max-width:767px)');
      const t1 = gsap.to(tabs[0], {
        // scale: 0.98,
        scrollTrigger: {
          trigger: tabs[0],
          start: 'center center',
          endTrigger: tabs[1],
          end: 'center 50%+=80px',
          // markers: true,
          pin: true,
          // anticipatePin: 1,
        },
      });
      const t5 = gsap.to(tabs[1], {
        scrollTrigger: {
          trigger: tabs[1],
          start: 'center center',
          end: 'bottom bottom+=20px',
          endTrigger: '.tab-container',
          // pin: true,
          // markers: true,
        },
      });
      return () => {
        t1.kill();
        t5.kill();
      };
    });
    mm.add('(min-width:1024px) and (max-width:1600px)', () => {
      const t1 = gsap.to(tabs[0], {
        scale: 0.98,
        scrollTrigger: {
          trigger: tabs[0],
          start: 'center center',
          endTrigger: tabs[1],
          end: 'bottom 50%+=250px',
          // markers: true,
          pin: true,
          // anticipatePin: 1,
        },
      });
      const t2 = gsap.to('.first-heading', {
        y: '-45%',
        scrollTrigger: {
          trigger: tabs[0],
          start: 'center center',
          endTrigger: tabs[1],
          end: 'bottom 50%+=250px',
          // markers: true,
          scrub: true,
        },
      });
      const t5 = gsap.to(tabs[1], {
        scrollTrigger: {
          trigger: tabs[1],
          start: 'center center',
          end: 'bottom bottom',
          endTrigger: '.tab-container',
          pin: true,
        },
      });
      return () => {
        t1.kill();
        t2.kill();
        t5.kill();
        // t3.kill();
        // t4.kill();
      };
    });
    mm.add('(min-width:768px) and (max-width:1023px)', () => {
      const t1 = gsap.to(tabs[0], {
        scale: 0.98,
        scrollTrigger: {
          trigger: tabs[0],
          start: 'center center',
          endTrigger: tabs[1],
          end: 'bottom 50%+=250px',
          // markers: true,
          pin: true,
          // anticipatePin: 1,
        },
      });
      const t2 = gsap.to('.first-heading', {
        y: '-52%',
        scrollTrigger: {
          trigger: tabs[0],
          start: 'center center',
          endTrigger: tabs[1],
          end: 'bottom 50%+=250px',
          // markers: true,
          scrub: true,
        },
      });
      const t5 = gsap.to(tabs[1], {
        scrollTrigger: {
          trigger: tabs[1],
          start: 'center center',
          end: 'bottom bottom',
          endTrigger: '.tab-container',
          pin: true,
        },
      });
      // const t3 = gsap.to('.first-heading .tab-content', {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: tabs[0],
      //     start: 'center center',
      //     endTrigger: tabs[1],
      //     end: 'bottom 50%+=250px',
      //     // markers: true,
      //     scrub: true,
      //   },
      // });
      // const t4 = gsap.to('.tab-svg', {
      //   opacity: 0,
      //   y: 50,
      //   scrollTrigger: {
      //     trigger: tabs[0],
      //     start: 'center center',
      //     endTrigger: tabs[1],
      //     end: 'bottom 50%+=250px',
      //     // markers: true,
      //     scrub: true,
      //   },
      // });
      // const t5 = gsap.to(tabs[1], {
      //   scrollTrigger: {
      //     trigger: tabs[1],
      //     start: 'center center',
      //     end: 'bottom bottom',
      //     endTrigger: '.tab-container',
      //     pin: true,
      //   },
      // });
      return () => {
        t1.kill();
        t2.kill();
        // t3.kill();
        // t4.kill();
        t5.kill();
      };
    });
    const t3 = gsap.to('.first-heading .tab-content', {
      opacity: 0,
      scrollTrigger: {
        trigger: tabs[0],
        start: 'center center',
        endTrigger: tabs[1],
        end: 'bottom 50%+=250px',
        // markers: true,
        scrub: true,
      },
    });
    const t4 = gsap.to('.tab-svg', {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: tabs[0],
        start: 'center center',
        endTrigger: tabs[1],
        end: 'bottom 50%+=250px',
        // markers: true,
        scrub: true,
      },
    });
    // const t5 = gsap.to(tabs[1], {
    //   scrollTrigger: {
    //     trigger: tabs[1],
    //     start: 'center center',
    //     end: 'bottom bottom',
    //     endTrigger: '.tab-container',
    //     pin: true,
    //   },
    // });
    return () => {
      // t1.kill();
      mm.kill();
      t3.kill();
      t4.kill();
      // t5.kill();
    };
  }, []);
  return (
    <section
      className="section-pad personal-assistant-section "
      // ref={ref}
    >
      <div className="container z-10">
        <SectionHeading className="w-full lg:w-2/4 mx-auto leading-[38px] md:leading-tight">
          The power of an intelligent Assistant and a Coachs{' '}
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline -mt-1 md:-mt-2 scale-50 md:scale-100">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1324 0H28.4609L19.8279 11.4301H36L7.33735 40L16.0779 20.7353H0L15.1324 0Z"
              fill="#C7E3E4"
            />
          </svg>
        </SectionHeading>
        {/* <div className="h-[500px] bg-purple my-5"></div> */}
        <div className="flex flex-col relative tab-container py-5">
          <div
            // role="button"
            className="tab-item bg-lightPurple relative h-auto md:h-[500px] flex md:flex-row py-5 px-2 md:px-5 justify-center md:justify-between items-center rounded-3xl flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/4 lg:w-1/2 heading-container first-heading">
              <h3 className="text-white text-center md:text-left text-22 md:text-28 lg:text-32 tracking-tighter font-bold mb-1">
                <span className="hidden md:inline">1.</span> Personal Assistant
              </h3>
              <div className="tab-content text-center md:text-left">
                <p className="text-white opacity-60 text-14 lg:text-16 leading-5 lg:leading-7 md:max-w-[420px] lg:max-w-[400px]">
                  Vymo automatically captures all sales activities so your
                  sellers don’t have to report them manually. Vymo also helps
                  sellers plan their schedules so they can engage with customers
                  or partners intelligently
                </p>
                <Button
                  secondary
                  secondaryWhite
                  chevron
                  className="mb-3 md:mt-3 md:mb-0">
                  See how it works
                </Button>
              </div>
            </div>
            <div className="tab-svg">
              <PersonalAssistantSvg />
            </div>
          </div>
          <div
            // role="button"
            className="tab-item  bg-purple top-[70px] h-auto md:h-[500px]  flex flex-row py-5 px-2 md:px-5 justify-center md:justify-between items-center rounded-3xl  flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/4 lg:w-1/2 heading-container">
              <h3 className="text-white text-center md:text-left text-22 md:text-28 lg:text-32 tracking-tighter font-bold mb-1">
                <span className="hidden md:inline">2.</span> Personal Coach
              </h3>
              <div className="tab-content text-center md:text-left">
                <p className="text-white opacity-100 text-14 lg:text-16 leading-5 lg:leading-7 md:max-w-[420px] lg:max-w-[400px]">
                  Vymo understands what makes your best sellers successful and
                  nudges best behaviors proactively to the rest of your team.
                  Vymo also suggests interventions based on insights to improve
                  outcomes.
                </p>
                <Button
                  secondary
                  secondaryWhite
                  chevron
                  className="mt-0 md:mt-3 mb-3 md:mb-0 mx-auto">
                  See how it works
                </Button>
              </div>
            </div>
            <div className="couch-img md:pl-1">
              <img src="/img/couch.svg" width="393" height="440" alt="couch" />
            </div>
            {/* <div className="tab-svg">
              <PersonalAssistantSvg />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalAssistantSection;
