import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// FUNCTIONS
// import login checker
import islogged from "../functions/islogged";

// ACTIONS
import logout from "../actions/logout";

const Userprofile = () => {
  // INITIALIZATIONS
  // main app state
  // dispatcher
  // navigate
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // no access unless logged in
  if (islogged(state)) {
    return (
      <>
        <div className="container-fluid bg-dark text-light p-5 border">
          <div className="h6">Username</div>
          <p className="h1">{state.userProfile.username}</p>

          <button
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
            className="btn btn-warning lead"
          >
            Log Out
          </button>
        </div>
      </>
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
