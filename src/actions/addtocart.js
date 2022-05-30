import React from "react";

const addtocart = (data, category) => {
  return {
    type: "addtocart",
    payload: {
      data: data.toString(),
      category: category.toString(),
    },
  };
};

export default addtocart;
