import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addtask from "../actions/addtask";

// variable to store current state
let currentstatevar;

const Inputfield = () => {
  // storing input value from inputfield
  const [input, setInput] = useState(600);
  const inputcleaner = useRef();

  // dispatcher
  let dispatch = useDispatch();

  // getting current state value from store and setting it to global variable
  let stateval = useSelector((state) => {
    currentstatevar = state;
  });

  // send action to addtask reducer
  // change state function
  const submitfn = () => {
    if (input == null) {
      return;
    } else {
      dispatch(addtask(input));
      setInput(null);
      inputcleaner.current.value = "";
    }
  };

  return (
    <div className="maininputdiv">
      <input
        type="text"
        id="inputfield"
        ref={inputcleaner}
        onChange={(ev) => setInput(ev.target.value)}
      ></input>
      <button type="button" onClick={submitfn} id="addbtn">
        Add
      </button>
    </div>
  );
};

export default Inputfield;
