import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import login checker
import islogged from "../functions/islogged";

const Navbar = () => {
  // importing state
  const state = useSelector((state) => {
    return state;
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className=" container-fluid ">
        <div className="navbar-nav ">
          <p className="navbar-brand ">Asshole's boutique</p>
          <p className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </p>
          <p className="nav-item ">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </p>
          {islogged(state) && (
            <p className="nav-item">
              <Link to="/yourcart" className="nav-link">
                Yourcart <sup>{state.yourcart.length + " items"}</sup>
              </Link>
            </p>
          )}
          <p className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </p>
          {islogged(state) && (
            <p className="nav-item">
              <Link to="/userprofile" className="nav-link">
                User Profile
              </Link>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
