import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';
import WholeSalerSlider from '../../Slider/WholeSalerSlider';
function WholeSalerSection() {
  return (
    <section className="relative section-pad bg-lightWhite overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md col-10 offset-1 mb-3 md:mb-6">
            <SectionHeading>
              Vymo enhances the wholesaler experience so they can create
              profitable agencies!
            </SectionHeading>
          </div>
        </div>
        <WholeSalerSlider />
      </div>
    </section>
  );
}

export default WholeSalerSection;
