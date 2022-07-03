const GLOWTWO_IN_CART = "GLOWTWO_IN_CART";

const ACTION_GLOWTWO_IN_CART = () => {
  return {
    type: GLOWTWO_IN_CART,
    payload: {
      name: "Children's Haircut",
      price: 40,
      duration: 30,
    },
  };
};

export default ACTION_GLOWTWO_IN_CART;
