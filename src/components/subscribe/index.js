import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import { toggleSubscribeModal } from '../../actions';

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
      <Modal visible={isOpen} onClickBackdrop={this.toggle} dialogClassName="modal-dialog-centered">
        <div className="modal-header">
          <h5 className="modal-title">Subscribe</h5>
          <button type="button" className="close" onClick={toggle} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>links to follow...</p>
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

