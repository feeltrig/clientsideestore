import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import signinfn from "../actions/signin";

const Login = () => {
  // importing dispatcher
  const dispatch = useDispatch();

  return (
    <div className="container-fluid bg-dark min-vh-100 d-md-flex align-items-center ">
      <form className="form container-sm w-auto border   bg-dark text-white p-4 px-5 ">
        <label htmlFor="username" className="form-label lead">
          Username
        </label>
        <input type="text " className="form-control mb-3" required />
        <label htmlFor="password" className="form-label lead">
          password
        </label>
        <input type="password" className="form-control mb-3" required />
        <button type="submit" className="btn btn-light my-2">
          Log In
        </button>
        <div>
          <Link to="/" className="link text-light">
            forgot my password
          </Link>
        </div>
        <div
          className="btn btn-primary"
          onClick={() => {
            dispatch(signinfn("guest", "123", "123"));
          }}
        >
          Login as a guest
        </div>
        <div className="btn btn-primary m-2">Sign in</div>
      </form>
    </div>
  );
};

export default Login;
