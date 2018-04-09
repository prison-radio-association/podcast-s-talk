import React, { Component } from 'react';
import { connect } from 'react-redux';
import RssIcon from 'open-iconic/svg/rss.svg';
import { toggleSubscribeModal } from '../../actions';

const SubscribeButton = ({ toggle }) => (
  <div className="subscribe ml-3" onClick={toggle}>
    <RssIcon className="d-block" />
    <span className="visually-hidden">Subscribe</span>
  </div>
);

export default connect(null, { toggle: toggleSubscribeModal })(SubscribeButton);