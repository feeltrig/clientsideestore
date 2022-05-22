import React from "react";

const Taskreducer = (state = [], action) => {
  switch (action.type) {
    case "addtask":
      // take new values and storing into array
      return state.concat([action.payload]);
    case "deletetask":
      // taking index ref and making new array and setting it as new state
      const newstate = [...state];
      newstate.splice(action.payload, 1);
      // const newstate = state.filter((ele) => {
      //   return ele != state[action.payload];
      // });
      return newstate;

    default:
      return state;
  }
};

export default Taskreducer;
