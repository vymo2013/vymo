import React from 'react';
import PropTypes from 'prop-types';
function Dialog({ minutes, text, icon, progress, actionButton }) {
  return (
    <div className="dialog-container">
      <div className="img-container">
        <img alt="" {...icon} />
      </div>
      <div className="text-container">
        {text}
        {progress && (
          <>
            {progress.complete && (
              <div
                className="progress complete"
                style={{ width: `calc(${progress.complete}% - 2px )` }}></div>
            )}
            {progress.unfinished && (
              <div
                className="progress unfinished"
                style={{ width: `${progress.unfinished}%` }}></div>
            )}
          </>
        )}

        {minutes && <p className="minutes">{minutes} minutes ago</p>}
      </div>
      {actionButton && <div>{actionButton}</div>}
    </div>
  );
}
Dialog.propTypes = {
  minutes: PropTypes.string,
  text: PropTypes.node,
  icon: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
  }),
  progress: PropTypes.shape({
    complete: PropTypes.number,
    unfinished: PropTypes.number,
  }),
  actionButton: PropTypes.node,
};
Dialog.defaultProps = {
  minutes: null,
  text: null,
  icon: {
    src: '',
    width: '',
    height: '',
    alt: '',
  },
  progress: null,
  actionButton: null,
};
export default Dialog;
