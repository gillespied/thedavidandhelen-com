import React from "react";
import { Link } from "gatsby";
//import PropTypes from "prop-types";
//import { StaticQuery, graphql } from "gatsby";

//TODO parametrise the left hand and right hand items.
// left handside should unpack a list of links form gatsby, 
class Navbar extends React.Component {
  
  // initialise a state variable
  state = { showMenu: false };

  // this is quite simple really, when called it inverts
  // the state.
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }; 

  // render stuff
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item"> 
          <Link to="/">thedavidandhelen</Link>
          </a>
          <a
            role="button"
            //className="navbar-burger burger"
            className = {`navbar-burger burger  ${this.state.showMenu ? " is-active": ""}`}  
            onClick={this.toggleMenu}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" 
             className={`navbar-menu  ${this.state.showMenu ? " is-active": ""}`}  >
          <div className="navbar-start">
            <a className="navbar-item">
            <Link to='rsvp'>RSVP</Link>
            </a>

            <a class="navbar-item">
            <Link to='/venues'>
              Venues 
            </Link> 
            </a>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </nav>

    );
  };
}

export default Navbar;