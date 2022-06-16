import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCross, FaTrash } from "react-icons/fa";

// importing delete from cart function
import deletefromcart from "../actions/deletefromcart";

const Yourcart = () => {
  // INITIALIZATIONS
  // 1.1 no items in cart state
  // 1.2 total amount state
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [totalamount, setTotalamount] = useState(0);

  // importing state
  const state = useSelector((state) => {
    return state;
  });

  // importing dispatcher
  const dispatch = useDispatch();

  // CART UPDATER
  // show error function
  // count total amount function
  const setdisplayitems = () => {
    if (state.yourcart.length < 1) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  };

  // count total
  const counttotal = () => {
    let total = 0;
    state.yourcart.forEach((item) => {
      total = total + item.price;
    });
    setTotalamount(total);
  };

  useEffect(() => {
    setdisplayitems();
    counttotal();
  }, [state]);

  return (
    <div className="container-fluid my-5">
      <div className="checkoutcontainer container border border-dark rounded p-5">
        <div className="h2 mb-5">Your items</div>

        {/* error message/no items added */}
        <div
          style={isCartEmpty ? { display: "block" } : { display: "none" }}
          className="error text-bold lead bg-dark text-warning p-2 text-center"
        >
          No items added. Add some you cheapskate.
        </div>

        {/* items added */}
        <div style={isCartEmpty ? { display: "none" } : { display: "block" }}>
          {state.yourcart.map((items, index) => {
            return (
              <div key={index} className="row my-1">
                <p className="col-sm-10 col-8">{items.productName}</p>
                <p className="col-sm-1 col-2">{items.price + "$"}</p>

                {/* delete btn */}
                <div
                  onClick={() => {
                    dispatch(deletefromcart(items.productName));
                  }}
                  className="col-sm-1 col-2 borderless "
                >
                  <FaTrash
                    className="w-100"
                    style={{
                      fontSize: "1.5rem",
                      width: "10rem",
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>

        {/* checkout price */}
        <div className="col-9"></div>
        <div
          style={isCartEmpty ? { display: "none" } : { display: "block" }}
          className="col-3  ms-auto g-0 my-5"
        >
          <p className="h2">Total Amount</p>
          <p className="h2">{totalamount + "$"}</p>
        </div>
      </div>
    </div>
  );
};

export default Yourcart;
