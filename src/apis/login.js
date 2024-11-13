import { instance } from "./instance";
import Cookies from "js-cookie";

export const postLogin = async (form) => {
  try {
    const response = await instance.post("/login", {
      ...form,
    });
    const token = response.headers["authorization"];

    if (token) {
      const tokenValue = token.split(" ")[1];
      Cookies.set("access_token", tokenValue, {
        path: "/",
        secure: true,
        sameSite: "Strict",
      });

      window.location.href = "/nugu/admin";
    }
  } catch (err) {
    throw err;
  }
};
