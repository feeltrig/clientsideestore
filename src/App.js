import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";

import Products from "./components/products/products";
import Productcard from "./components/products/productcard";
import Productpage from "./components/products/productpage";

import Yourcart from "./components/yourcart";
import Login from "./components/login";
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
    console.log("subscribe ran");

    setislogged(islogged);
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="vh-min-75 ">
          <Navbar />

          <Routes>
            {islogged && (
              <>
                <Route path="/" element={<Home />} />
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
