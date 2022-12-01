import React from 'react';
import PropTypes from 'prop-types';
function DropDownCaret({ open, className }) {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`dropdowncaret ${!open && 'open'} ${className}`}>
      <path d="M13 8L6.89349 2L1 8" stroke="#00000A" strokeWidth="2.4" />
    </svg>
  );
}
DropDownCaret.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
};
DropDownCaret.defaultProps = {
  open: false,
  className: '',
};
export default DropDownCaret;
