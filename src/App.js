import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";

import Products from "./components/products/products";
import Productcard from "./components/products/productcard";
import Productpage from "./components/products/productpage";

import Breadcrumbnavigation from "./components/breadcrumbnavigation";

import Yourcart from "./components/yourcart";

import Login from "./components/login";
import Signin from "./components/signin";

import Userprofile from "./components/userprofile";
import PurchaseHistory from "./components/user/purchasehistory";

import Navigation from "./components/navigation";
import Error from "./components/Error";

// imports for redux
import { Provider } from "react-redux";

// store import
import { store } from "./appstate/appstate";

function App() {
  // set logged state
  const [islogged, setislogged] = useState(false);
  const [isUser, setIsUser] = useState(false);
  store.subscribe(() => {
    let islogged = store.getState().userProfile.username !== null;
    setislogged(islogged);
    let isuser = store.getState().userProfile.username !== "guest";
    setIsUser(isuser);
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="vh-min-75 ">
          <Navigation />
          <Breadcrumbnavigation />

          <Routes>
            {islogged && (
              <>
                <Route path="products" element={<Products />}>
                  <Route path=":category" element={<Productcard />}></Route>
                </Route>
                <Route
                  path="products/:category/:id"
                  element={<Productpage />}
                />

                <Route path="yourcart" element={<Yourcart />} />
                <Route path="userprofile" element={<Userprofile />}></Route>
                {isUser && (
                  <Route
                    path="userprofile/purchasehistory"
                    element={<PurchaseHistory />}
                  />
                )}
              </>
            )}

            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            {!islogged && <Route path="/login" element={<Login />} />}
            <Route path="/signin" element={<Signin />} />
          </Routes>

          <footer className="footer p-2 my-5 bg-light h2 text-center">
            Contact us
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
