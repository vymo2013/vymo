import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
import ReportSlider from '../../Slider/ReportSlider';

function SalesEngagement(props) {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="section-pad bg-lightWhite sales-engagement-section fade-in"
      ref={ref}>
      <div className="container">
        <div className="w-full md:w-3/5 lg:w-3/5 mx-auto max-w-[1060px]">
          <SectionHeading className="mb-3 md:mb-6">
            {props.title}
            <img src="/img/sales-eng.svg" width="100%"/>
          </SectionHeading>
        </div>
      </div>
      <ReportSlider />
    </section>
  );
}
SalesEngagement.defaultProps = {
  title: '',
};
SalesEngagement.propTypes = {
  title: PropTypes.string,
};
export default SalesEngagement;
