import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Caret from '../assets/Caret';
import VymoLogo from '../assets/VymoLogo';
import Button from '../Button/Button';
import './Header.scss';

const Links = [
  {
    key: 'nav-l-1',
    path: '/why-vymo',
    text: 'Why Vymo',
    multiple: false,
  },
  {
    key: 'nav-l-2',
    path: '#!',
    text: 'Solutions',
    multiple: true,
    menuLinks: [
      {
        name: 'Lead Management',
        link: '/lead-management',
      },
      {
        name: 'Activity Management',
        link: '#!',
      },
      {
        name: 'Partner Engagement',
        link: '#!',
      },
      {
        name: 'Remote Engagement',
        link: '#!',
      },
      {
        name: 'Sales Enablement',
        link: '#!',
      },
    ],
  },
  {
    key: 'nav-l-3',
    path: '/product-overview',
    text: 'Product Overview',
    multiple: false,
  },
  {
    key: 'nav-l-4',
    path: '/resources',
    text: 'Resources',
    multiple: false,
  },
  {
    key: 'nav-l-5',
    path: '/about',
    text: 'About',
    multiple: false,
  },
];

function Header({ dark }) {
  const [openNav, setOpenNav] = useState(false);
  const navOpenTrigger = () => {
    setOpenNav((state) => !state);
  };
  useEffect(() => {
    /**
     * close nav on width more than 1280 on resize
     */
    const resizeListener = () => {
      try {
        const getWidth = () =>
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth ||
          1280;
        if (getWidth() >= 1280 && openNav) {
          setOpenNav(false);
        }
      } catch (error) {
        setOpenNav(false);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [openNav]);
  return (
    <header>
      <div className={`header-main ${!dark ? 'light' : ''}`}>
        <div className="container">
          <div
            className={`flex flex-row justify-between items-center header-container ${
              openNav ? 'show' : ''
            }`}>
            <Link to="/" style={{ zIndex: 1 }}>
              <VymoLogo dark={openNav && !dark ? true : dark} />
            </Link>
            <ul className={`nav-list ${openNav ? 'show' : ''}`}>
              {Links.map((l) => (
                <Link
                  to={l.path}
                  key={l.key}
                  className={`flex items-center text-[15px] font-medium	 ${
                    l.multiple && 'nav-multiple'
                  }`}>
                  {/* <a> */}
                  <span className={`inline-block ${l.multiple && 'mr-1'}`}>
                    {l.text}
                  </span>
                  {l.multiple && <Caret />}
                  {/* </a> */}
                </Link>
              ))}
            </ul>
            <button
              onClick={navOpenTrigger}
              className={`hamburger inline-flex xl:hidden justify-center items-end flex-col w-5 h-5 relative z-50 ${
                openNav ? 'nav-open' : ''
              }`}
              type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Button className="header-action">Book Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  dark: PropTypes.bool,
};
Header.defaultProps = {
  dark: true,
};
export default Header;
