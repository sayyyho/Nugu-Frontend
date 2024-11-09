import { atom } from "recoil";

export const LoginState = atom({
  key: "LoginState",
  default: {
    username: "",
    password: "",
  },
});
/*
 * @property {string} username - 로그인용 사용자 이름.
 * @property {string} password - 사용자 비밀번호.
 *  */
