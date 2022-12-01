import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../../Heading/SectionHeading';
import LeadersGrid from './LeadersGrid';

function LeaderShipSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative section-pad about-leadership-section fade-in overflow-hidden"
      ref={ref}>
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto text-center relative mb-3 md:mb-6">
        <p className="text-16 opacity-50 font-medium">OUR LEADERSHIP</p>
        <SectionHeading>
          We believe a great customer experience is built from the inside out.
        </SectionHeading>
      </div>
      <LeadersGrid />
    </section>
  );
}

export default LeaderShipSection;
