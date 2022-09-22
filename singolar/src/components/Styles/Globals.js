import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
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
