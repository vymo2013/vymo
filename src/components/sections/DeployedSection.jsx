import React from 'react';
import TrustedSlider from '../Slider/TrustedSlider';
function DeployedSection() {
  return (
    <>
    <div className="container">
      <p className="text-24 md:text-20 font-light my-3 md:my-3 p-over-center">
        Deployed for <span className="font-bold">300,000+</span> salespeople in <span className="font-bold">65+</span> world leading enterprises
      </p>
    </div>

      <div>
        <TrustedSlider />
      </div>
    </>
  );
}

export default DeployedSection;
