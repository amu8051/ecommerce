import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-sm">
        {/* Home  */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <h3
            style={{
              fontFamily: 'Courier New',
              fontWeight: '900',
              fontSize: '30px',
            }}
          >
            SHOPIFY
          </h3>
        </NavLink>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarItems"
          aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarItems">
          {/* Home About Contact  */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link pr-3"
                to="/"
                style={{ display: 'flex', flexDirection: 'row-reverse' }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink
                className="nav-link pr-3"
                to="/about"
                style={{ display: 'flex', flexDirection: 'row-reverse' }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link pr-3"
                to="/contact"
                style={{ display: 'flex', flexDirection: 'row-reverse' }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Cart Button */}
          <div
            className="buttons ml-2"
            style={{ display: 'flex', flexDirection: 'row-reverse' }}
          >
            {/*  */}
            <NavLink to="/cart" className="btn btn-outline-dark pr-3">
              <i className="fa fa-shopping-cart mr-2"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
