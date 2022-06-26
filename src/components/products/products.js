import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { Button, Nav, Row, Col, Container } from "react-bootstrap";

// FUNCTIONS
// 12. isproduct added or not
// 13. import login checker
import { isproductadded } from "../../functions/checkproduct";
import islogged from "../../functions/islogged";

// MAIN COMPONENT
const Products = () => {
  // MAIN APP STATE
  // 15. importing state
  const state = useSelector((state) => {
    return state;
  });

  let categories = Object.keys(state.productsavailable);

  // no access unless logged in
  if (islogged(state)) {
    return (
      <div>
        <div className="container-fluid px-5">
          <div>
            {/* title */}
            <div className="h1  my-5">Our Products</div>
            <div className="h2 my-4">Categoies</div>

            {/* categories */}
            <Container fluid>
              <Row className="">
                {categories.map((categories, index) => {
                  return (
                    <Col xs="auto mb-5 ps-0">
                      <Button variant="dark" text="light">
                        <Nav.Link
                          as={Link}
                          className="text-light"
                          to={categories}
                        >
                          {categories}
                        </Nav.Link>
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Container>

            {/* list of products */}
            <Outlet context={state.productsavailable} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="alert text-center">Please log in</div>;
  }
};

export default Products;
