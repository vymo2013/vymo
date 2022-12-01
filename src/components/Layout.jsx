import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import Header from './Header/Header';
import '../styles/master.scss';
import Footer from './Footer/Footer';

function Layout({ children, headerProps, footerProps, mainClassName }) {
  return (
    <>
      <Header {...headerProps} />
      <main className={mainClassName}>{children}</main>
      <Footer {...footerProps} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainClassName: PropTypes.string,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
};

Layout.defaultProps = {
  headerProps: null,
  footerProps: null,
  mainClassName: '',
};
export default Layout;
