export const categoryfinder = (context) => {
  const temp = context.pathname.split("/");
  const id = temp[temp.length - 2];
  return id;
};
