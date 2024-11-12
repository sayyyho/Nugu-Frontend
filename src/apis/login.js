import { instance } from "./instance";

export const postLogin = async (form) => {
  try {
    const response = await instance.post("/login", {
      username: form.username,
      password: form.password,
    });
    console.log(response);
    //   const token = response.headers["authorization"];
    // if (token) {
    //     sessionStorage.setItem("token", token);
    //   window.location.href = "/nugu/admin";
    //    }
  } catch (err) {
    throw err;
  }
};
