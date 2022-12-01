import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function LogoSlider({ data, domainUrl, config }) {
  const logoSliderRef = useRef();
  const logoSliderWrapper = useRef();
  useEffect(() => {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      if (!logoSliderRef.current && logoSliderWrapper.current) {
        logoSliderRef.current = tns({
          container: logoSliderWrapper.current,
          autoplayButtonOutput: false,
          mouseDrag: false,
          loop: true,
          gutter: 40,
          speed: 4000,
          controls: false,
          nav: false,
          preventActionWhenRunning: true,
          ...config,
        });
      }
    });
  }, []);

  return (
    <div className="flex logo-slider marquee-slider" ref={logoSliderWrapper}>
      {(data || []).map(({ id, src, alt, width, height }) => (
        <div key={id} className="item">
          <div className="logo-image">
            <img
              src={domainUrl.length > 0 ? `${domainUrl}/${src}` : src}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

LogoSlider.defaultProps = {
  data: null,
  domainUrl: '',
  config: {},
};

LogoSlider.propTypes = {
  domainUrl: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  ),
  config: PropTypes.object,
};

export default LogoSlider;
