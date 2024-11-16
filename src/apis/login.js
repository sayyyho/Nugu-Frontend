import { instance } from "./instance";
import Cookies from "js-cookie";
export const postLogin = async (form) => {
  try {
    const response = await instance.post("/login", {
      ...form,
    });
    const token = response.headers["authorization"];

    if (token) {
      sessionStorage.setItem("access_token", token.split(" ")[1]);
    }
  } catch (err) {
    throw err;
  }
};
