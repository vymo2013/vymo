import React from 'react';
import PropTypes from 'prop-types';
function BenifitCard({
  img,
  width,
  height,
  alt,
  percentage,
  description,
  className,
  fontSize,
}) {
  return (
    <div
      className={`bg-[#2C233D] py-2 md:pt-[40px] md:pb-[31px] px-2 md:pl-[40px] md:pr-[55px] rounded-2xl benifit-card h-full ${className}`}>
      <div className="w-full">
        <img src={img} alt={alt} width={width} height={height} />
      </div>
      <h3 className="mt-2 lg:mt-[35px] text-48 lg:text-60 text-white tracking-[-3px] md:tracking-[-2px] leading-[60px]">
        {percentage} <span className="relative -left-1 md:-left-2">%</span>
      </h3>
      <p
        className={`text-12 lg:text-${fontSize} text-white opacity-60 lg:mt-2 leading-5 mb-0`}>
        {description}
      </p>
    </div>
  );
}
BenifitCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  percentage: PropTypes.number,
  description: PropTypes.string,
  fontSize: PropTypes.string,
};
BenifitCard.defaultProps = {
  img: '',
  alt: '',
  width: '',
  height: '',
  className: '',
  percentage: 0,
  description: '',
  fontSize: '16',
};
export default BenifitCard;
