import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

const PurchaseHistory = () => {
  // INITIALIZATIONS
  // 1. list of purchases
  // 2. main app state
  // 3. show loader
  const [purchaseList, setpurchaseList] = useState([]);
  const state = useSelector((state) => {
    return state;
  });
  const [showLoader, setShowLoader] = useState(true);

  // FETCH USER PURCHASELIST FROM DB
  useEffect(() => {
    handlePurchaseHistory();
    console.log("state changed");
  }, [state]);

  useEffect(() => {
    console.log(purchaseList);
    if (purchaseList.length > 0) {
      setShowLoader(false);
    }
  }, [purchaseList]);

  //   FUNCTION TO FETCH PURCHASE HISTORY
  const handlePurchaseHistory = () => {
    // function to fetch(async)
    const fetchPruchaseList = async () => {
      const data = await fetch(
        `http://localhost:3001/purchaseList/${state.userProfile.id}`
      );

      const res = await data.json();
      return res;
    };

    // formatting incoming data correctly
    const result = fetchPruchaseList().then((res) => {
      const formatter = res.map((obj) => {
        const productList = JSON.parse(obj.purchaseList);
        const totalPrice = Number(obj.totalPrice);
        const time = obj.time;

        const final = {
          productList,
          totalPrice,
          time,
        };

        return final;

        console.log(final);
      });

      // setting state to final object
      setpurchaseList(formatter);

      // setpurchaseList(result);
    });
  };

  console.log();

  return (
    <div>
      <Container>
        {purchaseList.map((objs) => {
          return (
            <Container>
              {objs.productList.map((list) => {
                return (
                  <>
                    <Row>
                      <Col>Product Name</Col>
                      <Col>{list.productName}</Col>
                    </Row>
                    <Row>
                      <Col>Price</Col>
                      <Col>{list.price + "$"}</Col>
                    </Row>
                  </>
                );
              })}
              <Row>
                <Col>Time Stamp</Col>
                <Col>{objs.time}</Col>
              </Row>
              <Row>
                <Col>Total price</Col>
                <Col>{objs.totalPrice + "$"}</Col>
              </Row>
              <hr />
            </Container>
          );
        })}
        <Button
          variant="dark"
          onClick={() => {
            handlePurchaseHistory();
            setShowLoader(true);
          }}
        >
          {showLoader ? (
            <Spinner animation="border" size="sm" role="status" />
          ) : (
            "Refresh"
          )}
        </Button>
      </Container>
    </div>
  );
};

export default memo(PurchaseHistory);
