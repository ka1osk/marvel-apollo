import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
  background: "#fafafa",
  border: "#ddd",
  highlight: "#b5b5b5",
  highlightBlue: "#3498db"
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

  * {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${Colors.background};    
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.background};
  padding: 10px;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
