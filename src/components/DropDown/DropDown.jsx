import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownCaret from '../assets/DropDownCaret';
function DropDown({ data, defaultKey }) {
  const [activeKey, setActiveKey] = useState(
    defaultKey.length ? defaultKey : data[0]?.id || '',
  );
  const onClick = (index) => () => setActiveKey(index);
  const onKeyDown = (index) => (e) => {
    /** Enter button */
    if (e.keyCode === 13) {
      setActiveKey(index);
    }
  };
  return (
    <div className="dropdown-tabs">
      {data.map((d) => (
        <div
          key={d.id}
          className="tab"
          role="button"
          onClick={onClick(d.id)}
          tabIndex={0}
          onKeyDown={onKeyDown(d.id)}>
          <div className="title">
            {d.title}
            <DropDownCaret className="ml-1 mt-3" open={activeKey === d.id} />
          </div>
          <div className={`tab-content ${activeKey === d.id && 'active'}`}>
            {d.content}
          </div>
        </div>
      ))}
    </div>
  );
}
DropDown.propTypes = {
  defaultKey: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.node,
      content: PropTypes.node,
    }),
  ),
};
DropDown.defaultProps = {
  data: [],
  defaultKey: '',
};
export default DropDown;
