import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/pages/Error/HeroSection';
import SEO from '../components/SEO';

function ErrorPage() {
  return (
    <Layout>
      <SEO title="404" />
      <HeroSection />
    </Layout>
  );
}

export default ErrorPage;
