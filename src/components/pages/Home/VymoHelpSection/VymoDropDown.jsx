import PropTypes from 'prop-types';
import React from 'react';
import DropDownCaret from '../../../assets/DropDownCaret';

function VymoDropDown({
  icon,
  title,
  description,
  learnMore,
  ImageComp,
  open,
  onClick,
}) {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick(e);
    }
  };
  return (
    <div
      className={`help-dropdown-item bg-white flex flex-wrap ${
        open && 'active'
      } md:mb-2 border-b-2 last:border-b-0 md:last:border-b-2 md:border-b-2 rounded-none md:rounded-2xl`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button">
      <div className="relative">
        <img alt="" className="w-4/5 md:w-full" {...icon} />
      </div>
      <div className="flex-1 self-center text-left -ml-4 md:ml-0 container-drop-down">
        <h4 className="text-22 font-bold flex items-center  justify-between tracking-[-1px] leading-8">
          {title}
          <DropDownCaret className="float-right ml-1" open={open} />
        </h4>
        <div className="dropdown-content transition-all">
          <p className="text-14 md:text-16 font-medium opacity-60 leading-7 ">
            {description}
          </p>
          <a href={learnMore}>
            Learn More
            <div className="arrow-right">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.4283 5.47539L11.2996 6.6094L13.9158 9.21338L3.03177 9.22433L3.03338 10.8243L13.8876 10.8134L11.3155 13.3976L12.4495 14.5263L16.9644 9.99027L12.4283 5.47539Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="img-comp relative mx-auto">
        <img src="/img/help-bg.png" alt="" className="w-[511px] h-auto z-0" />
        <div className="absolute bottom-0">{ImageComp}</div>
      </div>
    </div>
  );
}
VymoDropDown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  learnMore: PropTypes.string,
  icon: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  ImageComp: PropTypes.node,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};
VymoDropDown.defaultProps = {
  title: '',
  description: '',
  learnMore: '#!',
  icon: {
    src: '',
    width: '',
    height: '',
  },
  ImageComp: () => <div></div>,
  open: false,
  onClick: undefined,
};
export default VymoDropDown;
