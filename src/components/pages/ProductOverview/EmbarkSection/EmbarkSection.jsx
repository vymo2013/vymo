import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../../../Heading/SectionHeading';
import Plane from './Plane';
import Tabs from '../../../Tabs/Tabs';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    key: 1,
    title: 'Core Modules',
    text: 'Vymo captures sales activities automatically and nudges next best actions contextually to improve outcomes. Give your sales teams and leadership visibility and control.',
  },
  {
    key: 2,
    title: 'Engagement Channels',
    text: 'Vymo captures sales activities automatically and nudges next best actions contextually to improve outcomes.',
  },
  {
    key: 3,
    title: 'Insights & Analytics',
    text: 'Vymo captures sales activities automatically and nudges next best actions contextually to improve outcomes. Give your sales teams and leadership visibility and control.',
  },
  {
    key: 4,
    title: 'Vymo Docs',
    text: 'Vymo captures sales activities automatically and nudges next best actions contextually to improve outcomes.',
  },
  {
    key: 5,
    title: 'Winning Behaviors',
    text: 'Vymo captures sales activities automatically and nudges next best actions contextually to improve outcomes. Give your sales teams and leadership visibility and control.',
  },
];
function EmbarkSection() {
  const containerRef = useRef();
  const lineRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const planes = document.querySelectorAll('.plane-container > svg');
    const contents = document.querySelectorAll('.content-track > div');
    const n = slides.length;
    const mm = gsap.matchMedia();
    mm.add('(min-width:768px)', () => {
      const totalDuration = 1500;
      const singleDuration = totalDuration / n;
      const linetl = gsap.timeline();
      //   gsap.set('.plane-container svg:not(.first)', { opacity: 0 });
      gsap.set('.plane-container > svg', {
        bottom: (i) => (i + 1) * singleDuration,
      });
      gsap.set(contents, { opacity: 0 });

      gsap.set(contents[0], { opacity: 1 });

      ScrollTrigger.create({
        trigger: '.pin-up',
        start: 'top top',
        end: `+=${totalDuration}`,
        // markers: true,
        pin: true,
        scrub: true,
        animation: linetl,
      });
      linetl
        .to(line, { duration: 1 }, 0)
        .to(line, { duration: 0.9, height: '100%', ease: 'none' }, 0);

      //   const planeTl = gsap.timeline();
      const tls = [];
      planes.forEach((p, i) => {
        const tl = gsap.timeline();
        tls.push(tl);
        gsap.set(p, { bottom: 500 });

        // smallTimeline.fromTo(
        //   p,
        //   {
        //     bottom: i * singleDuration,
        //     //   opacity: 0,
        //   },
        //   {
        //     bottom: i * 50,
        //     opacity: 1,
        //     duration: 0.25,
        //     scrollTrigger: {
        //       trigger: container,
        //       //   markers: true,
        //       start: 'top -=' + singleDuration * i,
        //       end: '+=' + singleDuration,
        //     },
        //   },
        // );
        ScrollTrigger.create({
          trigger: container,

          start: `top -=${singleDuration * i}`,
          end: `+=${singleDuration}`,

          //   markers: true,
          scrub: false,
          animation: tl,
          //   toggleActions: relevantContent.classList.contains('remaining')
          //     ? 'play none play reverse'
          //     : 'play reverse play reverse',
          toggleActions: 'play none play reverse',
        });

        tl.fromTo(
          p,
          { opacity: 0, bottom: 500 },
          { opacity: 1, duration: 0.25, bottom: i * 50 },
          0,
        ).fromTo(
          contents[i],
          { opacity: i !== 0 ? 0 : 1 },
          { opacity: 1, duration: 0.1 },
          0,
        );
        //   .set(relevantContent, { autoAlpha: 1 }, 0);
      });
      // tl.to(planeElm, { opacity: 1, duration: 0.25, bottom: i * 50 }, 0);
      return () => {
        linetl.kill();
        tls.forEach((t) => t.kill());
      };
    });
    return () => {
      mm.kill();
    };
  }, []);
  return (
    <section
      className="relative pt-0 md:pb-4 embark-section overflow-hidden"
      ref={containerRef}>
      <div className="pin-up hidden md:flex md:items-center md:min-h-screen">
        <div className="container">
          <SectionHeading textAlign="left" className="headline mb-[70px]">
            Embrace the future stack
          </SectionHeading>
          <div className="flex justify-center items-center">
            <div className="w-7/12">
              <div className="flex">
                <div className="flex flex-col h-[343px] items-center">
                  <div className="text-14 leading-[21px] font-medium mb-1">
                    01
                  </div>
                  <div className="line flex-1 relative rounded">
                    <div className="lineprogress" ref={lineRef}></div>
                  </div>
                  <div className="text-14 leading-[21px] font-medium mt-1">
                    05
                  </div>
                </div>
                <div className="h-[343px] w-[380px] ml-4.5">
                  <div className="content-track flex h-[343px] flex-col relative w-full">
                    {slides.map((s) => (
                      <div
                        className="absolute top-0 flex-shrink-0 h-full w-full flex flex-col justify-center bg-white"
                        key={s.key}>
                        <div className="font-bold text-32 leading-[42px] tracking-[-1px]  font-objectivity">
                          {s.title}
                        </div>
                        <p className="font-medium text-16 leading-6 opacity-50 text-black mb-4">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5/12">
              <div
                className="plane-container relative -bottom-2"
                style={{
                  maxWidth: 510,
                  height: 420,
                }}>
                {slides.map((s) => (
                  <Plane id={s.key} key={s.key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="container">
          <SectionHeading
            textAlign="center"
            className="headline mb-[20px] max-w-[300px] mx-auto">
            Embrace the future stack
          </SectionHeading>
          <Tabs
            data={slides.map((s) => ({
              key: s.key.toString(),
              header: s.title,
              content: (
                <div className="mt-4">
                  <div className="font-bold text-22 leading-[32px] tracking-[-1px]  font-objectivity">
                    {s.title}
                  </div>
                  <div className="text-16 leading-7 font-medium text-black opacity-60 mt-1 mb-3">
                    {s.text}
                  </div>
                  <img
                    className="w-full"
                    src={`/img/product-overview/stack-${s.key}.svg`}
                    width="343"
                    height="282"
                    alt=""
                    loading="lazy"
                  />
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}

export default EmbarkSection;
