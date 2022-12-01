import React from 'react';
import ProgressSlider from './ProgressSlider';

const cards = [
  {
    id: 0,
    image: {
      src: 'microsoft-large.svg',
      width: '176',
      height: '38',
      alt: 'Microsoft',
    },
    background: '#2C233D',
    quote:
      'We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations.',
    speaker: 'Satya Nadela, CEO Microsoft',
  },
  {
    id: 1,
    image: {
      src: 'gartner-large.svg',
      width: '174',
      height: '38',
      alt: 'Gartner',
    },
    background: '#3A405A',
    quote:
      'We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations.',
    speaker: 'Satya Nadela, CEO Microsoft',
  },
  {
    id: 2,
    image: {
      src: 'microsoft-large.svg',
      width: '176',
      height: '38',
      alt: 'Microsoft',
    },
    background: '#2C233D',
    quote:
      'We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations.',
    speaker: 'Satya Nadela, CEO Microsoft',
  },
  {
    id: 3,
    image: {
      src: 'gartner-large.svg',
      width: '174',
      height: '38',
      alt: 'Gartner',
    },
    background: '#3A405A',
    quote:
      'We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations.',
    speaker: 'Satya Nadela, CEO Microsoft',
  },
];
function IndustrySlider() {
  return (
    <ProgressSlider
      dark={false}
      config={{
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1.5,
          },
          //   1024: {
          //     items: 1.5,
          //   },
        },
      }}>
      {cards.map((c) => (
        <div key={c.id} className="item">
          <div
            className="px-2 py-4 md:px-[60px] md:pt-6 md:pb-[56px] rounded-3xl text-white"
            style={{ background: c.background }}>
            <img
              alt=""
              {...c.image}
              src={`/img/logo/${c.image.src}`}
              className="max-w-[130px] md:max-w-full"
            />
            <p className="mt-3 md:mt-6 mb-2 md:mb-[40px] text-16 leading-7 md:text-22 md:leading-[38px] tracking-[-0.5px] md:tracking-[-1px]">
              “{c.quote}”
            </p>
            <div className="text-18 leading-7 opacity-60">{c.speaker}</div>
          </div>
        </div>
      ))}
    </ProgressSlider>
  );
}

export default IndustrySlider;
