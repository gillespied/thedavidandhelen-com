import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Venues = () => (
  <Layout>
    <SEO title="Venues" />
    <div className="section">
      <div className="container">
        <h1 className="title">Venues</h1>
        <h2 className="subtitle">The Ceremony</h2>
        <p>The Ceremony is taking paced at Chester Town Hall, nearest parking is at.</p>
        <div className="section">
          <h2 className="subtitle">The Breakfast</h2>
          <p>The wedding breakfast will be at Eaton golf club. Link to maps </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Venues;
