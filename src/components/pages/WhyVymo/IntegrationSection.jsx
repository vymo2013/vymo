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
      className="relative section-pad bg-darkblack overflow-hidden fade-in"
      ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md col-7 mx-auto">
            <h3 className="text-white text-48 font-light text-center leading-[64px] m-font-head">
              <span className="font-bold">Turn</span> <i>key Integrations</i> <span className="font-bold">with <span className="d-bck">your sales tech stack</span></span>
            </h3>
          </div>
          <div className="col-md col-12">
            <p className="text-18 opacity-60 text-center font-medium mt-2 text-white">
              Get up and running in months weeks!
            </p>
          </div>
        </div>
      </div>
      <IntegrationSlider />
      <div className="text-center mt-6 relative z-10">
        <Button className="xs:mb-4">See how Vymo can help</Button>
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
