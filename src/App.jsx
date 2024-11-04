import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.js";
import { theme } from "./styles/theme.js";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Frame = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #3782ed;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 420px;
  background-color: white;
`;

const Layout = () => {
  return (
    <Frame>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Frame>
  );
};

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
