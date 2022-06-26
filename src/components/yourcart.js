import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCross, FaTrash } from "react-icons/fa";
import { Toast, ToastContainer, Button, CloseButton } from "react-bootstrap";

// ACTION IMPORTS
// importing delete from cart function
import deletefromcart from "../actions/deletefromcart";

// FUNCTION IMPORTS
// notify modal
import Notifymodal from "../functions/notifymodal";

const Yourcart = () => {
  // INITIALIZATIONS
  // 1.1 no items in cart state
  // 1.2 total amount state
  // 1.3 notification state
  // 1.4 purchased item list
  // 1.5 checkout notification state modal
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [totalamount, setTotalamount] = useState(0);
  const [alert, setalert] = useState(false);
  const [purchaseList, setpurchaseList] = useState([]);
  const [openmodal, setopenmodal] = useState(false);

  // IMPORTS
  // importing state
  // importing dispatcher
  const state = useSelector((state) => {
    return state;
  });
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

  // CHECKOUT AND SEND LIST TO DB
  const handleCheckout = () => {
    fetch(`http://localhost:3001/user/checkout/${state.userProfile.username}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/JSON" }),
      Credential: true,
      body: JSON.stringify({
        purchaseList: JSON.stringify(state.yourcart),
        totalcost: Number(totalamount),
      }),
    })
      .then((res) => {
        if (res.status > 300) {
          setalert(true);
        }

        return res.json();
      })
      .then((result) => {
        console.log(result);
        setopenmodal(true);
      });
  };

  useEffect(() => {
    setdisplayitems();
    counttotal();
  }, [state]);

  return (
    <>
      <Notifymodal
        body="Purchase succesfull"
        message="Message"
        openstate={openmodal}
        closefn={setopenmodal}
      />

      <div aria-live="polite" aria-atomic="true" className=" position-relative">
        {alert && (
          <ToastContainer className="p-3" position={"top-center"}>
            <Toast>
              <Toast.Header closeButton={false}>
                <strong className="me-auto">Alert</strong>
                <CloseButton onClick={() => setalert(false)} />
              </Toast.Header>
              <Toast.Body>Failed to connect please try again.</Toast.Body>
            </Toast>
          </ToastContainer>
        )}
      </div>
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

          {/* checkout button */}
          {!isCartEmpty && (
            <Button
              variant="primary"
              onClick={() => {
                setalert(true);
                handleCheckout();
              }}
            >
              Checkout
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Yourcart;
