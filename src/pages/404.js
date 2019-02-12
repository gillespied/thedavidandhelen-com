import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container maincontent">
      <h1 className="title">PAGE NOT FOUND</h1>
      <p>
        You've tried to go to a page which doesn't exist. The most likely cause is a type by me.
        Could you use this
        {' '}
        <Link to="contact">link to the contact page</Link>
        {' '}
to tell me what you
        did to end up here? Thanks, David.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
