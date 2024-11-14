import { instance } from "./instance";
import Cookies from "js-cookie";

export const getNuguTestStatus = async () => {
  try {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      console.error("토큰이 없습니다. 인증이 필요합니다.");
    }

    const response = await instance.get("/tests/status", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (response) {
      console.log("테스트 상태 확인:", response);
      return true;
    }
    return false;
  } catch (err) {
    console.error("테스트 상태 확인 중 오류가 발생했습니다:", err);
    throw err;
  }
};
