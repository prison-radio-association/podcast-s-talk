import { MENU_TOGGLED, SUBSCRIBE_MODAL_TOGGLED } from '../actions';

const defaultState = {
  menuOpen: false,
  subscribeModalOpen: false,
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

    default:
      return state;
  }
};