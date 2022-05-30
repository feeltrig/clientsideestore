import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";

import Products from "./components/products";
import Bathitems from "./components/productitems/bathitems";
import Groceries from "./components/productitems/groceries";
import Stupiditems from "./components/productitems/stupiditems";
import Productpage from "./components/productitems/productpage";

import Yourcart from "./components/yourcart";
import Login from "./components/login";
import Userprofile from "./components/userprofile";
import Navbar from "./components/navbar";
import Error from "./components/Error";

// imports for redux
import { Provider } from "react-redux";

// store import
import { store } from "./components/appstate";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="vh-min-75 ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route
                path="stupiditems"
                element={<Stupiditems catg="stupidproducts" />}
              ></Route>
              <Route
                path="groceries"
                element={<Groceries catg="groceries" />}
              />
              <Route
                path="bathitems"
                element={<Bathitems catg="bathitems" />}
              />
            </Route>
            <Route path="products/stupiditems/:id" element={<Productpage />} />
            <Route path="/yourcart" element={<Yourcart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="*" element={<Error />} />
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
