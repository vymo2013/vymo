import React from 'react';
import Button from '../../Button/Button';
const benifits = [
  {
    id: 1,
    img: 'line-chart.svg',
    text: 'Leverage data across the customer lifecycle',
  },
  {
    id: 2,
    img: 'trophy.svg',
    text: 'Turn systems of records into systems of insight',
  },
  {
    id: 3,
    img: 'database.svg',
    text: 'Drive targeted interventions to improve outcomes',
  },
];
function HeroSection() {
  return (
    <section className="relative section-pad why-vymo-hero-section overflow-hidden">
      <div className="container mt-5 md:mt-0">
        <div className="row">
          <div className="col-md col-7 text-center lg:text-left self-center">
            <h2 className="text-36 md:text-64 tracking-[-2px] leading-[44px] md:leading-[80px] font-bold">
              Conventional CRMs are insufficient
            </h2>
            <p className="text-black text-16 md:text-18 mt-1 font-medium opacity-60 mb-3 md:mb-[40px] w-full lg:w-4/5">
              What you need is an intelligent sales frontend that helps you
              drive interventions across the customer lifecycle to improve
              outcomes.
            </p>
            <Button>See how Vymo can help</Button>
          </div>
          <div className="col-md col-5 mt-5 lg:mt-0 relative hero-img">
            <img
              src="/img/why/hero.png"
              alt=""
              width="542px"
              height="557px"
              className="w-full relative z-[1]"
            />
            <img
              src="/img/design-element/why-crm-curve.svg"
              alt=""
              width="116px"
              height="129px"
              className="absolute -top-[2px] right-[-76px] z-[2] hidden lg:block"
            />
            <div className="absolute trans-dialog bottom-0 p-4 z-[1]">
              <div className="flex flex-row trans-dialog-container px-[11px] py-[8px] md:px-[14px] md:py-[14px]">
                <img
                  src="/img/icons/trans-doc.svg"
                  alt=""
                  width="52px"
                  height="52px"
                  className="self-center w-[43px] h-[43px] lg:w-[52px] lg:h-[52px]"
                />
                <div className="flex-1 pl-[14px]">
                  <div className="text-10 bg-purple px-[10px] py-[5px] text-white inline rounded">
                    To drive sales productivity bottom up
                  </div>
                  <p className="text-white text-12 md:text-14 m-0 leading-5 font-normal w-10/12 mt-[4px]">
                    Free between 2 - 4 PM? Meet Acme Solutions (Gold Partner)
                    <svg
                      className="inline-block ml-1"
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.0812644 9.12862C3.77191 9.10346 6.73789 5.2857 6.70595 0.601412C6.73789 5.2857 9.75564 9.06266 13.4463 9.0375C9.75564 9.06266 6.78967 12.8804 6.8216 17.5647C6.78967 12.8804 3.77191 9.10346 0.0812644 9.12862Z"
                        fill="#FFC75A"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row benifit-row">
          {benifits.map((b) => (
            <div className="col-md col-4 flex mb-4 lg:mb-0" key={b.id}>
              <img
                className="inline relative lg:top-[6px] w-[30px] h-[30px] lg:w-[25px] lg:h-[25px]"
                src={`/img/icons/${b.img}`}
                width="25"
                height="25"
                alt=""
              />
              <p className="ml-[21px] font-medium text-18 md:text-20 self-center mb-0">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
