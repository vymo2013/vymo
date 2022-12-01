import React from 'react';
import PropTypes from 'prop-types';

function Content({ heading, content }) {
  return (
    <div className="mb-5 md:mb-6">
      <h3 className="text-18 md:text-22 leading-7 md:leading-8 tracking-[-1px] font-medium text-whale">
        {heading}
      </h3>
      <div className="text-14 leading-[21px] md:text-16 md:leading-7 font-medium opacity-60 text-black mt-1">
        {content}
      </div>
    </div>
  );
}
Content.propTypes = {
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
};
export default Content;
