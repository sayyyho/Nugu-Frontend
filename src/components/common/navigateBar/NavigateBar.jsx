import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { NAVIGATE_TITLE } from "@constants/navigatebar";
export const NavigateBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTokenAvailable = false;
  const handleMovePage = (value) => {
    let path;
    switch (value) {
      case 1:
        path = isTokenAvailable ? "/login" : "/login";
        break;
      case 2:
        path = "/intro";
        break;
      case 3:
        path = isTokenAvailable ? "/test" : "/challenge";
        break;
      default:
        path = "/";
        break;
    }
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;
  console.log(isActive);
  return (
    <S.Container>
      {NAVIGATE_TITLE.map((item) => (
        <S.NavigateBox
          key={item.value}
          className={
            isActive(
              item.value === 1
                ? isTokenAvailable
                  ? "/dashboard"
                  : "/login"
                : item.value === 2
                ? isTokenAvailable
                  ? "/intro"
                  : "/intro"
                : isTokenAvailable
                ? "/test"
                : "/challenge"
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
