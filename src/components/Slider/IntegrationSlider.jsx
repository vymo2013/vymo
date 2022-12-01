import React, { useRef, useEffect } from 'react';
const integrations = [
  {
    id: 1,
    img: {
      src: 'office-360.png',
      alt: 'Office 360',
      width: '47',
      height: '47',
    },
    title: 'Office 365',
    description:
      'Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites',
  },
  {
    id: 2,
    img: {
      src: 'google.png',
      alt: 'Google',
      width: '47',
      height: '47',
    },
    title: 'Google Suite',
    description:
      'Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites',
  },
  {
    id: 3,
    img: {
      src: 'salesforce.png',
      alt: 'Salesforce',
      width: '69',
      height: '47',
    },
    title: 'Salesforce',
    description:
      'Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful.',
  },
  {
    id: 4,
    img: {
      src: 'azure.png',
      alt: 'Azure',
      width: '47',
      height: '47',
    },
    title: 'Azure Active Directory',
    description:
      'The following enterprise single sign-on (SSO) services come integrated with Vymo out-of-the-box.',
  },
];
function IntegrationSlider() {
  const sliderContainerRef = useRef();
  const sliderRef = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!sliderRef.current && sliderContainerRef.current) {
        sliderRef.current = tns({
          container: sliderContainerRef.current,
          autoplayButtonOutput: false,
          mouseDrag: false,
          loop: true,
          gutter: 40,
          speed: 6000,
          controls: false,
          nav: false,
          preventActionWhenRunning: true,
          responsive: {
            0: {
              disable: true,
              autoplay: true,
              autoplayTimeout: 0,
            },
            768: {
              gutter: 32,
              items: 2,
              disable: false,
              autoplay: true,
              autoplayTimeout: 0,
            },
            1280: {
              items: 3.2,
              gutter: 32,
              disable: false,
              autoplay: true,
              autoplayTimeout: 0,
            },
          },
        });
      }
    });
  }, []);
  return (
    <div className="integration-slider-container mt-0 md:mt-6">
      <div
        ref={sliderContainerRef}
        className="integration-slider marquee-slider">
        {integrations.map((i) => (
          <div key={i.id} className="item">
            <div className="integration-card">
              <img alt="" {...i.img} src={`/img/logo/${i.img.src}`} />
              <div className="name text-18 md:text-20">{i.title}</div>
              <p className="text-14 text-white">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegrationSlider;
