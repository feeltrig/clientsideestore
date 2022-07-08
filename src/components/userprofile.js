import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

// FUNCTIONS
// import login checker
import islogged from "../functions/islogged";

const Userprofile = () => {
  // INITIALIZATIONS
  // main app state
  // dispatcher
  // navigate
  const state = useSelector((state) => {
    return state;
  });

  // no access unless logged in
  if (islogged(state)) {
    return (
      <div className="bg-dark vh-100">
        <div className="container-fluid bg-dark text-light mx-5 p-5 ">
          {/* USERNAME */}
          <div className="h6">Username</div>
          <p className="h1">{state.userProfile.username}</p>

          <Container fluid></Container>
        </div>
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
