import React from 'react';
import Layout from '../components/layout';
import Description from '../components/description';
import Technologies from '../components/technologies';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO />
    <Description />
    <Technologies />
  </Layout>
);

export default HomePage;
