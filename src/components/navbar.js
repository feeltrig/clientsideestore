import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarBrand,
  Form,
  Button,
  NavDropdown,
  Navbar as Navs,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// import login checker
import islogged from "../functions/islogged";

const Navbar = () => {
  // importing state
  const state = useSelector((state) => {
    return state;
  });

  const islog = islogged(state);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark px-5 bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              PageTitle
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="login">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="signin">
                    signin
                  </Link>
                </li>
                {islog && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="yourcart">
                        cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="userprofile">
                        user
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="products">
                        products
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
