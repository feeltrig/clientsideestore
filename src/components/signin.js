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

  // FORM CLEANER
  const clearForm = () => {
    setusername("");
    setpassword("");
    setgender("");
    rich([]);
    setcity("");
  };

  // FORM SUBMIT FUNCTION
  const handlesubmit = (event) => {
    event.preventDefault();

    // COLLECTING DATA TO SEND
    let profile = {
      username: username,
      password: password,
      gender: gender,
      rich: rich,
      city: city,
    };
    console.log(profile);

    // MAKING POST REQUEST TO SERVER
    fetch("http://localhost:3001/api/submitform", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/JSON" }),
      body: JSON.stringify(profile),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        clearForm();
      });

    // FETCHING ALL USERS DATA
    fetch("http://localhost:3001/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Container fluid className=" text-light vh-100 bg-dark p-5 ">
      <Row className="w-50 mx-auto">
        <Col>
          <Form
            variant="sm"
            className="mb-0"
            onSubmit={(event) => {
              handlesubmit(event);
            }}
          >
            {/* PERSONAL INFO */}

            {/* USERNAME */}
            <Form.Group>
              <Form.Label>User name</Form.Label>
              <Form.Control
                required
                type="text"
                id="username"
                placeholder="Your name"
                className="mb-3"
                name="username"
                value={username}
                onChange={(event) => {
                  setusername(event.target.value);
                }}
              />
            </Form.Group>

            {/* PASSWORD */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoComplete="yes"
                required
                type="password"
                id="password"
                name="password"
                value={password}
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
                  setgender(event.target.id);
                }}
              />
              <Form.Check
                label="female"
                name="gender"
                type="radio"
                id="female"
                onChange={(event) => {
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
              <option>India</option>
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
