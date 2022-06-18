import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// import login checker
import islogged from "../functions/islogged";

const Navbar = () => {
  // importing state
  const state = useSelector((state) => {
    return state;
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark px-sm-0 px-5 bg-dark">
      <div className=" container-fluid ">
        <div className="navbar-nav mx-5 ">
          <p className="navbar-brand ">Asshole's boutique</p>
          <p className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </p>
          {islogged(state) && (
            <>
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

              <p className="nav-item">
                <Link to="/yourcart" className="nav-link">
                  Cart <sup>{state.yourcart.length}</sup>
                </Link>
              </p>

              <p className="nav-item">
                <Link to="/userprofile" className="nav-link">
                  User Profile
                </Link>
              </p>
              <NavDropdown title="Contact us" menuVariant="dark">
                <NavDropdown.Item>Instagram</NavDropdown.Item>
                <NavDropdown.Item>Facebook </NavDropdown.Item>
                <NavDropdown.Item>Whatsapp</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Github</NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
