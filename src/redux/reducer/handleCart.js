//This is a reducer function
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDITEM':
      const exists = state.find((cartItem) => {
        return cartItem.id === product.id;
      });
      if (exists) {
        return state.map((cartItem) => {
          return cartItem.id === product.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem;
        });
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

    case 'DELITEM':
      const exist1 = state.find((cartItem) => {
        return cartItem.id === product.id;
      });
      if (exist1.qty === 1) {
        return state.filter((cartItem) => {
          return cartItem.id !== exist1.id;
        });
      } else {
        return state.map((cartItem) => {
          return cartItem.id === product.id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem;
        });
      }

    // case 'CHANGEQTY':
    //   break;
    default:
      return state;
  }
};

export default handleCart;
