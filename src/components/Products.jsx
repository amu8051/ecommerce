import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import allProducts from '../products.json';

const Products = () => {
  const [products, setProducts] = useState(allProducts);

  const handleFilter = (category) => {
    const tempList = allProducts.filter((product) => {
      return product.category === category;
    });
    setProducts(tempList);
  };

  const ShowProducts = () => {
    return (
      <div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {products.map((product) => {
          return (
            <div
              clasName="card h-100 text-center p-4"
              style={{ width: '15rem', padding: '10px', margin: '10px' }}
              key={product.id}
            >
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
                height="250px"
                width="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p
                  className="card-text lead fw-bold"
                  style={{ fontWeight: 'bold' }}
                >
                  {product.price}$
                </p>
                <NavLink to={`/products/${product.id - 1}`}>
                  <button
                    style={{
                      backgroundColor: 'lightblue',
                      borderRadius: '8px',
                      padding: '8px',
                    }}
                  >
                    Buy Now
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container my-1 py-1">
        <div className="row">
          <div className="col-12 mb-2">
            <h5
              className="display-6 fw-bolder text-center"
              style={{ fontStyle: 'oblique' }}
            >
              Update Yourself. Update Your Fashion
            </h5>
          </div>
        </div>
        {
          <>
            {/* // Category buttons */}
            <div className="buttons d-flex justify-content-center pb-5">
              <buttons
                className="btn btn-outline-dark mr-2"
                onClick={() => {
                  setProducts(allProducts);
                }}
              >
                All
              </buttons>
              <buttons
                className="btn btn-outline-dark mr-2"
                onClick={() => {
                  handleFilter('electronics');
                }}
              >
                Electronics
              </buttons>
              <buttons
                className="btn btn-outline-dark mr-2"
                onClick={() => {
                  handleFilter("men's clothing");
                }}
              >
                Men
              </buttons>
              <buttons
                className="btn btn-outline-dark mr-2"
                onClick={() => {
                  handleFilter("women's clothing");
                }}
              >
                Women
              </buttons>
              <buttons
                className="btn btn-outline-dark mr-2"
                onClick={() => {
                  handleFilter('jewelery');
                }}
              >
                Jewellery
              </buttons>
            </div>
            {/* // Show all products */}
            <ShowProducts />
          </>
        }
      </div>
    </div>
  );
};

export default Products;
