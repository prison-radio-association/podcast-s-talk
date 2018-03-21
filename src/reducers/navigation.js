import { MENU_TOGGLED } from '../actions';

const defaultState = {
  menuOpen: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case MENU_TOGGLED:
      return { 
        ...state,
        menuOpen: !state.menuOpen,
      };

    default:
      return state;
  }
};