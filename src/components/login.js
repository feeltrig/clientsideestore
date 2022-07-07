import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

// FUNCTIONS IMPORTS
import signinfn from "../actions/signin";
import Loginfn from "../actions/loginaction";

const Login = () => {
  // INITIALIZATION
  // 1. navigate
  // 2. dispatcher
  // 3. modal state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalopen, setModalopen] = useState(false);

  const submitfn = (data) => {
    data.preventDefault();
    let myForm = document.getElementById("myForm");
    let dt = new FormData(myForm);
    let username = dt.get("username");
    let password = dt.get("password");
    let finaldata = {
      username: username,
      password: password,
    };

    // SENDING JSON DATA
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(finaldata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(Loginfn(data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("this ran");

  return (
    <div className="container-fluid bg-dark min-vh-100 d-md-flex align-items-center ">
      {/* MODAL */}
      <Modal show={modalopen} backdrop="static">
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Succesfully logged in</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setModalopen(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* FORM */}
      <form
        id="myForm"
        onSubmit={(e) => {
          submitfn(e);
        }}
        className="form container-sm w-auto border   bg-dark text-white p-4 px-5 "
      >
        {/* USERNAME */}
        <label htmlFor="username" name="username" className="form-label lead">
          Username
        </label>
        <input
          type="text "
          name="username"
          className="form-control mb-3"
          required
        />

        {/* PASSWORD */}
        <label htmlFor="password" name="password" className="form-label lead">
          password
        </label>
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          required
        />

        {/* LOGIN */}
        <button
          type="submit"
          onClick={() => {
            setModalopen(true);
          }}
          className="btn btn-light my-2"
        >
          Log In
        </button>

        {/* FORGOT PASSWORD */}
        <div>
          <Link to="/" className="link text-light">
            forgot my password
          </Link>
        </div>

        {/* GUEST LOGIN */}
        <div
          className="btn btn-primary blur"
          onClick={() => {
            dispatch(signinfn("guest", "123", "123"));
            navigate("/");
          }}
        >
          Login as a guest
        </div>

        {/* SIGN IN */}
        <div
          onClick={() => {
            navigate("/signin");
          }}
          className="btn btn-primary blur m-2"
        >
          Sign in
        </div>
      </form>
    </div>
  );
};

export default Login;
