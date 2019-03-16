import React from 'react';
import { Link } from 'gatsby';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <section className="hero is-medium has-text-centered is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">David and Helen are Getting Married!</h1>
          <h2 className="subtitle">
            If you&apos;ve been invited make sure you
            {' '}
            <Link to="/rsvp">RSVP.</Link>
            {' '}
If you already
            have, thanks!
          </h2>
        </div>
      </div>
    </section>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <p className="has-text-justified">
              David and Helen are getting married! If you are reading this you are probably invited.
              Here is the information we promised on the invite.
            </p>
            <br />
            <p className="has-text-justified">
              It is all taking place on Saturday 3rd August 2019. The ceremony will be in Chester
              Town Hall, it starts at 12.00pm, that&apos;s noon. Please arrive promptly. Helen is
              paranoid about being late for anything, so I expect this day to be no different. If
              you are driving click for
              {' '}
              <Link to="venues">help with parking.</Link>
            </p>
            <br />
            <p className="has-text-justified">
              After the ceremony we will be hanging around the town hall for a short time while we
              have some photographs taken. Hopefully this won&apos;t take too long, but there will
              be some drinks on offer to keep you all placated. Once the photographs are done, it’s
              on to the wedding breakfast at Eaton Golf Club. We have a bus to transport you there.
              Due to a pricing error at Morrisons we also have drinks. If you’d prefer to drive to
              the golf club there is plenty of parking at the golf club. You’d be helping us out as
              the bus isn't quite big enough for everyone.
              {' '}
            </p>
            <br />
            <p className="has-text-justified">
              At the club, it’s a few more photos, some more drinks, and eventually we sit down for
              some food. If you have any dietary requirements please let us know as soon as possible
              so that we can ensure you are catered for. We will do our best to ensure the wine is
              on tap for the meal but after that you are on your own. There is a bar at the golf
              club, it takes cash and card. A pint is about 4 quid, which is reasonable depending on
              which direction you are travelling.
              {' '}
            </p>
            <br />
            <p className="has-text-justified">
              Then its speeches, cake cutting, dancing etc. Our mate Ralph is bringing his band to
              keep us entertained. Make sure you ask him to play Oasis. He really likes that. The
              golf club will kick us out at midnight. A list of local taxi firms and their phone
              numbers can be found
              {' '}
              <Link to="taxi">here.</Link>
            </p>
            <br />
            <p className="has-text-justified">
              We hope you can make it and help us celebrate. See you then.
            </p>
            <br />
            <p>David and Helen.</p>
          </div>
          <div className="column is-6">
            <div className="box">
              <Img fluid={props.data.engage.childImageSharp.fluid} />
              <p className="has-text-justified">
                This is us, by the way, in case you know more than one couple called David and
                Helen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    engage: file(relativePath: { eq: "engagement.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
