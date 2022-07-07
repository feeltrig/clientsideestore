import React, { useState, memo } from "react";
import {} from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import login checker
// import islogged from "../functions/islogged";

const Home = () => {
  // const [data, setData] = useState(undefined);
  // const state = useSelector((state) => {
  //   return state;
  // });
  // const navigate = useNavigate();

  // // FORCED LOGIN
  // useEffect(() => {
  //   if (islog) {
  //     return;
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  // const islog = islogged(state);

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
      <div className="bg-dark px-5 d-flex relative align-items-center  vh-100 text-light">
        <div className="ms-5 ">
          <div className="display-2">Welcome to our</div>
          <div className="display-2">mini estore</div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
