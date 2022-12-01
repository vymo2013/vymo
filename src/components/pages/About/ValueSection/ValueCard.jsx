import React from 'react';
import PropTypes from 'prop-types';
function ValueCard({ className, title, description }) {
  return (
    <div className={['absolute', className].join(' ')}>
      <h3 className="font-bold text-32 leading-[42px] tracking-[-1px] mb-1">
        {title}
      </h3>
      <p className="font-medium text-16 leading-6 opacity-50 text-black m-0">
        {description}
      </p>
    </div>
  );
}
ValueCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ValueCard.defaultProps = {
  className: '',
  title: '',
  description: '',
};
export default ValueCard;
