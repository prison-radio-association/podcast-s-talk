/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Link from 'gatsby-link';
import cx from 'classnames';
import Nav from '../components/nav';
import MediaPlayer from '../components/media-player';
import Subscribe from '../components/subscribe';
import Share from '../components/share';
import { withCookies } from 'react-cookie';

import '../../sass/style.scss';

const TemplateWrapper = ({ cookies, children, showMediaBar, data: { site: { siteMetadata } } }) => (
  <div>
    <Helmet title={siteMetadata.title} bodyAttributes={{
      class: cx({
        'has-media-bar': showMediaBar,
      }),
    }} />
    <Nav socialmedia={siteMetadata.socialmedia} />
    {children()}
    <MediaPlayer />
    <Subscribe />
    <Share />
    { !cookies.get('has-accepted') ? (
      <div className="fixed-bottom bg-secondary py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <span>We use cookies to improve the experience on this website. <Link to="/cookies">Learn more</Link></span>
          <button className="btn btn-primary" onClick={() => cookies.set('has-accepted', 1)}>Dismiss</button>
        </div>
      </div>
    ) : null }
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        socialmedia
      }
    }
  }
`;

export default connect(state => ({ showMediaBar: !!state.jPlayers.AudioPlayer.src }))(withCookies(TemplateWrapper));
