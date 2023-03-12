import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  background: linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%);;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family:  'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; ; 
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: ${(props) => props.theme.colors.black};
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
}


[type="radio"] {
  width: 20px;
  height: 20px;
  appearance: none;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray300};
  border-radius: 9999px;
  color: ${(props) => props.theme.colors.purple};
}
[type="radio"]:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
  background-color: currentColor;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-color: transparent;
}

[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  appearance: none;
  outline: none;

  &:checked {
    background-color: ${({ theme }) => theme.colors.purple};
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEyLjIwNyA0Ljc5M2ExIDEgMCAwIDEgMCAxLjQxNGwtNSA1YTEgMSAwIDAgMS0xLjQxNCAwbC0yLTJhMSAxIDAgMCAxIDEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwIDEgMS40MTQgMHonLz48L3N2Zz4=);
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
}

`;

export default GlobalStyle;
