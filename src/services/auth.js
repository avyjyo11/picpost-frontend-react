import axiosBE from "./axios";

export const login = async ({ username, password }) => {
  const res = await axiosBE.post(`/auth/login`, {
    username,
    password,
  });

  window.localStorage.setItem("token", res.data.token);
  window.localStorage.setItem("userid", res.data.userid);

  return res;
};

export const register = async (data) => {
  const res = await axiosBE.post(`/auth/register`, data);

  window.localStorage.setItem("token", res.data.token);
  window.localStorage.setItem("userid", res.data.userid);

  return res;
};
