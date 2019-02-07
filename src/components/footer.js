import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="container">
    <footer className="footer">
      <div className="has-text-centered">
        <p>{siteTitle} © {new Date().getFullYear()}</p>
      </div>
    </footer>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
