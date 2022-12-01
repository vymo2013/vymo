import React, { useRef, useEffect } from 'react';
const clients = [
  {
    id: 1,
    description:
      '“Vymo has helped us achieve and bring sales efficiency by enabling them to meet up with more customers, handle more leads in a day and increase the rate of conversion. Vymo has also helped streamline sales activities to provide more visibility.”',
    name: 'Jeff Morris',
    img: '/img/client-1.png',
    designation:
      'Vice President of Marketing & Operations at Berkshire Hathaway Homestate Companies',
  },
  {
    id: 2,
    description:
      '“Vymo has helped us achieve and bring sales efficiency by enabling them to meet up with more customers, handle more leads in a day and increase the rate of conversion. Vymo has also helped streamline sales activities to provide more visibility.”',
    name: 'Jeff Morris',
    img: '/img/client-1.png',
    designation:
      'Vice President of Marketing & Operations at Berkshire Hathaway Homestate Companies',
  },
  {
    id: 3,
    description:
      '“Vymo has helped us achieve and bring sales efficiency by enabling them to meet up with more customers, handle more leads in a day and increase the rate of conversion. Vymo has also helped streamline sales activities to provide more visibility.”',
    name: 'Jeff Morris',
    img: '/img/client-1.png',
    designation:
      'Vice President of Marketing & Operations at Berkshire Hathaway Homestate Companies',
  },
  {
    id: 4,
    description:
      '“Vymo has helped us achieve and bring sales efficiency by enabling them to meet up with more customers, handle more leads in a day and increase the rate of conversion. Vymo has also helped streamline sales activities to provide more visibility.”',
    name: 'Jeff Morris',
    img: '/img/client-1.png',
    designation:
      'Vice President of Marketing & Operations at Berkshire Hathaway Homestate Companies',
  },
];
function ClientBenifitSlider() {
  const sliderContainerRef = useRef();
  const sliderRef = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!sliderRef.current && sliderContainerRef.current) {
        sliderRef.current = tns({
          container: sliderContainerRef.current,
          autoplay: true,
          autoplayButtonOutput: false,
          mouseDrag: false,
          items: 1,
          loop: true,
          prevButton: false,
          nextButton: false,
          speed: 1000,
          //   controlsText: [arrowLeft, arrowRight],
          nav: true,
          navPosition: 'bottom',

          //   responsive: {
          //     0: {
          //       gutter: 15,
          //       items: 1,
          //       controls: false,
          //       nav: true,
          //     },
          //   },
        });
      }
    });
  }, []);
  return (
    <div ref={sliderContainerRef} className="client-benifit-slider">
      {clients.map((c) => (
        <div key={c.id} className="item z-10">
          <div className="text-center">
            <p className="text-16 leading-7 md:leading-[34px] md:text-20">
              {c.description}
            </p>
            <div className="mx-auto">
              <img src={c.img} alt="" />
            </div>
            <p className="my-1">{c.name}</p>
            <p className="font-14 opacity-60 w-full md:w-1/2 lg:w-3/4 mx-auto">
              {c.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientBenifitSlider;
