import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionHeading from '../../Heading/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    color: '#307388',
    text: 'Capture activities automatically',
    image: 'why-1.png',
    description:
      "Vymo improves your team's efficiency by auto-detecting and auto-logging all your team's sales communication",
    link: '!#',
  },
  {
    id: 2,
    color: '#FF8B7C',
    text: 'Nudge suggestions in the moment',
    image: 'why-2.png',
    description:
      "Vymo improves your team's efficiency by auto-detecting and auto-logging all your team's sales communication",
    link: '!#',
  },
  {
    id: 3,
    color: '#505ECE',
    text: 'Identify winning behaviors',
    image: 'why-3.png',
    description:
      "So your sales reps can learn from the best to increase their productivity and maximize conversions.",
    link: '!#',
  },
];

function HowVymoWorksSection() {
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    const mm = gsap.matchMedia();
    mm.add('(min-width:768px)', () => {
      // const st = ScrollTrigger.create({})
      const images = gsap.utils.toArray('.image-container > div');
      gsap.set(images, { autoAlpha: 0 });
      gsap.set(images[0], { autoAlpha: 1 });
      let active = NaN;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          pin: true,
          //   markers: true,
          end: '+=150%',
          scrub: 0.2,
          onUpdate: (self) => {
            const oneElement = 1 / (images.length - 1);
            const activeItem = Math.round(
              (self.progress.toFixed(3) / oneElement) * 1.1,
            );
            if (active !== activeItem) {
              active = activeItem;
              // changeBackground(active);
              // console.log('active ', active);
              const toZero = images.filter((_, i) => i !== active);
              gsap.to(toZero, { autoAlpha: 0 });
              gsap.to(images[active], { autoAlpha: 1 });
            }
            // console.log('active ', activeItem);
          },
        },
      });

      tl.fromTo(
        '.item-container',
        {
          yPercent: 0,
        },
        {
          yPercent: -200,
        },
      );
      return () => {
        tl.kill();
      };
    });
    return () => {
      mm.kill();
    };
  }, []);
  return (
    <section
      className="relative section-pad md:min-h-screen flex md:items-center how-works bg-lightWhite"
      ref={containerRef}>
      <div className="container">
        <SectionHeading className="md:mb-6 md:pb-[77px]">
          How Vymo works
        </SectionHeading>
        <div className="hidden md:flex flex-row h-[384px] justify-center">
          <div className="w-[45%] relative gradient-container h-[120%] overflow-hidden">
            <div className="flex h-[60%] flex-col  item-container">
              {data.map((d) => (
                <div
                  className="h-full w-full flex-shrink-0 flex flex-col justify-center items-start relative"
                  key={d.id}>
                  <div
                    style={{ color: d.color }}
                    className="text-32 leading-[42px] font-objectivity tracking-[-1px] font-bold">
                    0{d.id}.
                  </div>
                  <div className="text-32 leading-[42px] font-objectivity font-bold ">
                    {d.text}
                  </div>
                  <div className="text-whale text-16 leading-7 font-medium  max-w-[510px]">
                    {d.description}
                  </div>
                </div>
              ))}

              {/* <div className="bg-zinc-600 h-full w-full flex-shrink-0"></div>
              <div className="bg-zinc-500 h-full w-full flex-shrink-0"></div> */}
            </div>
          </div>
          <div className="w-[41.5%] relative image-container lg:-top-[20%]">
            {data.map((d) => (
              <div className="h-full w-full pl-4 absolute" key={d.id}>
                <img src={`/img/product-overview/${d.image}`} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden flex-col mt-5">
          {data.map((d) => (
            <div className="mb-4 last:mb-0" key={d.id}>
              <div className="text-22 leading-8 font-objectivity tracking-[-1px] font-bold">
                <span style={{ color: d.color }}>0{d.id}.</span>{' '}
                <span>{d.text}</span>
              </div>
              <div className="w-full relative mt-3" key={d.id}>
                <img
                  src={`/img/product-overview/${d.image}`}
                  alt=""
                  className="h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowVymoWorksSection;
