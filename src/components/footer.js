import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="has-text-centered">
      <p>
        {siteTitle}
        {' '}
©
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
