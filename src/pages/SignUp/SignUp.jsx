import * as S from "./styled";
import { Layout } from "@components/common/layout/Layout";
import { ProgressBar } from "@components/common/progressBar/ProgreesBar";
import { Input } from "@components/input/Input";
import { Button } from "@components/common/button/Button";
import { usePageInfo } from "@hooks/usePageInfo";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  // TODO - Recoil로 데이터 연동
  const { page, nextPath } = usePageInfo();
  const navigate = useNavigate();
  return (
    <Layout $backgroundColor={"gray200"}>
      <S.SignUpWrapper>
        <S.TopWrapper>
          <ProgressBar title={"누구 생성하기"} $now={Number(page)} />
          <Input
            title={"아이디"}
            placeholder={"아이디를 입력해 주세요. (20자 이내)"}
          />
          <Input
            title={"비밀번호"}
            placeholder={"비밀번호를 입력해 주세요. (8자 이상 16자 이내)"}
          />
          <Input
            title={"비밀번호 확인"}
            placeholder={"비밀번호를 다시 입력해 주세요."}
          />
        </S.TopWrapper>

        <Button disabled={false} onClick={() => navigate(nextPath)}>
          다음
        </Button>
      </S.SignUpWrapper>
    </Layout>
  );
};
