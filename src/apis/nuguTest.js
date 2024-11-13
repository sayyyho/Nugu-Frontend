import { instance } from "./instance";

export const getNuguTestStatus = async () => {
  try {
    const response = await instance.get("/tests/status");
    console.log(response);
    if (response.data.hasTest) {
      // TODO 수행한 인원 및 기타 작업
      return true;
    }
    return false;
  } catch (err) {
    throw err;
  }
};
