import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';

function CRMSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative section-pad about-crm-section fade-in"
      ref={ref}>
      {/* <div className="w-full lg:w-3/5 mx-auto"> */}
      <div className="container">
        <div className="col-md col-8 mx-auto">
          <SectionHeading>More than just a CRM</SectionHeading>
          <p className="text-16 md:text-20 leading-7 md:leading-[34px] mt-1 md:mt-3 font-medium text-center mb-6">
            In our personal lives, we’re used to the convenience of apps like
            Uber or Amazon that give before we ask. Why should enterprise
            applications be any different? That is the question Yamini
            (ex-McKinsey) and Venkat (ex-Google) asked in 2013. They set out to
            solve for salespeople who needed more than just a CRM to delight
            their customers.
          </p>
        </div>
      </div>
      <div className="col-md col-12 relative overflow-x-clip mt-6 lg:mt-0">
        <div className="relative mx-auto h-[91px] md:h-[173px] w-4/5 md:w-2/3 lg:w-[35%] border-purple border-2 rounded-[4px] z-[1]">
          <div className="hidden lg:block absolute left-crm-d h-[123px] bg-lightBg2 z-0 left-0 bottom-[-70px] -translate-x-full">
            <div className="left-box"></div>
            <div className="right-box"></div>
            <div className="bg-parry p-2 timeline-round flex justify-center items-center">
              <span className="text-24 text-white">2013</span>
            </div>
          </div>
          <img
            className="absolute left-2 md:left-3 lg:left-0 -translate-x-1/2  top-[-100px] md:top-0 md:-translate-y-6 scale-50 md:scale-75 lg:scale-100"
            width="214px"
            height="316px"
            src="/img/about/crm-1.png"
            alt=""
          />

          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 lg:scale-100"
            width="67"
            height="73"
            viewBox="0 0 67 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.4416 36.951V55.048C35.4324 56.0679 35.06 57.0441 34.4028 57.771C33.7252 58.4957 32.8134 58.9018 31.8637 58.9018C30.9139 58.9018 30.0021 58.4957 29.3246 57.771C28.6674 57.0441 28.2949 56.0679 28.2858 55.048V40.8049H16.2439C15.7758 40.8104 15.3115 40.7148 14.8776 40.5236C14.4438 40.3324 14.049 40.0494 13.7163 39.691C13.3836 39.3326 13.1194 38.9059 12.9391 38.4356C12.7588 37.9652 12.666 37.4607 12.666 36.951C12.666 36.4414 12.7588 35.9368 12.9391 35.4665C13.1194 34.9962 13.3836 34.5695 13.7163 34.2111C14.049 33.8527 14.4438 33.5697 14.8776 33.3785C15.3115 33.1873 15.7758 33.0916 16.2439 33.0971H31.8637C32.7653 33.0933 33.6335 33.4685 34.2874 34.1444C34.6527 34.4887 34.9419 34.9183 35.1337 35.4011C35.2224 35.648 35.2994 35.8997 35.3645 36.1551C35.4113 36.4175 35.437 36.6838 35.4416 36.951Z"
              fill="#FF5A5F"
            />
            <path
              d="M50.5307 20.4068V61.1557C50.5307 61.2223 50.5288 61.2873 50.5268 61.3539C50.4751 62.3601 50.066 63.305 49.3861 63.9889C48.7061 64.6727 47.8086 65.0418 46.8833 65.0183C45.9579 64.9947 45.0773 64.5803 44.4274 63.8626C43.7776 63.145 43.4095 62.1803 43.401 61.1725V24.2745H9.64473C9.17815 24.2784 8.71548 24.1816 8.28339 23.9899C7.85131 23.7981 7.45835 23.5152 7.12717 23.1573C6.79598 22.7994 6.53313 22.3737 6.35375 21.9047C6.17438 21.4356 6.08203 20.9326 6.08203 20.4246C6.08203 19.9165 6.17438 19.4135 6.35375 18.9444C6.53313 18.4754 6.79598 18.0497 7.12717 17.6918C7.45835 17.3339 7.85131 17.051 8.28339 16.8592C8.71548 16.6675 9.17815 16.5707 9.64473 16.5746H46.9658C47.4387 16.5751 47.9067 16.6782 48.3427 16.8777C48.7786 17.0772 49.1738 17.3691 49.505 17.7366L49.5069 17.7345C49.5458 17.7783 49.5843 17.8221 49.6227 17.8659C49.6962 17.9556 49.7678 18.0495 49.8355 18.1475C49.9316 18.2894 50.0192 18.4378 50.0979 18.5919C50.1252 18.6441 50.1502 18.6962 50.1733 18.7484C50.2021 18.811 50.2295 18.8756 50.2545 18.9403C50.2968 19.0509 50.3356 19.1656 50.3703 19.2804L50.3722 19.2866C50.4227 19.4657 50.462 19.6483 50.4899 19.8332V19.8394C50.5072 19.9625 50.5191 20.0877 50.5268 20.2129C50.5288 20.2775 50.5307 20.3422 50.5307 20.4068Z"
              fill="#FF5A5F"
            />
            <path
              d="M66.5 68.6489C66.5 68.716 66.4981 68.7805 66.4961 68.8471C66.4459 69.753 66.1061 70.6112 65.5357 71.273C64.9653 71.9348 64.2002 72.3583 63.3731 72.4703C62.5459 72.5823 61.7089 72.3756 61.007 71.886C60.3052 71.3965 59.7827 70.655 59.5303 69.7901C59.4972 69.6743 59.4696 69.5567 59.4476 69.4378C59.4338 69.3749 59.4241 69.3125 59.4145 69.2497C59.3874 69.0565 59.3739 68.8612 59.3741 68.6657L59.2968 8.02125V7.70414L3.56445 7.78549C3.09772 7.78959 2.63486 7.69304 2.20257 7.5014C1.77028 7.30975 1.37712 7.02682 1.04575 6.66891C0.714386 6.311 0.451377 5.88519 0.271892 5.41606C0.0924074 4.94692 0 4.44373 0 3.93552C0 3.4273 0.0924074 2.92411 0.271892 2.45498C0.451377 1.98584 0.714386 1.56004 1.04575 1.20212C1.37712 0.844214 1.77028 0.561279 2.20257 0.369638C2.63486 0.177996 3.09772 0.081441 3.56445 0.0855409L62.8559 0H62.8963C63.7934 0.00021111 64.6575 0.368962 65.3158 1.03259C65.9742 1.69622 66.3784 2.60587 66.4476 3.57983C66.4496 3.60903 66.4515 3.64032 66.4515 3.67161C66.4534 3.7321 66.4592 3.79055 66.4592 3.85103C66.4592 3.92614 66.4188 3.98873 66.4169 4.06384L66.5 68.6489Z"
              fill="#FF5A5F"
            />
          </svg>
          <img
            className="absolute right-[-4px] md:right-0 top-[-84px] md:top-[-50px] lg:top-0 translate-y-[-43px] translate-x-[73px] scale-50 md:scale-75 lg:scale-100"
            width="215px"
            height="374px"
            src="/img/about/crm-2.png"
            alt=""
          />
          <div className="hidden lg:block right-crm-d absolute h-[164px] bg-lightBg2 z-0 translate-y-full right-[-73px] translate-x-full">
            <svg
              width="122"
              className="red-round"
              height="122"
              viewBox="0 0 122 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M122 2.2966e-06C105.979 2.99692e-06 90.1143 3.15561 75.3126 9.28669C60.5109 15.4178 47.0617 24.4042 35.733 35.733C24.4042 47.0617 15.4178 60.5109 9.28669 75.3126C3.15562 90.1143 -1.40062e-06 105.979 0 122L122 122L122 2.2966e-06Z"
                fill="#FF8B7C"
              />
            </svg>

            <div className="parry-round bg-parry">
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.57031 18.1102L12.0143 28.5541L38.526 2.04248"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative lg:hidden bg-lightBg2 top-[80px] left-full-crm">
          <div className="right-full-box"></div>
          <div className="left-box"></div>
          <div className="right-box"></div>
          <div className="bg-parry p-1 timeline-round flex justify-center items-center">
            <span className="text-12 text-white">2013</span>
          </div>
          <div className="parry-round bg-parry">
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.714844 8.47362L5.46088 13.2206L17.5085 1.17065"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRMSection;
