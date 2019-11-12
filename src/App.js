import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, GlobalStyles } from "Styles";
import Routes from "Routes";
import Api from "services/Api";

function App() {
  return (
    <ApolloProvider client={Api}>
      <BrowserRouter>
        <Container>
          <GlobalStyles />
          <Routes />
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
