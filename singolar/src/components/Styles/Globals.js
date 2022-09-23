import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    margin: 0;
}
h1, h2, h3, h4, h5 {
    margin: 0;
}
a {
    cursor: pointer;
    text-decoration: none;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;

export const ThemeH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: ${(props) => props.color};
  @media (max-width: 767px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ThemeSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Column = styled.div`
  width: ${(props) => props.w || "100%"};
  height: ${(props) => props.h || "100%"};
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.items || "center"};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;

export const Row = styled.div`
  width: ${(props) => props.w || "100%"};
  height: ${(props) => props.h || "100%"};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.items || "center"};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;

export const ThemeButton = styled.button`
  width: 152px;
  height: 52px;
  background-color: ${(props) => props.bgColor || "#d69c27"};
  border: none;
  border-radius: 5px;
  color: #f1f5e9;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.3);
  @media (max-width: 767px) {
    width: 112px;
    height: 42px;
  }
`;
