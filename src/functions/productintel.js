export const productintel = (state, category, id) => {
  let temp = state.productsavailable[category].filter((items) => {
    return items.productName === id;
  });
  console.log(temp);

  return temp.length > 0 ? temp[0] : false;
};
