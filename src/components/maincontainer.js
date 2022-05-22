import Displaytask from "./displaytask";
import Inputfield from "./inputfield";
// import Test from "./tests";

export const Maincontainer = () => {
  return (
    <div className="maincontainer">
      <Inputfield className="inputfield" />
      <br />
      <Displaytask className="tasks" />
    </div>
  );
};

export default Maincontainer;
