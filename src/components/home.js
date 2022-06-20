import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import login checker
import islogged from "../functions/islogged";

const Home = () => {
  const [data, setData] = useState(undefined);
  const state = useSelector((state) => {
    return state;
  });
  const navigate = useNavigate();

  console.log("this is home");

  useEffect(() => {
    if (islog) {
      return;
    } else {
      navigate("/login");
    }
  }, []);

  const islog = islogged(state);

  // FETCHING API
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const response = await fetch("http://localhost:3001/api/stuff");
  //     const result = await response.json();
  //     return result;
  //   };

  //   fetcher().then((data) => {
  //     setData(data);
  //   });
  // }, []);

  return (
    <>
      <div>this is homw</div>
    </>
  );
};

export default Home;
