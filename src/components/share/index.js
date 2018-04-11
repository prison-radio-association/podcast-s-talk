import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import ShareList from './share-list';
import { toggleShareModal } from '../../actions';

class Share extends Component {
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
    const { url, isOpen, toggle, shareUrl } = this.props;

    return (
      <Modal
        visible={isOpen}
        onClickBackdrop={this.toggle}
        dialogClassName="modal-dialog-centered text-white"
      >
        <div className="modal-header">
          <h5 className="modal-title">Share</h5>
          <button type="button" className="close text-white" onClick={toggle} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <ShareList url={shareUrl} />
        </div>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    isOpen: state.navigation.shareModalOpen,
    shareUrl: state.navigation.shareUrl,
  }),
  { toggle: toggleShareModal }
)(Share);

