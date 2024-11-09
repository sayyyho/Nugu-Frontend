import React, { useEffect } from "react";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.js";
import { theme } from "./styles/theme.js";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
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
