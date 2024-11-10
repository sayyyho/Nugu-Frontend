import { atom } from "recoil";

/** @type {UserProfile} */
export const signUpState = atom({
  key: "signUpState",
  default: {
    username: "",
    password: "",
    password2: "",
    nickname: "",
    mbti: "",
    org: "",
    insta_url: "",
    intro: "",
    keyword1: "",
    keyword2: "",
    keyword3: "",
  },
});

/**
 * @typedef {Object} UserProfile
 * @property {string} username - 로그인용 사용자 이름.
 * @property {string} password - 사용자 비밀번호.
 * @property {string} password2 - 비밀번호 확인.
 * @property {string} nickname - 사용자의 별명.
 * @property {string} mbti - 사용자의 MBTI 유형.
 * @property {string} org - 소속 기관 혹은 학교.
 * @property {string} insta_url - 인스타그램 프로필 URL.
 * @property {string} intro - 사용자 한 줄 소개.
 * @property {string} keyword1 - 첫 번째 키워드.
 * @property {string} keyword2 - 두 번째 키워드.
 * @property {string} keyword3 - 세 번째 키워드.
 */
