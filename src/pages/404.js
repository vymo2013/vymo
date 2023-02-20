import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/pages/Error/HeroSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import SEO from '../components/SEO';

function ErrorPage() {
  return (
    <Layout>
      <SEO title="404 Page" description="The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for." />
      <HeroSection />
      <GetStartedSection />
    </Layout>
  );
}

export default ErrorPage;
