import React from "react";

const deletetask = (datas) => {
  return {
    type: "deletetask",
    payload: datas,
  };
};

export default deletetask;
