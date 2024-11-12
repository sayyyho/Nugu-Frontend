import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: center;
  background: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: ${({ $margin }) => $margin};
`;
