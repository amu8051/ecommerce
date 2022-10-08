import { AiFillDelete } from 'react-icons/ai';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delFromCart } from './../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  // const [total, setTotal] = useState(0);
  let total = 0;
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  console.log(state, 'state In cart!!!!');
  console.log(state.length, 'state In cart!!!!');

  const handleClose = (cartItem) => {
    dispatch(delFromCart(cartItem));
  };

  const EmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Empty Cart! Keep shopping.</h3>
          </div>
        </div>
      </div>
    );
  };

  const CartItems = ({ cartItems }) => {
    return cartItems.map((cartItem) => {
      total = total + cartItem.price;
      // setTotal(total + cartItem.price);
      console.log(cartItem, 'Item in cart');
      return (
        <div className="px-1 my-1 bg-light rounded-3">
          <div className="container py-4">
            <button
              onClick={() => {
                handleClose(cartItem);
              }}
              className="btn-close "
              aria-label="Close"
              style={{ float: 'right' }}
            >
              <AiFillDelete />
            </button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="100px"
                  width="100px"
                />
              </div>
              <div className="col-md-4">
                <h5>{cartItem.title}</h5>
                <p className="lead fw-bold" style={{ fontWeight: 500 }}>
                  ${cartItem.price}
                </p>
              </div>
              {/* Qty changer. Max 5 of any item */}
            </div>
          </div>
        </div>
      );
    });
  };

  const Checkout = () => {
    return (
      <div>
        <div class="container-list">
          <ul
            class="list-group mb-3 p-2"
            style={{ justifyContent: 'center', flexDirection: 'inherit' }}
          >
            <li
              class="list-group-item d-flex"
              style={{ width: 'fit-content', fontSize: 'large' }}
            >
              <span>Total (USD): </span>
              <strong> ${total}</strong>
            </li>
          </ul>
        </div>
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && <EmptyCart />}
      {state.length !== 0 && <CartItems cartItems={state} />}
      {state.length !== 0 && <Checkout />}
    </div>
  );
};

export default Cart;
