const islogged = (state) => {
  let user = state.userProfile;
  if (user.username !== null && user.email !== null && user.password !== null) {
    return true;
  }
};

export default islogged;
