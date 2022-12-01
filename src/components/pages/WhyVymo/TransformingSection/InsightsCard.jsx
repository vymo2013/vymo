import React from 'react';
import PropTypes from 'prop-types';
function InsightsCard({ title, text, after, icon, dialog, color }) {
  return (
    <div className={`insight-card-container ${color}-card`}>
      <img src={icon} alt="" width="95px" height="88px" className="-ml-2" />
      <h3 className="text-22 lg:text-32 font-bold tracking-[-1px] leading-8 lg:leading-[42px]">
        {title}
      </h3>
      <p className="text-16  text-black opacity-60 leading-7 font-medium mt-1 mb-1 lg:mb-3 w-full lg:w-4/5">
        {text}
      </p>
      {dialog}
      {after}
    </div>
  );
}
InsightsCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  after: PropTypes.node,
  icon: PropTypes.string,
  dialog: PropTypes.node,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow']),
};
InsightsCard.defaultProps = {
  title: '',
  text: '',
  after: null,
  icon: '',
  dialog: null,
  color: 'red',
};
export default InsightsCard;
