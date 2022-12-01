import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function LeadingMatricSection() {
  return (
    <section className="relative section-pad leading-matrix-section">
      <div className="container">
        <div className="row mb-3 md:mb-6 justify-center">
          <div className="col-md col-10 text-center">
            <SectionHeading>
              For the world s leading insurers, Vymo continues to drive leading
              metrics
            </SectionHeading>
            <p className="text-darkPurple opacity-60 leading-5 md:leading-7 mt-2 mx-auto lg:w-2/3">
              Your wholesalers need to engage across multiple channels and
              provide more holistic solutions, rather than just a product sale.
              With Vymo, you can boost broker engagement and coach your
              wholesalers to be more productive.
            </p>
            <div className="flex flex-row flex-wrap w-full">
              <div className="flex-1 md:pr-2">
                <Button className="float-right">Explore Solutions</Button>
              </div>
              <div className="flex-1 pl-2">
                <Button primaryOutline className="float-left">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container no-padding">
        <div className="flex sales-detail-cards">
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              2 <span className="-ml-1 md:-ml-2">x</span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              increase in meetings per day per agent
            </p>
            <img src="/img/logo/axa.png" alt="AXA" width="66" height="62" />
          </div>
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              52 <span className="-ml-1 md:-ml-2">%</span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              reduced time to meet customers
            </p>
            <img src="/img/logo/aia.png" alt="AIA" width="111" height="65" />
          </div>
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              5.4 <span className="-ml-1 md:-ml-2">x</span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              increase in sales activities
            </p>
            <img
              src="/img/logo/sun-life-dark.png"
              width="146"
              height="36"
              alt="Sun Life"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadingMatricSection;
