import { instance } from "./instance";

export const getUUID = async () => {
  try {
    const response = await instance.get("/user/uuid");
    console.log(response);
  } catch (err) {
    throw err;
  }
};
