import React from 'react';
import PropTypes from 'prop-types';

function WebinarCard({ className, time, title, description, image }) {
  return (
    <div
      className={`flex flex-col md:flex-row flex-wrap md:flex-nowrap mb-4 last:mb-0 ${className}`}>
      <div className="h-[250px] md:h-[200px] md:min-w-[250px] lg:min-w-[200px] rounded-lg overflow-hidden relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover absolute"
        />
      </div>
      <div className="md:pl-[20px]">
        <div className="mt-2 mb-1 md:mt-0 md:mb-2 text-purple text-14 leading-[21px] font-medium">
          {time}
        </div>
        <h3 className="mb-1 font-bold text-22 leading-8">{title}</h3>
        <p className="text-14 font-medium leading-6 opacity-60 text-black h-[3rem] overflow-hidden md:mb-1">
          {description}
        </p>
      </div>
    </div>
  );
}
WebinarCard.defaultProps = {
  className: '',
};
WebinarCard.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};
export default WebinarCard;
