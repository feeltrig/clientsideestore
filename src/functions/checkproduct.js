// checks if product already added to cart

export const isproductadded = (currentcart, itemtocheck) => {
  let filteredarray = currentcart.filter((objs) => {
    return objs.productName === itemtocheck;
  });

  //   filtered array is not empty if product exists

  return filteredarray.length < 1;
};
