import { instance } from "./instance";

export const postSignUp = async (signUpData) => {
  try {
    const response = await instance.post("/join", { ...signUpData });
  } catch (err) {
    console.error("회원가입 요청 중 오류가 발생했습니다:", err);
    throw err;
  }
};
