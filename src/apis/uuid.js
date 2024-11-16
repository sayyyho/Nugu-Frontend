import { instance } from "./instance";
import Cookies from "js-cookie";

export const getUUID = async () => {
  try {
    const response = await instance.get("/user/uuid", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    });
    const uuid = response.data;
    if (uuid) {
      Cookies.set("uuid", uuid, {
        path: "/",
        secure: true,
        sameSite: "Strict",
      });
    }
  } catch (err) {
    console.error("UUID 요청 중 오류가 발생했습니다:", err);
    throw err;
  }
};
