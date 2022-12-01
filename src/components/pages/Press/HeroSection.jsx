import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';

function HeroSection() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useEffect(() => {
    gsap.set(ref1.current, {
      autoAlpha: 0,
    });
    gsap.set(ref2.current, {
      autoAlpha: 0,
    });
    gsap.set(ref3.current, {
      autoAlpha: 0,
    });
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({ repeat: -1 });
      if (ref1.current && ref2.current && ref3.current) {
        const duration = 3;
        const delay = 1;

        const activeVarient = {
          backgroundColor: '#505ece',
          duration: 0.1,
          delay: 0,
        };
        const originalVarient = {
          backgroundColor: '#3a304e',
          duration: 0.5,
        };
        gsap.set(ref1.current, {
          autoAlpha: 0,
        });
        gsap.set(ref2.current, {
          autoAlpha: 0,
        });
        gsap.set(ref3.current, {
          autoAlpha: 0,
        });
        // gsap.set('.dot-3', {
        //   backgroundColor,
        // });
        tl.to('.dot-3', { backgroundColor: '#505ece', duration: 0.1 }).to(
          ref1.current,
          {
            autoAlpha: 1,
            repeat: 1,
            yoyo: true,
            duration,
          },
        );
        tl.to('.dot-3', originalVarient)
          .to('.dot-4', activeVarient)
          .to(ref2.current, {
            autoAlpha: 1,
            repeat: 1,
            yoyo: true,
            duration,
            delay,
          })
          .to('.dot-4', originalVarient)
          .to('.dot-1', activeVarient)
          .to(ref3.current, {
            autoAlpha: 1,
            repeat: 1,
            yoyo: true,
            duration,
            delay,
          });
      }
      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.kill();
    };
  }, []);
  return (
    <section className="hero-section relative section-pad bg-darkPurple overflow-hidden w-full h-auto md:h-[700px] flex items-center">
      <div className="container relative text-center">
        <div className="flex justify-center items-center flex-col pt-6">
          <div className="max-w-[450px]">
            <SectionHeading className="text-white">
              Press resources for all things Vymo
            </SectionHeading>
          </div>
          <p className="text-white text-16 md:text-18 mt-1 mb-4 font-medium opacity-60">
            For media enquiries, please contact{' '}
            <a href="mailto:press@vymo.com"> press@vymo.com</a>
          </p>
          <Button className="download-btn">
            Download Press Kit
            <img
              src="/img/icons/download.svg"
              width="21"
              height="22"
              alt=""
              className="inline-block ml-1"
            />
          </Button>
        </div>
        <div
          ref={ref1}
          className="absolute top-[25%] invisible lg:visible flex lg:right-2 xl:right-1 rounded-md p-[10px] bg-lightPurple text-white border border-white border-opacity-20 badge select-none pointer-events-none">
          <img src="/img/icons/white-zap.svg" alt="" width="11" height="13" />
          <span className="inline-block ml-[6px] font-medium font-objectivity text-12 leading-[17px]">
            Vymo raises Series C funding
          </span>
        </div>
        <div
          ref={ref2}
          className="absolute top-[-10%] lg:left-2 xl:left-7 invisible lg:visible flex rounded-md p-[10px] bg-lightPurple text-white border border-white border-opacity-20 badge select-none pointer-events-none">
          <img src="/img/icons/white-zap.svg" alt="" width="11" height="13" />
          <span className="inline-block ml-[6px] font-medium font-objectivity text-12 leading-[17px]">
            Vymo raises Series C funding
          </span>
        </div>
        <div
          ref={ref3}
          className="absolute bottom-[-20%] lg:left-2 xl:left-6 invisible lg:visible flex rounded-md p-[10px] bg-lightPurple text-white border border-white border-opacity-20 badge select-none pointer-events-none">
          <img src="/img/icons/white-zap.svg" alt="" width="11" height="13" />
          <span className="inline-block ml-[6px] font-medium font-objectivity text-12 leading-[17px]">
            Vymo raises Series C funding
          </span>
        </div>
      </div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2">
        <div className="dot dot-l dot-1"></div>
        <div className="dot dot-s dot-2"></div>
      </div>
      <div className="circle circle-3">
        <div className="dot dot-l dot-3"></div>
        <div className="dot dot-s dot-4"></div>
      </div>
    </section>
  );
}

export default HeroSection;
