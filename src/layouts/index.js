/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import Nav from '../components/nav';
import Footer from '../components/footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children, data: { site: { siteMetadata: { title } } } }) => (
  <div>
    <Helmet title={title}>
      <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
    </Helmet>
    <Nav />
    {children()}
    <Footer />
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
