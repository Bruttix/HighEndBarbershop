const NANONEEDLING_IN_CART = "NANONEEDLING_IN_CART";

const ACTION_NANONEEDLING_IN_CART = (selectedDuration) => {
  return {
    type: NANONEEDLING_IN_CART,
    payload: {
      name: "NanoNeedling",
      price: selectedDuration,
      duration: selectedDuration
    }
  };
};

export default ACTION_NANONEEDLING_IN_CART;
