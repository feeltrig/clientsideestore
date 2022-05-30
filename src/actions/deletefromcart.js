import React from "react";

const deletefromcart = (data) => {
  return {
    type: "deletefromcart",
    payload: data.toString(),
  };
};

export default deletefromcart;
