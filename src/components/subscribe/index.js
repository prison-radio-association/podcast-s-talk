import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import { toggleSubscribeModal } from '../../actions';
import rss from './rss.png';
import apple from './apple.png';
import gplay from './gplay.png';
import spotify from './spotify.png';
import spreaker from './spreaker.png';
import stitcher from './stitcher.png';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event) {
    const { isOpen, toggle } = this.props;

    if (event.keyCode === 27 && isOpen) {
      toggle();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  render() {
    const { isOpen, toggle } = this.props;

    return (
      <Modal
        visible={isOpen}
        onClickBackdrop={this.toggle}
        dialogClassName="modal-dialog-centered text-white"
      >
        <div className="modal-header">
          <h5 className="modal-title">Subscribe</h5>
          <button type="button" className="close text-white" onClick={toggle} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="subscribe-list text-center">
            <a className="mb-2 d-block" href="http://sextalk.libsyn.com/rss" target="_blank">
              <img src={rss} alt="Subscribe to the RSS feed" />
            </a>
            <a className="mb-2 d-block" href="https://itunes.apple.com/gb/podcast/sex-talk-podcast/id1364060785?mt=2" target="_blank">
              <img src={apple} alt="Listen on Apple Podcasts" />
            </a>
            <a className="mb-2 d-block" href="https://open.spotify.com/show/32gJtSOfAsA3M9Lto1KzTd?si=61FbdLnYTkCVdYkaK7I6KA" target="_blank">
              <img src={spotify} alt="Listen on Spotify" />
            </a>
            <a className="mb-2 d-block" href="https://www.stitcher.com/podcast/sex-talk?refid=stpr" target="_blank">
              <img src={stitcher} alt="Listen on Stitcher" />
            </a>
            <a className="mb-2 d-block" href="https://www.spreaker.com/show/2894418" target="_blank">
              <img src={spreaker} alt="Listen on Spreaker" />
            </a>
            <a className="mb-2 d-block" href="http://sextalk.libsyn.com/gpm" target="_blank">
              <img src={gplay} alt="Listen on Google Play" />
            </a>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    isOpen: state.navigation.subscribeModalOpen,
  }),
  { toggle: toggleSubscribeModal }
)(Subscribe);

