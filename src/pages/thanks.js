import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks</h1>
    <p>If you are seeing this page I configured the form correctly
      and we have received your response. If you are able to make it, great! 
      Find out more about the ceremony here, or maybe book some accommodation. 
    </p>
    <p>
      If you are unable to make it, we're sorry that you won't be there.
      We realise we left the invitations a bit later than most people.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Thanks
