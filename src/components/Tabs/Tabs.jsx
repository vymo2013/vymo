import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../utils';

function Tabs({ data, fullWidth, centered }) {
  const [activeTab, setActiveTab] = useState(
    (data.length && data[0]?.key) || '',
  );
  const indicator = useRef();
  const indicatorContainer = useRef();
  const nav = useRef();

  const onClick = (key) => {
    setActiveTab(key);
  };
  const adjustIndicator = useCallback(() => {
    // function isOverflown(element) {
    //   return (
    //     element.scrollHeight > element.clientHeight ||
    //     element.scrollWidth > element.clientWidth
    //   );
    // }
    function getMargin(element) {
      return (
        2 *
        parseFloat(
          window.getComputedStyle(element).getPropertyValue('margin-left'),
        )
      );
    }
    try {
      if (indicator.current) {
        const activeIndex = data.findIndex((t) => t.key === activeTab);
        const activeNav = nav.current.children[activeIndex];
        const margin = getMargin(activeNav);
        let width = activeNav.clientWidth + margin;
        const rect = activeNav.getBoundingClientRect();
        const rectContainer =
          indicatorContainer.current?.getBoundingClientRect();
        const left = rect.left || 0;
        const leftContainer = rectContainer?.left || 0;
        width = activeNav.offsetWidth + margin;
        indicator.current.style.width = `${width}px`;
        indicator.current.style.transform = `translateX(${
          left - leftContainer - margin / 2
        }px)`;
        // console.log(x, rect);
      }
    } catch (error) {
      if (indicator.current) {
        indicator.current.style.width = '0px';
        indicator.current.style.left = `0px`;
      }
    }
  }, [activeTab]);

  useEffect(() => {
    adjustIndicator();
    const debouncedCallBack = debounce(adjustIndicator);
    window.addEventListener('resize', debouncedCallBack);
    return () => window.removeEventListener('resize', debouncedCallBack);
  }, [activeTab]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      indicator.current?.classList.remove('disabled');
      return () => clearTimeout(timeout);
    }, 200);
  }, []);
  const activeClass = (key) => `${(activeTab === key && 'active') || ''}`;
  return (
    <div className="tabs-container">
      <header className="scroll-snap-x">
        <nav ref={nav} className={`${(centered && 'centered') || ''}`}>
          {data.map((t) => (
            <button
              type="button"
              onClick={() => onClick(t.key)}
              key={t.key}
              className={`${(fullWidth && 'full-width') || ''}  ${activeClass(
                t.key,
              )}`}>
              {t.header}
            </button>
          ))}
        </nav>
        <div className="indicator-container" ref={indicatorContainer}>
          <div className="indicator disabled" ref={indicator}></div>
        </div>
      </header>
      <div className="tab-contents">
        {data.map(({ key, content }) => (
          <div className={`content-container ${activeClass(key)}`} key={key}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
Tabs.propTypes = {
  fullWidth: PropTypes.bool,
  centered: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      header: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    }),
  ),
};
Tabs.defaultProps = { data: [], fullWidth: true };
export default Tabs;
