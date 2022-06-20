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
  const [city, setcity] = useState("");

  // FORM SUBMIT FUNCTION
  const handlesubmit = (event) => {
    event.preventDefault();
    let profile = {
      username: username,
      password: password,
      gender: gender,
      rich: rich,
      city: city,
    };
    console.log(profile);

    fetch("http://localhost:3001/api/submitform", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/JSON" }),
      body: JSON.stringify(profile),
    })
      .then((res) => {
        console.log(res.text());
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });

    fetch("http://localhost:3001/users")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Container fluid className=" p-5 w-50 ">
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

            <Form.Label className="mt-3">Your city</Form.Label>
            <Form.Select
              defaultValue={"india"}
              onChange={(event) => {
                setcity(event.target.value);
              }}
            >
              <option>India the shithole</option>
              <option>USA </option>
            </Form.Select>

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
