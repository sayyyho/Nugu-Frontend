import { instance } from "./instance";
import Cookies from "js-cookie";

export const getIntroList = async () => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await instance.get("/intro");
      console.log("getIntroList", response);
    } else {
      // const response = await instance.get(`/intro/${uuid}`);
      // console.log("getGuestIntroList", response);
      //TODO
    }
  } catch (error) {
    throw error;
  }
};
export const postIntro = async ({ content, keyword1, keyword2, keyword3 }) => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await instance.post("/intro", {
        content,
        keyword1,
        keyword2,
        keyword3,
      });
      return response;
    } else {
      // const response = await instance.post(`/intro/${uuid}`, {
      //   content,
      //   keyword1,
      //   keyword2,
      //   keyword3,
      // });
      // return response;
      //TODO
    }
  } catch (error) {
    throw error;
  }
};
