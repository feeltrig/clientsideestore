import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";

import Products from "./components/products/products";
import Productcard from "./components/products/productcard";
import Productpage from "./components/products/productpage";

import Breadcrumbs from "./components/breadcrumb";

import Yourcart from "./components/yourcart";

import Login from "./components/login";
import Signin from "./components/signin";

import Userprofile from "./components/userprofile";
import Navbar from "./components/navbar";
import Error from "./components/Error";

// imports for redux
import { Provider } from "react-redux";

// store import
import { store } from "./appstate/appstate";

function App() {
  const [islogged, setislogged] = useState(false);

  store.subscribe(() => {
    let islogged = store.getState().userProfile.username !== null;

    setislogged(islogged);
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="vh-min-75 ">
          <Navbar />
          <Breadcrumbs />

          <Routes>
            <Route path="/" element={<Home />} />
            {islogged && (
              <>
                <Route path="products" element={<Products />}>
                  <Route path=":category" element={<Productcard />}></Route>
                </Route>
                <Route
                  path="products/:category/:id"
                  element={<Productpage />}
                />

                <Route path="/yourcart" element={<Yourcart />} />
                <Route path="/userprofile" element={<Userprofile />} />
              </>
            )}

            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
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
