import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const locations = [
  {
    id: 1,
    location: 'San Francisco',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 2,
    location: 'Tokyo',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 3,
    location: 'Jakarta',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 4,
    location: 'Bangkok',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 5,
    location: 'Singapore',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 6,
    location: 'Bangalore',
    address: '6391 Elgin St. Celina, Delaware 10299',
  },
  {
    id: 7,
    location: 'Remote',
    address: null,
  },
];
function OfficeLocationSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative bg-darkPurple about-location-section overflow-hidden fade-in"
      ref={ref}>
      <div className="container">
        <p className="text-16 opacity-50 font-medium text-white text-center lg:text-left">
          OFFICE LOCATIONS
        </p>
        <h2 className="text-28 md:text-48 tracking-[-1px] md:tracking-[-2px] md:leading-[64px] leading-9 font-bold text-white mb-3 md:mb-[80px] text-center lg:text-left">
          Where we are
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-col lg:flex-row flex-wrap w-full lg:w-1/2 h-[0%] md:pr-3 mb-5 lg:mb-0 md:justify-between">
            {locations.map((l) => (
              <div
                className={[
                  'border-b-2 last:border-b-0 lg:last:border-b-2 lg:border-b-2 lg:border-b-transparent border-white/20',
                  l.address
                    ? 'pt-3 pb-0 md:pb-3 xl:pb-6'
                    : 'w-[246px] pb-0 pt-3 lg:pt-0 lg:pb-6 xl:pb-0',
                ].join(' ')}
                key={l.id}>
                <h6 className="text-white font-bold text-22 leading-8 tracking-[-1px]">
                  {l.location}
                </h6>
                {l.address && (
                  <p className="font-medium opacity-60 text-white text-14 leading-[21px] mt-[6px] mb-3 md:mb-1">
                    {l.address}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:block lg:w-1/2 relative mt-[-17%]">
            <img
              src="/img/about/location-1.png"
              alt=""
              width="525px"
              height="463px"
              className="location-1"
            />
            <div className="location-2 absolute xl:relative">
              <img
                src="/img/about/location-2.png"
                alt=""
                width="618px"
                height="260px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocationSection;
