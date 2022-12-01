import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroSection from '../components/pages/CaseStudy/HeroSection';
import ChallengesSection from '../components/pages/CaseStudy/ChallengesSection';
import ReadMoreSection from '../components/pages/CaseStudy/ReadMoreSection';
import VymoInActionSection from '../components/sections/VymoInActionSection';

function CaseStudyPage() {
  return (
    <Layout>
      <SEO title="Case Study" />
      <HeroSection />
      <ChallengesSection />
      <ReadMoreSection />
      <VymoInActionSection />
    </Layout>
  );
}

export default CaseStudyPage;
