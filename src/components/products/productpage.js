import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// FUNCTIONS IMPORTS
// product intel
import { productintel } from "../../functions/productintel";

const Productpage = () => {
  // INITIALIZATIONS
  // main app state
  // location hook
  // category and id
  // product intel
  const state = useSelector((state) => {
    return state;
  });
  const location = useLocation();
  const { id, category } = useParams();
  const intel = productintel(state, category, id);

  // redirect to product page
  const redirect = useNavigate();

  if (intel) {
    return (
      <div>
        <div>
          <div className="display-5 fw-bolder m-5">{id}</div>
          <div className="display-5 mt-5 ms-5 ">Description</div>
          <div className="ms-5 mt-3 lead">{intel.description}</div>
          <div className="mt-5 ms-5 display-5">Product Details</div>
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
  } else {
    return (
      <>
        <div className="display-2">Stop hacking asshole</div>
        <button
          onClick={() => {
            redirect("/login");
          }}
          className="btn m-5 btn-dark"
        >
          Login Page
        </button>
      </>
    );
  }
};

export default Productpage;
