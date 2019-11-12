import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Title, Image, Button } from "./styles";

export default ({ id, name, thumbnail }) => {
  const history = useHistory();

  const handleOnClick = e => {
    history.push(`/character/${id}`);
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Image src={thumbnail} />
      <Button onClick={handleOnClick}>Detalhes</Button>
    </Container>
  );
};
