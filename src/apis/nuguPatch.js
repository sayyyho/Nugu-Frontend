import { instance } from "./instance";
export const patchNuguInfo = async ({
  nickname,
  mbti,
  org,
  insta_url,
  intro,
  keyword1,
  keyword2,
  keyword3,
}) => {
  try {
    const response = await instance.patch(
      "/user",
      {
        nickname,
        mbti,
        org,
        insta_url,
        intro,
        keyword1,
        keyword2,
        keyword3,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    console.log("patch된 정보", response);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getNugu = async () => {
  try {
    const response = await instance.get(
      `/user`,

      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
