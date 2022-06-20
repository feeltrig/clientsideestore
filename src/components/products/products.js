import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

// FUNCTIONS
// 12. isproduct added or not
// 13. import login checker
import { isproductadded } from "../../functions/checkproduct";
import islogged from "../../functions/islogged";

// MAIN COMPONENT
const Products = () => {
  // MAIN APP STATE
  // 15. importing state
  const state = useSelector((state) => {
    return state;
  });

  let categories = Object.keys(state.productsavailable);

  // no access unless logged in
  if (islogged(state)) {
    return (
      <div>
        <div className="container-fluid px-5">
          <div>
            {/* title */}
            <div className="h1  my-5">Our Products</div>
            <div className="h2">Categoies</div>

            {/* categories */}
            <section className=" flex-row d-flex gap-5 text-decoration-none my-5">
              {categories.map((categories, index) => {
                return (
                  <p key={index}>
                    <Link
                      className="text-decoration-none text-white bg-dark btn"
                      to={categories}
                    >
                      {categories}
                    </Link>
                  </p>
                );
              })}
            </section>

            {/* list of products */}
            <Outlet context={state.productsavailable} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="alert text-center">Please log in</div>;
  }
};

export default Products;
