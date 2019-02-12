import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const RSVPconfirm = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks.</h1>
    <p>
      If you are seeing this message your rsvp has been received. If you are attending, Great! See
      you on 3rd August. You might want to check out the rest of the site to help with
      accommodation, or find out more about what's happening on the day.
    </p>
    <p>
      If you are unable to attend, fret not. We won't be offended, but you will be missed. We
      understand that August can get busy. Let's try and get together before or after the wedding.
      To get her money's worth, Helen might even be persuaded to put on her dress! Assuming it isn't
      covered in wine.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default RSVPconfirm;
