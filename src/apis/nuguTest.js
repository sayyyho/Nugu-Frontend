import { instance } from "./instance";
import Cookies from "js-cookie";

export const getNuguTestStatus = async () => {
  try {
    const response = await instance.get("/tests/status", {
      headers: {
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("테스트 상태 확인 중 오류가 발생했습니다:", err);
    throw err;
  }
};

export const getNuguTestRanking = async () => {
  try {
    const response = await instance.get("/test-results/rankings", {
      headers: {
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postMakingNuguTest = async (answers) => {
  try {
    const response = await instance.post(
      "/tests",
      {
        answers,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      }
    );
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
    console.log(response.data.id);

    return response.data.id;
  } catch (err) {
    console.log(err);
  }
};

export const getUserTestAnswer = async (uuid) => {
  try {
    const response = await instance.get(`/tests/${uuid}/answers`);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getGuestViewIsUserTest = async (uuid) => {
  try {
    const response = await instance.get(`/tests/status/${uuid}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
