import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;
  color: #fff;
}

button:not(:disabled) {
    cursor: pointer;
}

input:focus, button:focus {
    outline: none;
    border: 2px solid #4281f0;
}

a {
  color: #fff;
}

.App {
  min-height: 100vh;
  background: #26282f;
}
`;

export default GlobalStyle;
