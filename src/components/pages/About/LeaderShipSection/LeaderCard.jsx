import React from 'react';
import PropTypes from 'prop-types';
function LeaderCard({ name, designation, img, width, height }) {
  return (
    <div className="leader-card group">
      <div className="bg-[#EFEFEF] rounded-xl max-w-[294px] h-[175px] md:h-[312px] relative flex justify-center overflow-hidden">
        <img
          src="/img/design-element/person-hover-bg.svg"
          alt=""
          className="absolute max-w-[200%] top-[-20%] pointer-events-none group-hover:scale-100 scale-0 transition z-0"
        />
        <img
          src={img}
          alt={name}
          width={width}
          height={height}
          className="object-contain object-bottom z-[1]"
        />
      </div>
      <div className="font-bold text-16 md:text-18 leading-7 text-black mt-[6px] md:mt-1">
        {name}
      </div>
      <div className="font-medium text-14 leading-7 opacity-60 text-black m-0">
        {designation}
      </div>
    </div>
  );
}
LeaderCard.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string,
  img: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
LeaderCard.defaultProps = {
  name: '',
  designation: '',
  img: '',
  width: '',
  height: '',
};
export default LeaderCard;
