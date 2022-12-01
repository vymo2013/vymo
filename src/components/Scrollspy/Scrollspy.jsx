import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import elementOffset from '../../utils/elementOffset';

function Scrollspy({ centeredLinks, children, defaultSection }) {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const [menuItems, setMenuItems] = useState([]);

  const containerRef = useRef();
  const spyRef = useRef();

  const scrollHandler = useCallback(() => {
    if (menuItems.length > 0) {
      let lastID = defaultSection;

      menuItems.forEach(({ el, id }) => {
        if (window.pageYOffset > elementOffset(el, 'top') - 150) lastID = id;
      });

      setActiveSection(lastID);
    }
  }, [menuItems]);

  const linkClickHandler = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    window.scrollTo({
      top:
        elementOffset(
          document.querySelector(
            `[data-spy-id="${new URL(e.target.href).hash.replace('#', '')}"]`,
          ),
          'top',
        ) - 40,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('[data-spy-id]');

      setMenuItems(
        Array.from(elements).map((el) => ({
          id: el.dataset.spyId,
          label: el.dataset.spyTitle || el.dataset.spyId,
          el,
        })),
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);
  return (
    <div ref={containerRef}>
      <div
        ref={spyRef}
        className={`scrollspy${activeSection ? ' is-sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="secondary-nav-col">
              <div
                className={`${
                  (centeredLinks && 'center-nav-links') || 'center-nav-links'
                } bold`}>
                {menuItems.map(({ id, label }) => (
                  <Link
                    key={id}
                    to={`#${id}`}
                    className={id === activeSection ? 'is-active' : ''}
                    onClick={linkClickHandler}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

Scrollspy.propTypes = {
  children: PropTypes.node.isRequired,
  centeredLinks: PropTypes.bool,
  defaultSection: PropTypes.string,
};
Scrollspy.defaultProps = {
  centeredLinks: false,
  defaultSection: '',
};
export default Scrollspy;
