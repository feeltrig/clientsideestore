import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import deletetask from "../actions/deletetask";

const Displaytask = () => {
  // getting currentstate
  const currentstate = useSelector((state) => {
    console.log("sel ran");
    return state;
  });

  const [newstate, setNewstate] = useState();

  // defining dispatcher
  const dispatch = useDispatch();

  // function to delete task, returns new state
  const deletethis = (data) => {
    console.log("deletethisran");
    dispatch(deletetask(data));
  };

  return (
    <>
      <div className="taskscontainer">
        {currentstate.map((ele, index) => {
          return (
            <p key={index} className="tasksDispplay">
              {ele}
              <button
                className="deletebtn"
                onClick={() => {
                  deletethis(index);
                }}
              >
                delete
              </button>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Displaytask;
