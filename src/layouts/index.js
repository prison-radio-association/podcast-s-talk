/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import Nav from '../components/nav';
import MediaPlayer from '../components/media-player';
import Subscribe from '../components/subscribe';
import Share from '../components/share';

import '../../sass/style.scss';

const TemplateWrapper = ({ children, showMediaBar, data: { site: { siteMetadata } } }) => (
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

export default connect(state => ({ showMediaBar: !!state.jPlayers.AudioPlayer.src }))(TemplateWrapper);
