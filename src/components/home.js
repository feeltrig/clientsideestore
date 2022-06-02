import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState(undefined);
  const state = useSelector((state) => {
    return state;
  });

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
      <div className="bg-dark  text-light">home</div>
      {data !== undefined && <div className="text-dark">{data.person}</div>}
    </>
  );
};

export default Home;
