import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";

const Signin = () => {
  // INTITIALIZATIONS
  // username
  // password
  // gender
  // rich
  // country
  // navigate hook
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("male");
  const [rich, setrich] = useState(["yes"]);
  const [city, setcity] = useState("");
  const navigate = useNavigate();

  // SETTING FORMIK VALIDATION
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      gender: "male",
      rich: ["yes"],
      city: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
        if (res.status < 300) {
          navigate("/");
        }
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
    <Container fluid className=" text-light vh-100  bg-dark p-5 ">
      <Row className="w-50 mx-auto">
        <Col>
          {/* FORM */}
          <Form
            variant="sm"
            className="mb-0 shadow p-5"
            onSubmit={formik.handleSubmit}
          >
            {/* PERSONAL INFO */}

            {/* USERNAME */}
            <Form.Group>
              <Form.Label className="lead">User name</Form.Label>
              <Form.Control
                required
                type="text"
                id="username"
                placeholder="Your name"
                className="mb-3"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </Form.Group>

            {/* PASSWORD */}
            <Form.Group>
              <Form.Label className="lead">Password</Form.Label>
              <Form.Control
                autoComplete="yes"
                required
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                placeholder="Your password"
                className="mb-3"
                onChange={formik.handleChange}
              />
            </Form.Group>

            {/* GENDER */}
            <Form.Group>
              <Form.Label className="lead">Your gender</Form.Label>

              <Form.Check
                label="male"
                name="gender"
                type="radio"
                id="male"
                value="male"
                onChange={formik.handleChange}
                checked={formik.values.gender === "male"}
              />
              <Form.Check
                label="female"
                name="gender"
                type="radio"
                id="female"
                value="female"
                onChange={formik.handleChange}
                checked={formik.values.gender === "female"}
              />
              <Form.Check
                label="other"
                name="gender"
                type="radio"
                id="other"
                className="mb-3 "
                value="other"
                onChange={formik.handleChange}
                checked={formik.values.gender === "other"}
              />

              {/* RICH */}
            </Form.Group>
            <Form.Group>
              <Form.Label className="lead">Are you rich</Form.Label>

              <Form.Check
                label="yes"
                id="yes"
                onChange={formik.handleChange}
                checked={formik.values.rich.includes("yes")}
              />
              <Form.Check
                label="my family"
                id="my family"
                value={formik.values.rich}
                onChange={formik.handleChange}
                checked={formik.values.rich.includes("my family")}
              />
            </Form.Group>

            <Form.Label className="mt-3 lead">Your city</Form.Label>

            {/* CITY */}
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
