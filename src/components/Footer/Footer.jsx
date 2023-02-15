import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import VymoLogo from '../assets/VymoLogo';
import './Footer.scss';

const links = [
  {
    id: 1,
    title: 'Product',
    className: 'w-1/2 order-1 md:order-1',
    subLinks: [
      {
        id: 1,
        title: 'Overview',
        link: '/product-overview',
      },
      {
        id: 2,
        title: 'CRM + Vymo',
        link: '#!',
      },
      {
        id: 3,
        title: 'Integrations',
        link: '#!',
      },
      {
        id: 4,
        title: 'Trust Center',
        link: '#!',
      },
      {
        id: 5,
        title: 'Security',
        link: '#!',
      },
      {
        id: 6,
        title: 'Compliance',
        link: '#!',
      },
      {
        id: 7,
        title: 'Privacy',
        link: '/privacy-policy',
      },
      {
        id: 8,
        title: 'Pricing',
        link: '#!',
      },
      {
        id: 9,
        title: 'FAQ',
        link: '#!',
      },
    ],
  },
  {
    id: 2,
    title: 'Solutions',
    className: 'w-1/2 order-2 md:order-2',
    subLinks: [
      {
        id: 1,
        title: 'Lead Management',
        link: '/lead-management',
      },
      {
        id: 2,
        title: 'Activity Management',
        link: '#!',
      },
      {
        id: 3,
        title: 'Partner Engagement',
        link: '#!',
      },
      {
        id: 4,
        title: 'Remote Engagement',
        link: '#!',
      },
      {
        id: 5,
        title: 'Sales Enablement',
        link: '#!',
      },
    ],
  },
  {
    id: 3,
    title: 'Company',
    className: 'w-1/2 order-4 md:order-3',
    subLinks: [
      {
        id: 1,
        title: 'About',
        link: '/about',
      },
      {
        id: 2,
        title: 'Culture',
        link: '#!',
      },
      {
        id: 3,
        title: 'Careers',
        link: '#!',
      },
      {
        id: 4,
        title: 'Press',
        link: '/press',
      },
      {
        id: 5,
        title: 'Customers',
        link: '#!',
      },
      {
        id: 6,
        title: 'Partners',
        link: '#!',
      },
    ],
  },
  {
    id: 4,
    title: 'Use Cases',
    className: 'w-full order-3 md:order-4',
    subLinks: [
      {
        id: 1,
        title: 'Improve Wholesaler Productivity',
        link: '#!',
      },
      {
        id: 2,
        title: 'Improve Commercial Banking Relationships',
        link: '#!',
      },
      {
        id: 3,
        title: 'Independent Agents / Broker',
        link: '#!',
      },
      {
        id: 4,
        title: 'Increase Partner Book of Busines',
        link: '#!',
      },
      {
        id: 5,
        title: 'Improve Renewals',
        link: '#!',
      },
      {
        id: 6,
        title: 'Increase Share of Wallet (Wealth',
        link: '#!',
      },
      {
        id: 7,
        title: 'Improve customer onboarding',
        link: '#!',
      },
      {
        id: 8,
        title: 'Sales Management Software',
        link: '#!',
      },
      {
        id: 9,
        title: 'Sales Tracking Software',
        link: '#!',
      },
      {
        id: 10,
        title: 'Sales Engagement Software',
        link: '#!',
      },
      {
        id: 11,
        title: 'Sales Performance Management Software',
        link: '#!',
      },
      {
        id: 12,
        title: 'Mobile Sales CR',
        link: '#!',
      },
    ],
  },
  {
    id: 5,
    title: 'Resources',
    className: 'w-1/2 order-5 md:order-5',
    subLinks: [
      {
        id: 1,
        title: 'Case Studies',
        link: '/case-study',
      },
      {
        id: 2,
        title: 'Webinars',
        link: '#!',
      },
      {
        id: 3,
        title: 'Ebooks',
        link: '#!',
      },
      {
        id: 4,
        title: 'Blog',
        link: '#!',
      },
      {
        id: 5,
        title: 'Podcast',
        link: '#!',
      },
    ],
  },
];
function Footer({ dark }) {
  return (
    <footer className={`main-footer ${dark ? 'bg-darkblack' : 'bg-white'}`}>
      <div className="fluid-container">
        <div className="flex flex-wrap flex-row pt-3 md:pt-[80px] md:pl-3 md:pr-0">
          {links.map((l) => (
            <div
              className={`md:flex-1 ${l.className} mt-[40px] md:mt-0`}
              key={`${l.title}`}>
              <h6
                className={`${
                  dark ? 'text-white' : 'text-black'
                } text-15 font-bold`}>
                {l.title}
              </h6>
              <ul className="mt-2">
                {l.subLinks.map((sl) => (
                  <li key={`${sl.title}-${sl.id}`} className="my-1">
                    <a
                      href={sl.link}
                      className={`text-14 font-medium ${
                        dark ? 'text-white' : 'text-black'
                      } opacity-50 hover:opacity-80`}>
                      {sl.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-row w-full justify-between flex-wrap pb-[0px] md:pb-[80px] mt-3 md:mt-7">
          <div className="order-1 w-auto">
            <Link to="/">
              <VymoLogo dark={!dark} />
            </Link>
          </div>
          <div
            className={`order-3 md:order-2 w-full md:w-auto flex ${
              dark ? 'text-white' : 'text-black'
            } text-14 privacy-link-container justify-between py-5 mt-[36px] md:mt-0 md:py-0 items-center`}>
            <div className="opacity-60 md:ml-0">
              © Vymo {new Date().getFullYear()}
            </div>
            <a href="/privacy-policy" className="md:ml-4">
              Privacy
            </a>
            <a href="/terms-of-service" className="md:ml-4">
              Terms and Conditions
            </a>
          </div>
          <div className="order-2 md:order-3 w-auto flex flex-row">
            <a href="#!" className="hover:opacity-80">
              <img
                src="/img/icons/twitter.svg"
                alt=""
                width="34px"
                height="34px"
              />
            </a>
            <a href="#!" className="hover:opacity-80 ml-2">
              <img
                src="/img/icons/facebook.svg"
                alt=""
                width="34px"
                height="34px"
              />
            </a>
            <a href="#!" className="hover:opacity-80 ml-2">
              <img
                src="/img/icons/linkedin.svg"
                alt=""
                width="34px"
                height="34px"
              />
            </a>
            <a href="#!" className="hover:opacity-80 ml-2">
              <img
                src="/img/icons/instagram.svg"
                alt=""
                width="34px"
                height="34px"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
Footer.propTypes = {
  dark: PropTypes.bool,
};
Footer.defaultProps = {
  dark: true,
};
export default Footer;
