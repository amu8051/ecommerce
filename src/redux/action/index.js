export const addToCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

export const delFromCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
