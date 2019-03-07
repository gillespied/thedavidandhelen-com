import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Venues = () => (
  <Layout>
    <SEO title="Venues" />
    <div className="section">
      <div className="container">
        <div className="box">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title">The Ceremony</h1>
              <h1 className="subtitle">Chester Town Hall.</h1>
              <p>33 Northgate Street</p>
              <p>Chester</p>
              <p>CH1 2HQ</p>
              <p>01244 304660</p>
              <br />
              <p>If you are driving to the ceremony, CARPARK, is best.</p>
            </div>
            <div className="column is-6">
              <iframe
                title="Chester Town Hall"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.4812247862187!2d-2.8944988648161023!3d53.19128531495625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487add485123be45%3A0xd7cb6bd056230ad9!2sChester+Town+Hall!5e0!3m2!1sen!2suk!4v1551968068766"
                width="100%"
                height="300"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="box">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title">Wedding Breakfast</h1>
              <h1 className="subtitle">Eaton Golf Club</h1>
              <p>Guy Lane</p>
              <p>Waverton</p>
              <p>Chester</p>
              <p>CH3 7PH</p>
              <p>01244 335885</p>
              <br />
              <p>
                Parking is available at the Golf Club. You may need to ring in the morning to be let
                in the gate.
              </p>
            </div>
            <div className="column is-6">
              <iframe
                title="Eaton Golf Club"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.565556456838!2d-2.804333683865784!3d53.17183397994284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae8917f15627b%3A0x488875089d537d7b!2sEaton+Golf+Club!5e0!3m2!1sen!2suk!4v1551969115375"
                width="100%"
                height="300"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Venues;
