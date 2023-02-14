import React from 'react';
import LogoSlider from './LogoSlider';
const logos = [
  { id: 1, src: 'bhhc.svg', alt: 'BHHC', width: '234px', height: '42px' },
  { id: 2, src: 'aia.svg', alt: 'AIA', width: '72px', height: '59px' },
  { id: 3, src: 'axa.svg', alt: 'AXA', width: '64px', height: '64px' },
  {
    id: 4,
    src: 'hdfc.svg',
    alt: 'HDFC Bank',
    width: '200px',
    height: '26px',
  },
  {
    id: 5,
    src: 'generali.svg',
    alt: 'Generali',
    width: '200px',
    height: '33px',
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
