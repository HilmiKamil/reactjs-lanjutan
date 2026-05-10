export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const isAdmin = () => {
  const user = getUser();

  return user?.role === "admin";
};

export const isCustomer = () => {
  const user = getUser();

  return user?.role === "customer";
};