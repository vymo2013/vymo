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
        </div>
      </div>
      <div className="img-comp relative mx-auto">
        {/* <img src="/img/help-bg.png" alt="" className="w-[511px] h-auto z-0" /> */}
        <div className="relative">{ImageComp}</div>
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
