import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// import login checker
import islogged from "../functions/islogged";

const Userprofile = () => {
  // importing state
  const state = useSelector((state) => {
    return state;
  });

  // no access unless logged in
  if (islogged(state)) {
    return (
      <div className="container-fluid bg-dark text-light p-5 border">
        <div className="lead">Username</div>
        <p>{state.userProfile.username}</p>

        {/* <div className="lead">Password</div>
        <p>{state.userProfile.password}</p>
        <div className="lead">Email</div>
        <p>{state.userProfile.email}</p> */}
      </div>
    );
  } else {
    return (
      <div className="alert text-center border rounded text-white bg-dark h1">
        Dont try to outsmart us you fool.
      </div>
    );
  }
};

export default Userprofile;
