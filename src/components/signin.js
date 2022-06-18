import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  CloseButton,
} from "react-bootstrap";

const Signin = () => {
  // INTITIALIZATIONS
  // username
  // password
  // gender
  // rich
  // country
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [rich, setrich] = useState([]);
  const [country, setcountry] = useState("");

  // FORM SUBMIT FUNCTION
  const handlesubmit = (event) => {
    event.preventDefault();
    let profile = {
      username: username,
      password: password,
      gender: gender,
      rich: rich,
      country: country,
    };
    console.log(profile);
  };

  return (
    <Container fluid className="ms-0 p-5 w-50 ">
      <Row>
        <Col>
          <Form
            variant="sm"
            className="mb-0"
            onSubmit={(event) => {
              handlesubmit(event);
            }}
          >
            {/* PERSONAL INFO */}
            <Form.Group>
              <Form.Label>User name</Form.Label>
              <Form.Control
                required
                type="text"
                id="username"
                placeholder="Your name"
                className="mb-3"
                name="username"
                onChange={(event) => {
                  setusername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoComplete="yes"
                required
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="mb-3"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </Form.Group>

            {/* GENDER */}
            <Form.Group>
              <Form.Label>Your gender</Form.Label>

              <Form.Check
                label="male"
                name="gender"
                type="radio"
                id="male"
                onChange={(event) => {
                  console.log(event.target.id);
                  setgender(event.target.id);
                }}
              />
              <Form.Check
                label="female"
                name="gender"
                type="radio"
                id="female"
                onChange={(event) => {
                  console.log(event.target.id);
                  setgender(event.target.id);
                }}
              />
              <Form.Check
                label="other"
                name="gender"
                type="radio"
                id="other"
                className="mb-3"
                onChange={(event) => {
                  console.log(event.target.id);
                  setgender(event.target.id);
                }}
              />

              {/* RICH */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Are you rich</Form.Label>

              <Form.Check
                label="yes"
                id="richyes"
                value="yes"
                onChange={(event) => {
                  setrich((state) => {
                    console.log(state);
                    if (event.target.checked) {
                      return [...state, event.target.value];
                    } else {
                      return [...state].filter((item) => {
                        return item !== event.target.value;
                      });
                    }
                  });
                }}
              />
              <Form.Check
                label="my family"
                id="richno"
                value="my family"
                onChange={(event) => {
                  setrich((state) => {
                    console.log(state);
                    if (event.target.checked) {
                      return [...state, event.target.value];
                    } else {
                      return [...state].filter((item) => {
                        return item !== event.target.value;
                      });
                    }
                  });
                }}
              />
            </Form.Group>

            <Form.Label className="mt-3">Your country</Form.Label>
            <Form.Select
              defaultValue={"india"}
              onChange={(event) => {
                setcountry(event.target.value);
              }}
            >
              <option>India the shithole</option>
              <option>USA </option>
            </Form.Select>

            <ButtonGroup
              className="me-2"
              aria-label="First group"
              onClick={(event) => {
                console.log(event.target.value);
              }}
            >
              <Button variant="secondary" value={1}>
                1
              </Button>{" "}
              <Button variant="secondary" value={2}>
                2
              </Button>{" "}
              <Button variant="secondary" value={3}>
                3
              </Button>{" "}
              <Button variant="secondary" value={4}>
                4
              </Button>
            </ButtonGroup>

            {/* SUBMIT */}
            <Button type="submit" className="my-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
