import { patchNuguInfo } from "@apis/nuguPatch";
import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";

export const useNuguPatch = () => {
  const [updateData, setUpdateData] = useRecoilState(signUpState);
  const handleSubmit = async () => {
    console.log(updateData);
    try {
      const response = await patchNuguInfo({
        nickname: updateData.nickname,
        mbti: updateData.mbti,
        org: updateData.org,
        insta_url: updateData.insta_url,
        intro: updateData.intro,
        keyword1: updateData.keyword1,
        keyword2: updateData.keyword2,
        keyword3: updateData.keyword3,
      });
      //   navigate(-1);
      return response;
    } catch (err) {
      throw err;
    }
  };

  const isFormValid = () => {
    const requiredFields = [
      updateData.nickname,
      updateData.mbti,
      updateData.org,
      updateData.insta_url,
      updateData.intro,
      updateData.keyword1,
      updateData.keyword2,
      updateData.keyword3,
    ];
    return requiredFields.every((field) => field !== "");
  };
  return { handleSubmit, isFormValid };
};
