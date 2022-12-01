import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from '../Button/PlayButton';
function PodCastCard({ image, time, title }) {
  return (
    <div className="flex flex-col py-[20px] md:p-2 rounded-3xl">
      <div className="h-[148px] md:h-[290px] relative w-full rounded-2xl overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-2 md:mt-3 mb-2 font-bold text-22 leading-8">{title}</h3>
      <div className="flex justify-start items-center">
        <PlayButton />
        <div className="text-14 leading-6 flex items-center ml-1 justify-start font-medium">
          <span className="w-full max-w-[4px] h-0.5 flex-shrink-0 rounded-full inline-block bg-black mx-1"></span>
          {time}
        </div>
      </div>
    </div>
  );
}
PodCastCard.defaultProps = {
  //   url: '!#',
};
PodCastCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  //   url: PropTypes.string,
  time: PropTypes.string,
};
export default PodCastCard;
