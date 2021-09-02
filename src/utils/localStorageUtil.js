const setLoggedIn = (isLogged) => {
  localStorage.setItem("isLoggedIn", isLogged);
};

const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn");
};

export default {
  setLoggedIn,
  isLoggedIn,
};
