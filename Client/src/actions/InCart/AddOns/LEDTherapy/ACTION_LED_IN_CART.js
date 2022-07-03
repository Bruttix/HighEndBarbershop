const LED_IN_CART = "LED_IN_CART";

const ACTION_LED_IN_CART = () => {
  return {
    type: LED_IN_CART,
    payload: {
      name: "Hair Highlights",
      price: 80,
      duration: 45
    }
  };
};

export default ACTION_LED_IN_CART;
