import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroSection from '../components/pages/Resources/HeroSection';
import ScrollableSection from '../components/pages/Resources/ScrollableSection';
import MediaKitSection from '../components/pages/Resources/MediaKitSection';
// import EbookSection from '../components/pages/Resources/EbookSection';

function ResourcesPage() {
  return (
    <Layout footerProps={{ dark: false }}>
      <SEO title="Resources" />
      <HeroSection />
      {/* <section>
        <EbookSection />
      </section> */}
      <ScrollableSection />
      <MediaKitSection />
    </Layout>
  );
}

export default ResourcesPage;
