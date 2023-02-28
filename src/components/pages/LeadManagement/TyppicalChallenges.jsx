import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
import IntegrationSlider from '../../Slider/IntegrationSlider';

function IntegrationSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative section-pad bg-darkblack overflow-hidden"
      ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md col-7 mx-auto">
            <h3 className="text-white text-48 font-light text-center leading-[64px] m-font-head">
              <span className="font-bold">Typical</span> <i>Challenges</i> <span className="font-bold">with <span className="d-bck">with Lead Conversion</span></span>
            </h3>
          </div>
        </div>
      </div>
     <div className="container">
        <div className="row relative z-10 smt-2">
            <div className="flex-grid grid-cols-4 col-12 mb-4 mt-2">
              <div className="py-1 rounded-2xl h-full">
                <div className="btn-box md:mt-2">
                  Multiple Sources
                </div>
              </div>

              <div className="py-1 rounded-2xl h-full">
                <div className="btn-box md:mt-2">
                 Delayed Allocation
                </div>
              </div>

              <div className="py-1 rounded-2xl h-full">
                <div className="btn-box md:mt-2">
                  Suboptimal Allocation
                </div>
              </div>

              <div className="py-1 rounded-2xl h-full">
                <div className="btn-box md:mt-2">
                  Inefficient Nurture
                </div>
              </div>
            </div>
        </div>
      </div>
      <img
        className="absolute w-full bottom-0 pointer-events-none select-none z-0"
        src="/img/design-element/integration-grid.svg"
        alt=""
        width="1440"
        height="363"
      />
    </section>
  );
}

export default IntegrationSection;
