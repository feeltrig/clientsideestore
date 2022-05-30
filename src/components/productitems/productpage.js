import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// id finder fn
import { idfinder } from "../../functions/idfinder";

const Productpage = () => {
  // location hook
  const location = useLocation();

  const id = idfinder(location);

  // redirect to product page
  const redirect = useNavigate();

  console.log(id);

  return (
    <div>
      <div>
        <div className="display-5 m-5">{id}</div>
        <div className="container-fluid p-5 text-wrap ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          consequuntur aperiam iste ex. Vel sit nulla, itaque corporis
          doloremque facere. Officia consequuntur atque, fuga repellat quas,
          corrupti dolor rerum, maxime repellendus iure incidunt provident.
          Ipsum, fuga voluptatum consequatur, nulla veniam cumque perspiciatis
          vitae enim ratione placeat tempora sapiente velit assumenda?
        </div>
        <button
          onClick={() => {
            redirect("/products");
          }}
          className="btn m-5 btn-dark"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default Productpage;
