import React from "react";

const addtask = (datas) => {
  return {
    type: "addtask",
    payload: datas,
  };
};

export default addtask;
