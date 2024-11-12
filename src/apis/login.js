import { instance } from "./instance";

export const postLogin = async (username, password) => {
  try {
    const response = await instance.post("/login", {
      username,
      password,
    });
    console.log(response);
  } catch (err) {
    throw err;
  }
};
