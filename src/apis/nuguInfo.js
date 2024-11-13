import { instance } from "./instance";

export const getNuguInfo = async (uuid) => {
  try {
    const response = await instance.get(`/user/${uuid}`);
    return response;
  } catch (err) {
    throw err;
  }
};
