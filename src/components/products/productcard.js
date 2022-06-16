import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

// FUNCTIONS
// 7. product added to cart or not
import { isproductadded } from "../../functions/checkproduct";

// action imports
import addtocart from "../../actions/addtocart";

const Productcard = () => {
  // INTIALIZATIONS
  // 22. dispatcher
  // 23. product category
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = useOutletContext();

  console.log(products[category]);

  return (
    <div>
      hello
      {true && (
        <div className="row">
          {products[category].map((obj, index) => {
            return (
              <div key={index} className="col-md-3 g-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{obj.productName}</div>
                    <div className="card-text">{obj.description}</div>
                  </div>
                  <span className="card-footer">{obj.price}$</span>
                  {/* BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      if (isproductadded(state.yourcart, obj.productName)) {
                        dispatch(addtocart(obj.productName, category));
                      }
                    }}
                    className="btn btn-dark"
                  >
                    <FaCartPlus />
                  </button>
                  {/* link to product page */}
                  <NavLink
                    className="text-decoration-none p-2"
                    to={`${obj.productName}`}
                  >
                    View item
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Productcard;
