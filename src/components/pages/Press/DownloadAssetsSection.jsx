import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
import DownloadAssetsSlider from '../../Slider/DownloadAssetsSlider';

function DownloadAssetsSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad bg-lightWhite  fade-in" ref={ref}>
      <div className="container">
        <div className="w-full lg:w-3/5 mx-auto">
          <SectionHeading className="mb-3 md:mb-6">
            Download our brand assets
          </SectionHeading>
        </div>
      </div>
      <DownloadAssetsSlider />
    </section>
  );
}

export default DownloadAssetsSection;
