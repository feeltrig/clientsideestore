import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarBrand,
  Form,
  Button,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// ACTION IMPORTS
// logout action
import logout from "../actions/logout";

// FUNCTION IMPORTS
// import login checker
import islogged from "../functions/islogged";

const Navigation = () => {
  // INITIALIZATIONS
  // 1. main app state
  // 2. dispatcher
  // 3. login checker
  // 4. navigate
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const islog = islogged(state);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Mini estore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>

                {/* access after login */}
                {islog && (
                  <>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/userprofile">
                        My Account
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(logout());
                          navigate("/login", { replace: true });
                        }}
                      >
                        Log Out
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/preferences">
                        Preferences
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="userprofile/purchasehistory"
                      >
                        Purchase History
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/products">
                      Products
                    </Nav.Link>

                    <Nav.Link as={Link} to="/yourcart">
                      Cart
                    </Nav.Link>

                    {/* dropdown menu */}
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
