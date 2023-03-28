import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
import ChallengesSlider from '../../Slider/VymoSolvesSliders';
import Button from '../../Button/Button';
function VymoSolvesSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="section-pad relative bg-lightWhite overflow-hidden fade-in m-pad"
      ref={ref}>
      <div className="container">
        <div className="text-center  mb-[41px] md:mb-6">
          <h3 className="mb-3 md:mb-6 text-[40px] font-light text-center leading-[64px] m-font-head">
            <span className="font-bold">What do you Want to</span><i> Solve for?</i>
          </h3>
        </div>
        <ChallengesSlider />
        {/* <a href="#!">
          <Button className="red-btn align-auto mt-5 mb-4">
            See how Vymo can help
          </Button>
        </a> */}
      </div>
    </section>
  );
}

export default VymoSolvesSection;
