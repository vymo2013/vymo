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
    url: '/why-vymo',
    title: 'Why Vymo',
    multiple: false,
  },
  {
    key: 'nav-l-2',
    url: '/product-overview',
    title: 'Product',
    multiple: false,
  },
  {
    key: 'nav-l-3',
    url: 'javascript:void(0);',
    title: 'Solutions',
    multiple: true,
    Submenu: [
      { 
        id: 1,
        title: 'Lead Management',
        url: '/lead-management',
      },
      {
        id: 2,
        title: 'Activity Management',
        url: '#!',
      },
      {
        id: 3,
        title: 'Partner Engagement',
        url: '#!',
      },
      {
        id: 4,
        title: 'Remote Engagement',
        url: '#!',
      },
      {
        id: 5,
        title: 'Sales Enablement',
        url: '#!',
      },
    ],
  },
  {
    key: 'nav-l-5',
    url: 'javascript:void(0);',
    title: 'Use Cases',
    multiple: true,
    Submenu: [
      { 
        id: 1,
        title: 'Wholesaler Productivity',
        url: '/use-cases/improve-wholesaler-productivity/',
      },
      {
        id: 2,
        title: 'Commercial Banking',
        url: '#!',
      },
      {
        id: 3,
        title: 'Independent Agents',
        url: '#!',
      },
      {
        id: 4,
        title: 'Improve Renewals',
        url: '#!',
      },
      {
        id: 5,
        title: 'Wealth Banking',
        url: '#!',
      },
      {
        id: 6,
        title: 'Retail Sales',
        url: '#!',
      },
      {
        id: 7,
        title: 'SMB Banking',
        url: '#!',
      },
      {
        id:8,
        title: 'Mobile Sales CR',
        url: '#!',
      },
      {
        id:9,
        title: 'Sales Tracking Software',
        url: '#!',
      },
    ],
  },
  {
    key: 'nav-l-4',
    url: '/resources',
    title: 'Resources',
    multiple: false,
  },
];

// scroll direction hook
// function useScrollDirection() {
//   const [scrollDirection, setScrollDirection] = React.useState(null);

//   React.useEffect(() => {
//     let lastScrollY = window.pageYOffset;

//     const updateScrollDirection = () => {
//       const scrollY = window.pageYOffset;
//       const direction = scrollY > lastScrollY ? "down" : "up";
//       if (direction !== scrollDirection && (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -2)) {
//         setScrollDirection(direction);
//       }
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };
//     window.addEventListener("scroll", updateScrollDirection); // add event listener
//     return () => {
//       window.removeEventListener("scroll", updateScrollDirection); // clean up
//     }
//   }, [scrollDirection]);

//   return scrollDirection;
// };

function Header({ dark }) {
  // const scrollDirection = useScrollDirection();
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

   // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
           
    // /* Method that will fix header after a specific scrollable */
     const isSticky = (e) => {
          const header = document.querySelector('.header-main');
          const scrollTop = window.scrollY;
          scrollTop >= 260 ? header.classList.add('sticky') : header.classList.remove('sticky');
      };

  return (
    <header>
      {/* sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500  */}
      <div className={`header-main ${!dark ? 'light' : ''}`}>
        <div className="fluid-container">
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
                  to={l.url}
                  key={l.key}
                  className={`flex items-center text-[15px] font-medium	 ${
                    l.multiple && 'nav-multiple' 
                  }`}>
                  {/* <a> */}
                  <span className={`inline-block ${l.multiple && 'mr-1'}`}>
                    {l.title}
                  </span>
                  {l.multiple && <Caret/>}

                  {l.multiple == true &&
                     <ul className="dropdown-menu">
                        {l.Submenu.map((sl) => (
                          <li key={`${sl.title}-${sl.id}`} className="dropdown-header">
                            <a href={sl.url}>
                              {sl.title}
                            </a>
                          </li>
                        ))}
                    </ul>
                  }
                </Link>
              ))}
              <a href="book-a-demo" className="flex items-center text-[15px] font-medium false lg:hidden xl:hidden"><Button className="header-action">Book Demo</Button></a>
            </ul>
            
            <a href="book-a-demo"><Button className="header-action">Book Demo</Button></a>

            <button
              onClick={navOpenTrigger}
              className={`hamburger inline-flex lg:hidden xl:hidden justify-center items-end flex-col w-5 h-5 relative z-50 ${
                openNav ? 'nav-open' : ''
              }`}
              type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
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
