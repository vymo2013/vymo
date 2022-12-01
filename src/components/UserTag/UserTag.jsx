import PropTypes from 'prop-types';
import React from 'react';
function UserTag({ className, avatar, name, designation, shadow }) {
  return (
    <div className={`user-tag-container ${className} ${shadow && 'shadow'}`}>
      <div className="image-container">
        <img alt="" {...avatar} />
      </div>
      <div className="name-container">
        <div className="name">{name}</div>
        {designation && <div className="designation">{designation}</div>}
      </div>
    </div>
  );
}
UserTag.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  name: PropTypes.string,
  shadow: PropTypes.bool,
  designation: PropTypes.string,
};
UserTag.defaultProps = {
  className: '',
  name: '',
  designation: null,
  shadow: false,
  avatar: {
    src: '',
    width: '',
    height: '',
    alt: '',
  },
};
export default UserTag;
