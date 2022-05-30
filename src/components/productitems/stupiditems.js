import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

// FUNCTIONS
// 7. product added to cart or not
import { isproductadded } from "../../functions/checkproduct";

// action imports
import addtocart from "../../actions/addtocart";

const Stupiditems = ({ catg }) => {
  // INTIALIZATIONS
  // 19. main app state
  // 22. dispatcher
  // 23. product category
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const productcategory = catg;

  return (
    <div>
      <div className="row">
        {state.productsavailable[productcategory].map((obj, index) => {
          return (
            <div key={index} className="col-3 g-4">
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
                      dispatch(addtocart(obj.productName, productcategory));
                    }
                  }}
                  className="btn btn-dark"
                >
                  <FaCartPlus />
                </button>
                <Link to={`${obj.productName}`}>View item</Link>
              </div>
            </div>
          );
        })}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Stupiditems;
