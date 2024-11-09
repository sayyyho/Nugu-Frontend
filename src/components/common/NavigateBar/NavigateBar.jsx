import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { navigateTitle } from "@constants/navigatebar";
export const NavigateBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleMovePage = (value) => {
    navigate(value === 1 ? "/login" : value === 2 ? "/intro" : "/");
  };

  const isActive = (path) => location.pathname === path;
  console.log(isActive);
  return (
    <S.Container>
      {navigateTitle.map((item) => (
        <S.navigateBox
          key={item.value}
          className={
            isActive(
              item.value === 1 ? "/login" : item.value === 2 ? "/intro" : "/"
            )
              ? "active"
              : ""
          }
          onClick={() => handleMovePage(item.value)}
        >
          {item.title}
        </S.navigateBox>
      ))}
    </S.Container>
  );
};
