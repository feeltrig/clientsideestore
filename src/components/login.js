import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap";

import signinfn from "../actions/signin";

const Login = () => {
  const [modalopen, setModalopen] = useState(true);
  // importing dispatcher
  const dispatch = useDispatch();

  // INITIALIZATION
  // navigate
  const navigate = useNavigate();

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
    fetch("http://localhost:3001/api/submitform", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(finaldata),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 d-md-flex align-items-center ">
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
            ye, ye i know
          </Button>
        </Modal.Footer>
      </Modal>
      <form
        id="myForm"
        onSubmit={(e) => {
          submitfn(e);
        }}
        className="form container-sm w-auto border   bg-dark text-white p-4 px-5 "
      >
        <label htmlFor="username" name="username" className="form-label lead">
          Username
        </label>
        <input
          type="text "
          name="username"
          className="form-control mb-3"
          required
        />
        <label htmlFor="password" name="password" className="form-label lead">
          password
        </label>
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          required
        />
        <button
          type="submit"
          onClick={() => {
            setModalopen(true);
          }}
          className="btn btn-light my-2"
        >
          Log In
        </button>
        <div>
          <Link to="/" className="link text-light">
            forgot my password
          </Link>
        </div>
        <div
          className="btn btn-primary blur"
          onClick={() => {
            dispatch(signinfn("guest", "123", "123"));
          }}
        >
          Login as a guest
        </div>
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
