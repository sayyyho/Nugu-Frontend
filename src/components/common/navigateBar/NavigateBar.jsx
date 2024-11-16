import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { NAVIGATE_TITLE } from "@constants/navigatebar";
import Cookies from "js-cookie";

export const NavigateBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTokenAvailable = sessionStorage.getItem("access_token")
    ? true
    : false;
  const handleMovePage = (value) => {
    let path;
    switch (value) {
      case 1:
        path = `/nugu/${Cookies.get("uuid")}`;
        break;
      case 2:
        path = `/nuguIntro/${Cookies.get("uuid")}`;
        break;
      case 3:
        path = isTokenAvailable ? "/test" : `/challenge/${Cookies.get("uuid")}`;
        break;
      default:
        path = "/";
        break;
    }
    navigate(path);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <S.Container>
      {NAVIGATE_TITLE.map((item) => (
        <S.NavigateBox
          key={item.value}
          className={
            isActive(
              item.value === 1
                ? `/nugu/${Cookies.get("uuid")}`
                : item.value === 2
                ? `/nuguIntro/${Cookies.get("uuid")}`
                : isTokenAvailable
                ? "/test"
                : `/challenge/${Cookies.get("uuid")}`
            )
              ? "active"
              : ""
          }
          onClick={() => handleMovePage(item.value)}
        >
          {item.title}
        </S.NavigateBox>
      ))}
    </S.Container>
  );
};
