import React from "react";
import { Container, Input } from "./styles";

export default ({ handleOnChange }) => {
  return (
    <Container>
      <Input onChange={handleOnChange} />
    </Container>
  );
};
