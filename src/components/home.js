import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaProductHunt,
  FaCartPlus,
  FaPowerOff,
  FaSortNumericUp,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";

var temp = {};

const Home = () => {
  const [data, setData] = useState();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("api/stuff");
      console.log(response);
      const result = await response.json();
      return result;
    };

    fetcher().then((data) => {
      temp = data;
      setData(data);
    });
  }, []);

  return (
    <>
      <div className="bg-dark  text-light">home</div>
      {data !== undefined && <div className="text-dark">{data.person}</div>}
    </>
  );
};

export default Home;
