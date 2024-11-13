import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // config 매개변수를 받아옵니다.
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log("토큰 없음");
    return Promise.reject(error);
  }
);
