import { instance } from "./instance";
import Cookies from "js-cookie";

export const getNuguTestStatus = async () => {
  try {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      console.log("세션 만료");
    }

    const response = await instance.get("/tests/status", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (err) {
    console.error("테스트 상태 확인 중 오류가 발생했습니다:", err);
    throw err;
  }
};
