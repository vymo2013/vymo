import React from 'react';
import LogoSlider from './LogoSlider';
const logos = [
  { id: 1, src: 'bhhc.png', alt: 'BHHC', width: '64px', height: '62px' },
  { id: 2, src: 'aia.png', alt: 'AIA', width: '111px', height: '65px' },
  { id: 3, src: 'axa.png', alt: 'AXA', width: '66px', height: '62px' },
  {
    id: 4,
    src: 'hdfc-bank.png',
    alt: 'HDFC Bank',
    width: '154px',
    height: '26px',
  },
  {
    id: 5,
    src: 'generali.png',
    alt: 'Generali',
    width: '79px',
    height: '63px',
  },
];
function TrustedSlider() {
  return (
    <LogoSlider
      data={logos}
      domainUrl="/img/logo"
      config={{
        responsive: {
          0: {
            items: 3,
            gutter: 0,
            autoplay: true,
            autoplayTimeout: 0,
          },
          768: {
            items: 4,
            autoplay: true,
          },
          1024: {
            autoplay: true,
          },
          1200: {
            disable: true,
          },
        },
      }}
    />
  );
}

export default TrustedSlider;
