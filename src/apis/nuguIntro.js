import { instance } from "./instance";
export const getIntroList = async (uuid) => {
  try {
    const response = await instance.get(`/intro/${uuid}`);
    console.log("getGuestIntroList", response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const postIntro = async ({
  content,
  keyword1,
  keyword2,
  keyword3,
  uuid,
}) => {
  try {
    const response = await instance.post(`/intro/${uuid}`, {
      content,
      keyword1,
      keyword2,
      keyword3,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
