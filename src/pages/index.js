import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';

const IndexPage = () => (
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
If you&apos;ve
            already have, thanks!
          </h2>
        </div>
      </div>
    </section>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <p className="has-text-justified">
              David and Helen are getting married! If you are here you are probably invited. Here is
              the information we promised on the invite.
            </p>
            <br />
            <p>
              The ceremony is taking place at Chester Town Hall, it starts at 12.00pm, that’s noon.
              Please arrive promptly. Helen is paranoid about being late for anything, so I expect
              this day to be no different. If you driving the nearest parking for the town hall is
              probably NEAREST
            </p>
            <br />
            <p>
              After the ceremony we will be hanging around the town hall for a short time while we
              have some photographs taken. Hopefully this won’t take too long, but there will be
              some nibbles and drinks on offer to keep you all placated. Once the photographs are
              done, it’s on to the wedding breakfast at Eaton Golf Club. We have a bus to transport
              you there. Due to a pricing error at Morrisons we also have drinks. If you’d prefer to
              drive to the golf club there is plenty of parking at the golf club. You’d be helping
              us out s the bus isn't quite big enough for everyone.
              {' '}
            </p>
            <br />
            <p>
              At the club, it’s a few more photos, some more drinks, and eventually we sit down for
              some food. If you have any dietary requirements please let us know as soon as possible
              so that we can ensure you are catered for. We will do our best to ensure the wine is
              on tap for the meal but after that you are on your own. There is a bar at the golf
              club, it takes cash and card. A pint is
              {' '}
            </p>
            <br />
            <p>
              Then its speeches, cake cutting, dancing etc. Our mate Ralph is bringing his band to
              keep us entertained. Make sure you ask him to play Oasis. He really likes that. The
              golf club will kick us out at midnight, I don’t think Uber has made it to Chester yet.
              Taxi numbers can be found here.
            </p>
            <br />
            <p>We hope you can make it and help us celebrate. See you then.</p>
            <br />
            <p>David and Helen.</p>
          </div>
          <div className="column is-6">
            <p className="has-text-justified">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
