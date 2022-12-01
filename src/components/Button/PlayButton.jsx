import React from 'react';
import PropTypes from 'prop-types';

const PlayButton = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={`flex items-center justify-start px-1.5 py-1 ${className} bg-purple bg-opacity-10 group hover:bg-opacity-100 text-black hover:text-white rounded-[36px]`}
      {...props}>
      <svg
        width="28"
        height="28"
        className="inline-block mr-1"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="28"
          height="28"
          rx="14"
          fill="#505ECE"
          className="group-hover:fill-white"
        />
        <path
          d="M19.5 13.134C20.1667 13.5189 20.1667 14.4811 19.5 14.866L12 19.1962C11.3333 19.5811 10.5 19.0999 10.5 18.3301V9.66987C10.5 8.90007 11.3333 8.41895 12 8.80385L19.5 13.134Z"
          fill="white"
          className="group-hover:fill-purple"
        />
      </svg>
      {children}
    </button>
  ),
);
PlayButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
};
PlayButton.defaultProps = {
  children: <>Play Episode</>,
  className: '',
};
export default PlayButton;
