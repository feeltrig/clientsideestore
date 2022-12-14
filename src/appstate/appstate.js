import { createStore } from "redux";
import mainreducer from "../reducers/mainreducer";

// importing allproduct object
import { allproducts } from "../database/allproducts";

export const store = createStore(mainreducer, {
  productsavailable: allproducts,

  yourcart: [],
  userProfile: {
    username: null,
    password: null,
    email: null,
    id: null,
  },
});
