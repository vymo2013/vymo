import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
import Button from '../../Button/Button';
import './ContactSection.scss';

function ContactSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="bg-[#307388] relative contact-section fade-in"
      ref={ref}>
      <div className="bg-gg">
        <div className="container section-pad">
          <div className="w-full lg:w-3/5 mx-auto max-w-[800px]">
            <h2 className="text-center text-28 md:text-48 text-white font-light leading-[38px] md:leading-[64px]">
              <span className="font-bold">Want to see what </span><i>Vymo can do</i><span className="font-bold"> for your team?</span>
            </h2>
          </div>
          <p className="text-white mt-2 mb-5 text-center text-18">
            Book a personalized demo of Vymo
          </p>
          <div className="flex w-100 justify-center font-medium z-10 relative">
            <input
              type="email"
              placeholder="Enter your business email"
              className="py-[16px] md:py-[20px] w-100 md:w-[495px] px-1 md:px-[32px] text-14 md:text-16 flex-[0.8] md:flex-initial"
            />
            <Button primaryRed className="text-14 md:text-16">
              See it in action
            </Button>
          </div>
          <div className="grid-element">
            <img
              src="/img/design-element/grid.svg"
              alt=""
              className="w-3/5 md:w-auto"
            />
          </div>
          {/*<div className="star-element">
            <img
              src="/img/design-element/star.svg"
              alt=""
              className="w-3/5 md:w-auto"
            />
          </div>*/}
          </div>
      </div>
    </section>
  );
}

export default ContactSection;
