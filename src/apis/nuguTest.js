import { instance } from "./instance";

export const getNuguTestStatus = async () => {
  try {
    const response = await instance.get("/tests/status");
    return response.data;
  } catch (err) {
    console.error("테스트 상태 확인 중 오류가 발생했습니다:", err);
    throw err;
  }
};

export const getNuguTestRanking = async () => {
  try {
    const response = await instance.get("/test-results/rankings");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postMakingNuguTest = async (answers) => {
  try {
    const response = await instance.post("/tests", {
      answers,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getNuguTestResult = async (uuid) => {
  try {
    const response = await instance.get(`/test-results/${uuid}/rankings`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postGuestTest = async (data, uuid) => {
  try {
    const response = await instance.post(`/test-results/submit/${uuid}`, {
      ...data,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
