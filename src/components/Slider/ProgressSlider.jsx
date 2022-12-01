import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
function ProgressSlider({ children, dark, config }) {
  const sliderRef = useRef();
  const sliderContainerRef = useRef();
  const sliderProgressRef = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!sliderRef.current && sliderContainerRef.current) {
        sliderRef.current = tns({
          container: sliderContainerRef.current,
          autoplay: false,
          autoplayButtonOutput: false,
          mouseDrag: true,
          loop: false,
          controls: true,
          controlsPosition: 'bottom',
          speed: 800,
          nav: false,
          gutter: 30,
          controlsContainer: '.slider-arrows',
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
            },
          },
          ...config,
        });
        const sliderinfo = sliderRef.current.getInfo();
        const totalSlides = sliderinfo.slideCountNew - sliderinfo.items + 1;
        sliderProgressRef.current.style.width = `${100 / totalSlides}%`;
        sliderRef.current.events.on('transitionStart', (info) => {
          const totalSlide = info.slideCountNew - info.items + 1;
          sliderProgressRef.current.style.width = `${
            (info.displayIndex * 100) / totalSlide
          }%`;
        });
      }
    });
  }, []);
  return (
    <div
      className={`progress-slider-container slider-overflow-visible tns-arrows-mobile ${
        !dark ? 'light' : ''
      }`}>
      <div ref={sliderContainerRef}>{children}</div>
      <div className="flex items-center mt-5 hidden-mobile">
        <div className="slider-progress">
          <div className="progress" ref={sliderProgressRef}></div>
        </div>

        <div className="slider-arrows tns-controls">
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.96133 17.6562L10.3722 16.2387L7.10199 12.9838L20.707 12.9701L20.705 10.9701L7.13726 10.9837L10.3524 7.7535L8.93489 6.3426L3.29125 12.0126L8.96133 17.6562Z"
                fill={dark ? '#00000A' : '#ffffff'}
              />
            </svg>
          </button>
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.0387 6.34375L13.6278 7.76127L16.898 11.0162L3.29297 11.0299L3.29498 13.0299L16.8627 13.0163L13.6476 16.2465L15.0651 17.6574L20.7087 11.9874L15.0387 6.34375Z"
                fill={dark ? '#00000A' : '#ffffff'}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
ProgressSlider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  config: PropTypes.object,
  dark: PropTypes.bool,
};
ProgressSlider.defaultProps = {
  children: null,
  config: {},
  dark: true,
};

export default ProgressSlider;
