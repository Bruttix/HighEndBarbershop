const SELECTED_NANO_NEEDLING_DURATION = "SELECTED_NANO_NEEDLING_DURATION";
const SELECTED_NANO_NEEDLING_DURATION_RESET = "SELECTED_NANO_NEEDLING_DURATION_RESET";

const selectednanoneedlingDurationReducer = (state = { duration: 30 }, action) => {
  switch (action.type) {
    case SELECTED_NANO_NEEDLING_DURATION:
      return { ...state, duration: action.duration };
    case SELECTED_NANO_NEEDLING_DURATION_RESET:
      return { ...state, duration: 30 };
    default:
      return { ...state };
  }
};

export default selectednanoneedlingDurationReducer;
