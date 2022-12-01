import React from 'react';
import PropTypes from 'prop-types';
function Plane({ id }) {
  return (
    <svg
      className={`absolute w-full ${(id === 1 && 'first bottom-0') || ''}`}
      id={`plane-${id}`}
      width="510"
      height="236"
      viewBox="0 0 510 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 110.175L255 0L510 110.175L255 235.529L0 110.175Z"
        fill="url(#paint0_linear_3202_1652)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3202_1652"
          x1="255.013"
          y1="235.242"
          x2="255.008"
          y2="-0.302797"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#CCCEED" />
        </linearGradient>
      </defs>
    </svg>
  );
}
Plane.propTypes = {
  id: PropTypes.number,
};
export default Plane;
