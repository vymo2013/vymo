import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';
const mediaKitData = [
  {
    id: 0,
    image: '/img/resources/m-1.png',
    title: 'Vymo Logo',
    description:
      'Download vector and .png versions of our symbol and logotype.',
  },
  {
    id: 1,
    image: '/img/resources/m-2.png',
    title: 'Vymo Logo',
    description:
      'Download vector and .png versions of our symbol and logotype.',
  },
  {
    id: 2,
    image: '/img/resources/m-3.png',
    title: 'Our Product',
    description:
      'Download vector and .png versions of our symbol and logotype.',
  },
  {
    id: 3,
    image: '/img/resources/m-4.png',
    title: 'Board Members',
    description:
      'Download vector and .png versions of our symbol and logotype.',
  },
];
function MediaKitSection() {
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeading className="mb-2 md:mb-6">Media Kit</SectionHeading>
        <div className="flex flex-wrap">
          {mediaKitData.map((d) => (
            <div className="w-full md:w-1/2" key={d.id}>
              <div className="flex flex-wrap py-[20px] md:py-4 md:pr-2 md:border-b">
                <div className="w-full md:max-w-[200px] md:max-h-[142px] relative rounded-xl overflow-hidden md:mr-4">
                  <img
                    src={d.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mt-2 md:mt-0 mb-1 md:mb-2 font-bold text-22 leading-8">
                    {d.title}
                  </h3>
                  <p className="text-14 font-medium leading-6 opacity-60 text-black mb-0">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaKitSection;
