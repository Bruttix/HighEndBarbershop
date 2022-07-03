const HYDROJELLY_IN_CART = "HYDROJELLY_IN_CART";

const ACTION_HYDROJELLY_IN_CART = () => {
  return {
    type: HYDROJELLY_IN_CART,
    payload: {
      name: "Steam Facial",
      price: 60,
      duration: 45
    }
  };
};

export default ACTION_HYDROJELLY_IN_CART;
