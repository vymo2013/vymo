import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function VymoMagicSection() {
  return (
    <section className="relative section-pad magic-section">
      <div className="container">
        <div className="row">
          <div className="col-md col-10 offset-1 mb-3 md:mb-6">
            <SectionHeading>How does Vymo add the magic here?</SectionHeading>
          </div>
        </div>
        <div className="row justify-center">
          <div className="w-full px-[15px] lg:p-0 lg:w-[83.3%]">
            <div className="row">
              <div className="col col-6">
                <div className="magic-card">
                  <h4>Lead Inflow</h4>
                  <p>Single window visibility with all metadata enriched</p>
                  <img
                    src="/img/lead-management/lead-inflow.png"
                    className="inflow-img"
                    width="438"
                    height="246"
                    alt=""
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="magic-card">
                  <h4>Instant Allocation</h4>
                  <p>Single window visibility with all metadata enriched</p>
                  <img
                    src="/img/lead-management/instant-allocation.png"
                    className="allocation-img"
                    width="478"
                    height="222"
                    alt=""
                  />
                </div>
              </div>
              <div className="col col-12 lg:mt-4">
                <div className="magic-card full">
                  <div>
                    <h4>Activity Hub</h4>
                    <p>
                      Lead management software has a significant impact not just
                      in improving business performance, but also the seller
                      experience. If lead management isn’t done right, then the
                      seplumbing issues can equate to revenue leakages because:
                    </p>
                    <Button link chevron>
                      Learn more
                    </Button>
                  </div>
                  <img
                    src="/img/lead-management/activity-hub.png"
                    width="437"
                    height="349"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VymoMagicSection;
