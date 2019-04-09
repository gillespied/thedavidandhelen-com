import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <div className="section">
      <div className="container">
        <h1>Thanks</h1>
        <p>We have received your message and will get back you asap.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
);

export default Thanks;
