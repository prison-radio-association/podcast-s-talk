/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import { Media } from 'react-media-player';
import { connect } from 'react-redux';
import cx from 'classnames';
import Nav from '../components/nav';
import MediaPlayer from '../components/media-player';

import '../../sass/style.scss';

const TemplateWrapper = ({ children, showMediaBar, data: { site: { siteMetadata } } }) => (
  <Media>
    <div>
      <Helmet title={siteMetadata.title} bodyAttributes={{ 
        class: cx({
          'has-media-bar': showMediaBar,
        }),
      }}>
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
      </Helmet>
      <Nav socialmedia={siteMetadata.socialmedia} />
      {children()}
      <MediaPlayer />
    </div>
  </Media>
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

export default connect(state => ({ showMediaBar: !!state.media.src }))(TemplateWrapper);
