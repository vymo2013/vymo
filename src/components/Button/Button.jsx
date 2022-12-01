import React from 'react';
import PropTypes from 'prop-types';
// import './Button.scss';
/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      disabled,
      secondary,
      secondaryWhite,
      primaryOutline,
      primaryRed,
      large,
      responsiveLarge,
      link,
      chevron,
      className,
      ...props
    },
    ref,
  ) => {
    const secondaryColor =
      (secondary &&
        (secondaryWhite ? 'btn-secondary-white' : 'btn-secondary')) ||
      '';
    const primaryColor = primaryOutline ? 'btn-primary-outline' : 'btn-primary';
    const buttonColor = secondary ? secondaryColor : primaryColor;
    return (
      <button
        type="button"
        ref={ref}
        onClick={onClick}
        {...props}
        className={[
          'btn',
          (chevron && 'btn-chv') || '',
          (large && 'btn-large') || '',
          (responsiveLarge && 'btn-responsive-large') || '',
          (primaryRed && 'btn-primary-red') || '',
          !link ? buttonColor : 'btn-primary-link',
          className,
        ].join(' ')}>
        {children}
        {chevron && (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline ml-1 -mr-1 transition">
            <path
              className="fill-white"
              d="M11.778 5.25781L10.7199 6.32095L13.1725 8.76218L2.96875 8.77245L2.97026 10.2724L13.1461 10.2622L10.7347 12.6849L11.7979 13.7431L16.0306 9.49051L11.778 5.25781Z"
              // fill="white"
            />
          </svg>
        )}
      </button>
    );
  },
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  responsiveLarge: PropTypes.bool,
  link: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryWhite: PropTypes.bool,
  primaryOutline: PropTypes.bool,
  primaryRed: PropTypes.bool,
  className: PropTypes.string,
  chevron: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  secondary: false,
  primaryOutline: false,
  primaryRed: false,
  secondaryWhite: false,
  chevron: false,
  className: '',
};
Button.displayName = 'Button';
export default Button;
