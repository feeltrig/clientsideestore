import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="display-5 mx-auto text-center">
        "Wrong url, Please check your url"
      </div>
      ;
      <div className="mx-auto text-center border ">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          Goto to mini estore
        </Button>
      </div>
    </>
  );
};

export default Error;
