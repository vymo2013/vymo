import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, text, image }) {
  return (
    <div className="w-1/4 px-2 card">
      {/* <div className="card"> */}
      <div className="lineRight absolute" />
      <div
        className="w-full h-[208px] flex justify-center items-center border rounded-xl bg-white px-1 relative z-[1]"
        style={{
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.02)',
        }}>
        <img
          alt=""
          {...image}
          src={`/img/product-overview/${image.src}`}
          loading="lazy"
        />
      </div>
      <div className="text-18 leading-7 tracking-[-1px] font-objectivity font-bold mt-2">
        {title}
      </div>
      <div className="font-medium text-14 leading-6 text-black opacity-50">
        {text}
      </div>
      {/* </div> */}
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};
export default Card;
