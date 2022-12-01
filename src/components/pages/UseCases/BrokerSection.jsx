import React from 'react';
import Button from '../../Button/Button';
// import BenifitCard from '../Home/BenifitsSection/BenifitCard';

function BrokerSection() {
  return (
    <section className="relative section-pad">
      <div className="container">
        <div className="row">
          <div className="flex flex-wrap bg-darkPurple xl:rounded-3xl px-4 py-5 md:p-[72px] relative z-[1]">
            <div className="col-md col-12 text-center">
              <h3 className="text-white text-22 md:text-32 md:leading-[42px] font-bold mb-1 tracking-[-1px]">
                The Broker Network is a Key Revenue Channel for Wholesalers
              </h3>
              <p className="text-white opacity-60 leading-5 md:leading-7 mb-3">
                The Agency Channel is one of the most important parts of an
                insurance company.
              </p>
              <Button secondary secondaryWhite chevron>
                See how it works
              </Button>
            </div>
            <div className="col-md col-12 mt-4 lg:mt-4">
              <div className="flex flex-wrap text-center">
                <div className="w-1/2 sm:w-1/3">
                  <div className="bg-[#2C233D] py-2 md:pt-[40px] md:pb-[31px] px-1 rounded-2xl benifit-card h-full mr-1 md:mr-2">
                    <h3 className="flex flex-wrap justify-center mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                      58<span className="relative left-[2px]">%</span>
                    </h3>
                    <p className="text-12 lg:text-14 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                      of all Property & Casual premiums collected
                    </p>
                  </div>
                  {/* <BenifitCard
                    img="/img/logo/bnp.png"
                    width="154px"
                    height="33px"
                    alt="BNP PARIBAS"
                    description="of all Property & Casual premiums collected"
                    percentage={15}
                    fontSize="14"
                  /> */}
                </div>
                <div className="w-1/2 sm:w-1/3">
                  <div className="bg-[#2C233D] py-2 md:pt-[40px] md:pb-[31px] px-1  rounded-2xl benifit-card h-full ml-1 md:ml-2">
                    <h3 className="flex flex-wrap justify-center mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                      49<span className="relative left-[2px]">%</span>
                    </h3>
                    <p className="text-12 lg:text-14 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                      life insurance premiums collected
                    </p>
                  </div>
                  {/* <BenifitCard
                    img="/img/logo/sun-life.png"
                    width="127px"
                    height="31px"
                    alt="Sun Life"
                    description="life insurance premiums collected"
                    percentage={49}
                    className="ml-1 md:ml-2"
                    fontSize="14"
                  /> */}
                </div>
                <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
                  <div className="bg-[#2C233D] py-2 md:pt-[40px] md:pb-[31px] px-1  rounded-2xl benifit-card h-full ml-0 sm:ml-2 md:ml-4">
                    <div className="w-full flex items-center">
                      <div className="w-full">
                        {/* <img
                          src="/img/logo/hdfc-bank.png"
                          width="154px"
                          height="26px"
                          alt="HDFC Bank"
                        /> */}
                        <h3 className="flex flex-wrap justify-center mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
                          41
                          <span className="relative left-[2px]">%</span>
                        </h3>
                        <p className="text-12 lg:text-14 text-white opacity-60 lg:mt-2 leading-5 mb-0">
                          of home insurance premiums collected
                        </p>
                      </div>
                      {/* <div className="w-[60%] self-center pl-[27px]">
                        <img
                          className="mx-auto"
                          src="/img/use-cases/graph.png"
                          alt=""
                          width="318"
                          height="175"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple xl:rounded-b-3xl pt-7 md:pb-4 p-4 md:px-[72px]  mt-[-88px] z-0 relative">
            <h3 className="text-white text-22 md:text-32 leading-7 md:leading-[42px] font-bold tracking-[-1px] text-center lg:text-left">
              Is there a way for wholesalers to swiftly onboard and grow
              agencies? With Vymo, there is!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrokerSection;
