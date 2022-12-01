import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LogoSlider from '../../Slider/LogoSlider';
const logos = [
  {
    id: 1,
    src: 'bertelsmann-investments.png',
    alt: 'bertelsmann investments',
    width: '229px',
    height: '49px',
  },
  {
    id: 2,
    src: 'emergence.png',
    alt: 'emergence',
    width: '235px',
    height: '49px',
  },
  {
    id: 3,
    src: 'sequoia.png',
    alt: 'sequoias',
    width: '222px',
    height: '59px',
  },
  // {
  //   id: 4,
  //   src: 'emergence.png',
  //   alt: 'emergence',
  //   width: '235px',
  //   height: '49px',
  // },
  // {
  //   id: 5,
  //   src: 'sequoia.png',
  //   alt: 'sequoias',
  //   width: '222px',
  //   height: '59px',
  // },
];
function InvestorSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative section-pad about-investor-section fade-in"
      ref={ref}>
      <div className="container investor-container flex flex-col md:flex-row">
        <h2 className="text-28 md:text-48 tracking-[-1px] md:tracking-[-2px] md:leading-[64px] leading-9 font-bold mb-3 md:mb-[80px] text-center md:text-left flex-1">
          Our investors
        </h2>
        <div className="block md:flex justify-around lg:block overflow-hidden flex-1 marquee-slider">
          <LogoSlider
            data={logos}
            domainUrl="/img/logo"
            config={{
              responsive: {
                0: {
                  items: 2,
                  autoplay: true,
                  gutter: 30,
                  autoplayTimeout: 0,
                  disabled: false,
                },
                768: {
                  items: 2.5,
                  speed: 4000,
                  autoplay: true,
                  gutter: 34,
                  autoplayTimeout: 0,
                },
                1400: {
                  items: 2.2,
                  speed: 4000,
                  autoplay: true,
                  gutter: 34,
                  autoplayTimeout: 0,
                },
              },
            }}
          />
        </div>
      </div>
      {/* <div className="flex md:hidden w-full mt-5">
        <div className="w-1/2 border">
          <img
            className="px-1 py-[40px] mx-auto"
            src={`/img/logo/${logos[2].src}`}
            height={logos[2].height}
            width={logos[2].width}
            alt={logos[2].alt}
          />
        </div>
        <div className="w-1/2 border">
          <img
            className="px-1 py-[40px] mx-auto"
            src={`/img/logo/${logos[1].src}`}
            height={logos[1].height}
            width={logos[1].width}
            alt={logos[1].alt}
          />
        </div>
      </div> */}
      <div className="container mt-5 md:mt-[140px]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center mt-[30px] md:mt-0">
            <div className="mb-0 md:mb-3">
              <svg
                width="68"
                height="54"
                viewBox="0 0 68 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-[14px] md:mb-4 w-[30px] h-[24px] md:w-[68px] md:h-[54px]">
                <path
                  d="M6.30411 7.97203C10.9808 2.90203 18.0574 0.332031 27.3341 0.332031H30.6674V9.7287L27.9874 10.2654C23.4208 11.1787 20.2441 12.9754 18.5441 15.612C17.6571 17.0325 17.154 18.6588 17.0841 20.332H27.3341C28.2182 20.332 29.066 20.6832 29.6911 21.3083C30.3163 21.9335 30.6674 22.7813 30.6674 23.6654V46.9987C30.6674 50.6754 27.6774 53.6654 24.0008 53.6654H4.00078C3.11672 53.6654 2.26888 53.3142 1.64375 52.6891C1.01863 52.0639 0.667444 51.2161 0.667444 50.332V33.6654L0.677444 23.9354C0.647444 23.5654 0.0141105 14.7987 6.30411 7.97203ZM60.6674 53.6654H40.6674C39.7834 53.6654 38.9355 53.3142 38.3104 52.6891C37.6853 52.0639 37.3341 51.2161 37.3341 50.332V33.6654L37.3441 23.9354C37.3141 23.5654 36.6808 14.7987 42.9708 7.97203C47.6474 2.90203 54.7241 0.332031 64.0008 0.332031H67.3341V9.7287L64.6541 10.2654C60.0874 11.1787 56.9108 12.9754 55.2108 15.612C54.3238 17.0325 53.8207 18.6588 53.7508 20.332H64.0008C64.8848 20.332 65.7327 20.6832 66.3578 21.3083C66.9829 21.9335 67.3341 22.7813 67.3341 23.6654V46.9987C67.3341 50.6754 64.3441 53.6654 60.6674 53.6654Z"
                  fill="#FF5A5F"
                />
              </svg>

              <q className="font-bold text-22 leading-8 md:leading-[42px] md:text-32">
                Rather than dispensing “one-size-fits-all” advice, it instead
                offers coaching that’s uniquely tailored to each worker and the
                task they’re doing at any given moment....
              </q>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full md:w-4/5">
              <img
                className="w-full rounded-lg"
                src="/img/about/gordon-ritter.png"
                alt=""
                width="510px"
                height="464px"
              />
              <img
                className="absolute -top-2 md:top-0 left-0 md:left-[-38px]"
                src="/img/design-element/curve-about-gordon.svg"
                alt=""
                width="125px"
                height="59px"
              />
              <div className="absolute bottom-0 left-0 px-2 md:px-3 py-3">
                <div className="text-white text-18 font-medium">
                  Gordon Ritter
                  <svg
                    className="inline-block ml-[4px]"
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 9.5C4.14214 9.5 7.5 5.24671 7.5 0C7.5 5.24671 10.8579 9.5 15 9.5C10.8579 9.5 7.5 13.7533 7.5 19C7.5 13.7533 4.14214 9.5 0 9.5Z"
                      fill="#FFC75A"
                    />
                  </svg>
                </div>
                <div className="text-white text-14 opacity-50 font-medium">
                  Emergence Capital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestorSection;
