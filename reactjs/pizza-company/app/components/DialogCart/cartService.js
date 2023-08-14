const cart = [];

export const setProductToCart = product => {
  cart.push(product);
};

export const getCartProduct = () => {
  return cart;
};
