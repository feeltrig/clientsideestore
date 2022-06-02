import React from "react";
import { useDispatch, useSelector } from "react-redux";

// FUNCTIONS
// import login checker
// import logout function
import islogged from "../functions/islogged";

// ACTIONS
import logout from "../actions/logout";

const Userprofile = () => {
  // importing state
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  // no access unless logged in
  if (islogged(state)) {
    return (
      <div className="container-fluid bg-dark text-light p-5 border">
        <div className="lead">Username</div>
        <p>{state.userProfile.username}</p>

        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="btn btn-warning lead"
        >
          Log Out
        </button>
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
