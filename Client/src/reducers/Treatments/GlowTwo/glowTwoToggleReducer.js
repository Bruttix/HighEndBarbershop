const GLOWTWO_TOGGLE = "GLOWTWO_TOGGLE";
const GLOWTWO_TOGGLE_RESET = "GLOWTWO_TOGGLE_RESET";

const glowTwoToggleReducer = (state = { toggle: false }, action) => {
  switch (action.type) {
    case GLOWTWO_TOGGLE:
      return { ...state, toggle: true };
    case GLOWTWO_TOGGLE_RESET:
      return { ...state, toggle: false };
    default:
      return { ...state };
  }
};

export default glowTwoToggleReducer;
