import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer>
      {siteTitle} © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
