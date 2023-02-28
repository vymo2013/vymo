import React from 'react';
import Button from '../../Button/Button';
import HowWeHelpSlider from '../../Slider/HowWeHelpSlider';

function HowWeCanHelp() {
  return (
    // bg-lightWhite 
    <section className="section-pad overflow-hidden">
      <div className="container">
        <div className="row items-center pb-5">
          <div className="col col-8">
            <h2 className="text-28 md:text-48  tracking-[-1px] md:tracking-[-2px] md:leading-[64px] leading-9 font-light text-center md:text-left mb-3 md:mb-0">
              <span className="font-bold">Here’s exactly</span> <i>how we can help you</i>
            </h2>
          </div>
          <div className="col col-4">
            <div className="text-center md:text-right">
              <Button href="#!">
                Learn more here
              </Button>
            </div>
          </div>
        </div>

        <HowWeHelpSlider />
      </div>
    </section>
  );
}

export default HowWeCanHelp;
