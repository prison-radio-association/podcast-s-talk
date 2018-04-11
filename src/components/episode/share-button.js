import React, { Component } from 'react';
import ShareIcon from 'open-iconic/svg/share.svg';
import { connect } from 'react-redux';
import { toggleShareModal } from '../../actions';

const ShareButton = ({ toggle, shareUrl = '' }) => (
  <div className="share ml-3" onClick={() => toggle(shareUrl)}>
    <ShareIcon className="d-block" />
    <span className="visually-hidden">Share</span>
  </div>
);

export default connect(null, { toggle: toggleShareModal })(ShareButton);