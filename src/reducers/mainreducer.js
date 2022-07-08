export default (state, { type, payload }) => {
  switch (type) {
    case "addtocart":
      const filtercatg = payload.category;
      const mycartitems = state.productsavailable[filtercatg].filter(
        (items) => {
          return items.productName === payload.data;
        }
      );
      let addtocartstate = { ...state };
      addtocartstate.yourcart.push(...mycartitems);
      return addtocartstate;

    case "deletefromcart":
      let itemID = payload;
      let deletestate = { ...state };
      let filteredcart = deletestate.yourcart.filter((element) => {
        return element.productName !== itemID;
      });
      deletestate.yourcart = filteredcart;
      return deletestate;

    case "signin":
      let signinstate = { ...state };
      signinstate.userProfile = payload;
      return signinstate;

    case "logout":
      let logoutstate = { ...state };
      logoutstate.userProfile = {
        username: null,
        password: null,
        email: null,
      };
      return logoutstate;

    case "loginfn":
      let loginstate = { ...state };
      loginstate.userProfile = payload.profile;
      return loginstate;

    case "emptycart":
      let emptycartstate = { ...state };
      emptycartstate.yourcart = [];
      return emptycartstate;

    default:
      return state;
  }
};
