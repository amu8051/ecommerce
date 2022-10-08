import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import allProducts from './../products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(allProducts[id]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 py-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark m-1"
            onClick={() => {
              addProduct(product);
            }}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark m-1">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
