import React, { useState } from "react";

const Loginfn = (data) => {
  if (data.username == undefined && data.password == undefined) {
    return {
      type: "loginfn",
      payload: {
        profile: {
          username: null,
          password: null,
          email: null,
          id: null,
        },
      },
    };
  } else {
    return {
      type: "loginfn",
      payload: {
        profile: data,
      },
    };
  }
};

export default Loginfn;
