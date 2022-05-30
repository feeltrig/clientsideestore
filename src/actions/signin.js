const signinfn = (username, email, password) => {
  return {
    type: "signin",
    payload: {
      username: username.toString(),
      email: email.toString(),
      password: password.toString(),
    },
  };
};

export default signinfn;
