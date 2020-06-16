import React from 'react';
import PropTypes from 'prop-types';
import {Link,HashRouter} from 'react-router-dom';
const Navbar=({icon,title})=> {
    return(
      <nav className="navbar fix bg-secondary">
        <h1><i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
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
