import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="hero is-medium has-text-centered is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            David and Helen are Getting Married!
          </h1>
          <h2 className="subtitle">
            If you've been invited make sure you <Link to='/rsvp'>RSVP.</Link> If you've already have, thanks!
          </h2>
        </div>
      </div>
    </section>
    <section className ="container" style={{paddingTop: "3rem", paddingBottom: "3rem",}}>
      <div className="columns">
        <div className="column is-5 is-offset-1">
        <p className="has-text-justified" style={{paddingLeft: "1rem", paddingRight: "1rem",}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
         </div>
        <div className="column is-5">
          <p className="has-text-justified" style={{paddingLeft: "1rem", paddingRight: "1rem",}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      </section>
  </Layout>
    )
    
    export default IndexPage
