import { instance } from "./instance";

export const postLogin = async (form) => {
  try {
    const response = await instance.post("/login", {
      username: form.username,
      password: form.password,
    });
    console.log(response);
  } catch (err) {
    throw err;
  }
};
