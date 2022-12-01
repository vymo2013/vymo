import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function DownloadSlider({ data, imageHeight }) {
  const sliderContainerRef = useRef();
  const sliderRef = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!sliderRef.current && sliderContainerRef.current) {
        sliderRef.current = tns({
          container: sliderContainerRef.current,
          autoplay: false,
          autoplayButtonOutput: false,
          mouseDrag: false,
          loop: true,
          prevButton: false,
          nextButton: false,
          speed: 1000,
          nav: true,
          navPosition: 'bottom',

          responsive: {
            0: {
              gutter: 15,
              items: 1.2,
              controls: false,
              nav: true,
            },

            768: {
              gutter: 0,
              items: 1.1,
              controls: false,
            },
            968: {
              gutter: 0,
              items: 2,
              controls: false,
            },
            1265: {
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
        {data.map((c) => (
          <div key={c.id} className="item z-10">
            <div className="flex flex-col bg-white p-2 rounded-3xl mx-0 md:mx-2 download-card">
              <div
                className={`${imageHeight} flex-shrink-0  flex justify-center items-center rounded-t-2xl`}>
                <img src={c.img} alt={c.alt} className={c.imgClassName} />
              </div>
              <div className="flex-1">
                <h3 className="mt-2 text-22 font-bold">{c.title}</h3>
                <p className="text-14 opacity-40 mt-1">{c.description}</p>
              </div>
              <a
                href={c.downloadText}
                className="download-link md:underline hover:md:underline mb-0 md:mb-2">
                {c.downloadText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
DownloadSlider.defaultProps = {
  data: [],
  imageHeight: 'h-[125px] md:h-[160px] bg-fluff',
};
DownloadSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      img: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      downloadText: PropTypes.string,
      downloadLink: PropTypes.string,
      imgClassName: PropTypes.string,
    }),
  ),
  imageHeight: PropTypes.string,
};
export default DownloadSlider;
