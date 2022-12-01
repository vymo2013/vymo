import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ReadMoreSlider({ data }) {
  const sliderContainerRef = useRef();
  const sliderRef = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!sliderRef.current && sliderContainerRef.current) {
        sliderRef.current = tns({
          container: sliderContainerRef.current,
          autoplay: false,
          autoplayButtonOutput: false,
          mouseDrag: true,
          loop: true,
          prevButton: false,
          nextButton: false,
          speed: 1000,
          nav: true,
          navPosition: 'bottom',

          responsive: {
            0: {
              gutter: 16,
              items: 1.2,
              controls: false,
              nav: true,
            },

            768: {
              gutter: 16,
              items: 1.1,
              controls: false,
            },
            1024: {
              items: 3,
              controls: false,
            },
          },
        });
      }
    });
  }, []);
  return (
    <div className="container download-slider-container">
      <div ref={sliderContainerRef} className="download-slider">
        {data.map((d) => (
          <div key={d.id} className="item z-10">
            <div className="flex flex-col bg-white p-1.5 md:p-2 rounded-3xl  border border-fluff h-full">
              <div className="h-[125px] md:h-[230px] relative w-full rounded-2xl md:rounded-b-none overflow-hidden">
                <img
                  src={d.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 mb-1 md:mt-3 md:mb-2 font-bold text-22 leading-8">
                {d.title}
              </h3>
              <p className="text-14 font-medium leading-6 opacity-40 text-black h-[4.5rem]  overflow-hidden">
                {d.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
ReadMoreSlider.defaultProps = {
  data: [],
};
ReadMoreSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      img: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};
export default ReadMoreSlider;
