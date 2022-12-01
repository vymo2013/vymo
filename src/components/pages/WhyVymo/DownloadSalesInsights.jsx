import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function DownloadSalesInsights() {
  return (
    <section className="relative why-download-section">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center px-[15px] xl:px-0">
          <div className="md:py-[80px] w-full xl:w-[41.5%]">
            <SectionHeading className="heading">
              Download Sales Insights from USA’s Top Insurance Leaders
            </SectionHeading>
            <p className="text-center xl:text-left font-medium text-black">
              We reached out to USA’s top insurance leaders for a 360 degree
              view on the industry, what every leader’s top priorities should
              be, and opportunities for improvement.
            </p>
            <div className="text-center xl:text-left">
              <Button className="md:px-[87px] md:py-2 mt-3">
                Check it out here
              </Button>
            </div>
          </div>
          <div className="w-full xl:w-[41.5%] pb-2 xl:pb-0 sales-hand">
            <img
              className="relative mx-auto xl:mx-0"
              src="/img/why/sales-hand.png"
              alt=""
              width="386"
              height="343"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSalesInsights;
