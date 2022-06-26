import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Card, Nav, Col, Row, Container } from "react-bootstrap";

// FUNCTIONS
// 7. product added to cart or not
import { isproductadded } from "../../functions/checkproduct";

// action imports
import addtocart from "../../actions/addtocart";

const Productcard = () => {
  // INTIALIZATIONS
  // 22. dispatcher
  // 23. product category
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = useOutletContext();

  return (
    <div>
      <Container>
        <Row
          md={3}
          xs="auto"
          className=" justify-content-sm-start justify-content-center "
        >
          {products[category].map((obj, index) => {
            return (
              <Col className="mb-5">
                <Card text="light" bg="dark" className="border-box  ">
                  <Card.Body>
                    <Card.Title>{obj.productName}</Card.Title>
                    <Card.Text className="h-100 ">{obj.description}</Card.Text>
                    <Card.Text>
                      <Nav.Link
                        className="px-0 text-warning"
                        as={NavLink}
                        to={`${obj.productName}`}
                      >
                        View item
                      </Nav.Link>
                    </Card.Text>
                    <button
                      type="button"
                      onClick={() => {
                        if (isproductadded(state.yourcart, obj.productName)) {
                          dispatch(addtocart(obj.productName, category));
                        }
                      }}
                      className="btn w-100 border btn-dark"
                    >
                      <FaCartPlus />
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Productcard;
