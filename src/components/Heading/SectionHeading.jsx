import React from 'react';
import PropTypes from 'prop-types';
function SectionHeading({ children, className, textAlign }) {
  return (
    <h2
      className={[
        `text-28 md:text-48  tracking-[-1px] md:tracking-[-2px] md:leading-[64px] leading-9 font-bold text-${textAlign}`,
        className,
      ].join(' ')}>
      {children}
    </h2>
  );
}
SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
};
SectionHeading.defaultProps = {
  className: '',
  textAlign: 'center',
};
export default SectionHeading;
