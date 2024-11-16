import { instance } from "./instance";
export const postLogin = async (form) => {
  try {
    const response = await instance.post("/login", {
      ...form,
    });
    const token = response.headers["authorization"];

    if (token) {
      sessionStorage.setItem("access_token", tokenValue);
    }
  } catch (err) {
    throw err;
  }
};
