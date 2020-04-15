import React from 'react';
import PropTypes from 'prop-types';
const Navbar=({icon,title})=> {
    return(
      <nav className="navbar bg-primary">
        <h1><i className={icon}></i> {title}
        </h1>
      </nav>
    );
}
 Navbar.defaultProps = {//Navbar. instead of static for function using hooks approach
  title:'Github Finder',
  icon:'fab fa-github'
};
Navbar.propTypes = {//same as above
  title: PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired
};
export default Navbar;
