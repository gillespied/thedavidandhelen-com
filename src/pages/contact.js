import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us" />
    <form name="contact" method="POST" honeypot="bot-field" data-netlify="true" className="horizontal">
      <fieldset>
      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
        {/* <!-- Form Name --> */}
        <legend>contact-form</legend>

        {/* <!-- Text input--> */}
        <div className="field">
          <label className="label" for="name">Your Name:</label>
          <div className="control">
            <input id="name" name="name" type="text" className="input " required="">
          </div>
        </div>

        {/* <!-- Text input--> */}
        <div className="field">
          <label className="label" for="email">Your Email:</label>
            <div className="control">
              <input id="email" name="email" type="text" placeholder="Enter an email address" className="input " required="">
            </div>
        </div>

        {/* <!-- Text input--> */}
        <div className="field">
          <label className="label" for="phone-number">Your Phone Number</label>
          <div className="control">
            <input id="phone-number" name="phone-number" type="text" placeholder="Enter your number" className="input ">
          </div>
        </div>

        {/* <!-- Textarea --> */}
        <div className="field">
          <label className="label" for="dietary-requirements">Dietary requirements:</label>
          <div className="control">
            <textarea className="textarea" id="dietary-requirements" name="dietary-requirements">Enter your dietary preferences. We'll do our best to meet them. No promises you'll like everything though.</textarea>
          </div>
        </div>

        {/* <!-- Button --> */}
        <div className="field">
          <label className="label" for="submit">RSVP</label>
          <div className="control">
            <button id="submit" name="submit" className="button is-primary">Submit</button>
          </div>
        </div>

      </fieldset>
    </form>


  </Layout>
)
            
export default ContactPage
