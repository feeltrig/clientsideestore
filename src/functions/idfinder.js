export const idfinder = (context) => {
  const temp = context.pathname.split("/");
  const id = temp[temp.length - 1];
  return id;
};
