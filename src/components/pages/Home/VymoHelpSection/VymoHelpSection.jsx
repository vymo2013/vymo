import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../../Heading/SectionHeading';
import VymoDropDown from './VymoDropDown';
import './VymoHelpSection.scss';

const helpDropDown = [
  {
    id: 1,
    title: 'Relationship manager',
    description:
      'Deepen client relationships and develop new opportunities effectively.',
    learnMore: '#!',
    icon: {
      src: '/img/icons/bag.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container bottom-2 left-3 md:bottom-6 md:left-[42px] lg:bottom-3 lg:left-[42px]">
        <img src="/img/help-1.svg" alt="" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Wholesalers',
    description:
      'Improve broker book of business and ensure wholesaler productivity',
    learnMore: '#!',
    icon: {
      src: '/img/icons/cube.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container bottom-2 left-3 md:bottom-6 md:left-[40px] lg:bottom-3 lg:left-[50px]">
        <img src="/img/help-2.svg" alt="" className="w-[562px]" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Insurance Agents',
    description:
      "Increase agent's success rates and drive growth profitably across channels.",
    learnMore: '#!',
    icon: {
      src: '/img/icons/doc.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container left-0 md:left-[0px] md:bottom-6 lg:bottom-0 lg:left-[20px] md:scale-110 lg:scale-100">
        <img src="/img/help-3.svg" alt="" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Other Sales',
    description:
      'Increase sales productivity, improve customer happiness, and drive more revenue.',
    learnMore: '#!',
    icon: {
      src: '/img/icons/pie-chart.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container p-6 mt-6">
        <img src="/img/help-bg2x.png" alt=""  width="100%"/>
      </div>
    ),
  },
];
function VymoHelpSection() {
  const [open, setOpen] = useState(1);
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad vymo-help-section fade-in" ref={ref}>
      <div className="container z-10">
        <h3 className="mb-3 md:mb-6 font-light md:text-44 text-center h3-text"><span className="font-bold">How Vymo</span> <i>can help.</i></h3>
        <div className="flex mt-6">
          <div className="w-full md:w-1/2 lg:w-2/5 h-[0%]">
            {helpDropDown.map(({ id, ...props }) => (
              <VymoDropDown
                key={id}
                {...props}
                open={open === id}
                onClick={() => setOpen(id)}
              />
            ))}
          </div>
          <div className="hidden md:flex md:w-2/5 lg:w-3/5 justify-center items-center relative px-3 md:ml-[5%] lg:ml-0">
            <img
              src="/img/help-bg2x.png"
              alt=""
              width="511px"
              height="528px"
              className="absolute z-0 w-full max-w-[511px]"
            />
            {helpDropDown.map((hdd) => (
              <div
                key={hdd.id}
                className={`transition absolute bottom-0  ${
                  (open === hdd.id && 'opacity-100') || 'opacity-0'
                }`}
                style={{ transitionDuration: 1 }}>
                {hdd.ImageComp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VymoHelpSection;
