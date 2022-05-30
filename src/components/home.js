import React from "react";
import {
  FaHome,
  FaProductHunt,
  FaCartPlus,
  FaPowerOff,
  FaSortNumericUp,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <>
      <div className="bg-dark vh-100 text-light">home</div>
    </>
  );
};

export default Home;
