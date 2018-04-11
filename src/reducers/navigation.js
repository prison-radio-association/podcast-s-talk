import { MENU_TOGGLED, SUBSCRIBE_MODAL_TOGGLED, SHARE_MODAL_TOGGLED } from '../actions';

const defaultState = {
  menuOpen: false,
  subscribeModalOpen: false,
  shareModalOpen: false,
  shareUrl: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case MENU_TOGGLED:
      return { 
        ...state,
        menuOpen: !state.menuOpen,
      };

    case SUBSCRIBE_MODAL_TOGGLED:
      return {
        ...state,
        subscribeModalOpen: !state.subscribeModalOpen,
      };

    case SHARE_MODAL_TOGGLED:
      return {
        ...state,
        shareModalOpen: !state.shareModalOpen,
        shareUrl: action.payload,
      };

    default:
      return state;
  }
};