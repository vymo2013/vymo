import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
import ChallengesSlider from '../../Slider/ChallengesSlider';
import Button from '../../Button/Button';
function ChallengesSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="section-pad relative bg-lightWhite overflow-hidden fade-in"
      ref={ref}>
      <div className="container">
        <div className="text-center  mb-[41px] md:mb-6">
          <SectionHeading className="mb-3 md:mb-6">
            Do you have these challenges?
          </SectionHeading>
          <Button>See how Vymo can help</Button>
        </div>
        <ChallengesSlider />
      </div>
    </section>
  );
}

export default ChallengesSection;
