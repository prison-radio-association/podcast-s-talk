import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import Link from 'gatsby-link';
import { toggleMenu } from '../../actions';
import banana from './banana.jpg';

const links = [
  ['/#episodes', 'Episodes'],
  ['/#about', 'About'],
  ['/#contact', 'Contact'],
];

class NavMenu extends Component {
  handleClickOutside(e) {
    const { menuOpen, toggleMenu } = this.props;
    if (menuOpen && e.target.className !== 'navbar-toggler-icon') {
      toggleMenu();
    }
  }

  render() {
    const { toggleMenu } = this.props;

    return (
      <ul className="navbar-nav ml-auto">
        {links.map(link => (
          <li key={link[0]} className="nav-item">
            <a className="nav-link " href={link[0]} onClick={toggleMenu}>{link[1]}</a>
          </li> 
        ))}
      </ul>
    );
  }
}

const EnhancedNavMenu = enhanceWithClickOutside(NavMenu);

const Nav = ({ menuOpen, toggleMenu }) => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <div className="container-fluid p-0">
      <Link className="navbar-brand" to="/">
        <img className="navbar-brand__logo" src={banana} alt="Sex Talk" />
        <span className="visually-hidden">Sex Talk</span>
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right text-white"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={cx('navbar-collapse', { collapse: !menuOpen })} id="navbarResponsive">
        <EnhancedNavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  </nav>
);

export default connect(state => ({ menuOpen: state.navigation.menuOpen }), { toggleMenu })(Nav);
 