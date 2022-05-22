import { useState } from "react";

const Tests = () => {
  const [something, setsomething] = useState([20]);

  const setsomethingvar = () => {
    setsomething((prev) => {
      let newstate = [...prev];
      newstate.push(200);
      return newstate;
    });
  };

  const testfn = () => {
    const arrayvar = [1, 2, 3, 4, 5];
    const newarray = {};
    newarray.id = 1;
    newarray.id = 2;
    console.log(newarray);
  };
  return (
    <div className="testfile">
      <input type="text" />
      <button onClick={setsomethingvar}>click</button>
      <button onClick={testfn}>tester</button>
    </div>
  );
};

export default Tests;
