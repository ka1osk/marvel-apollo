import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Form, Label, Input, TextArea, Button } from "./styles";

export default () => {
  const history = useHistory();
  const client = useApolloClient();
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const GET_CHARACTER = gql`
    query {
      characters(where: { id: ${id} }) {
        name
        description
        thumbnail
        description
        series {
          name
        }
      }
    }
  `;

  useEffect(() => {
    const data = client.readQuery({
      query: GET_CHARACTER
    });

    setCharacter(data.characters[0]);
  }, [GET_CHARACTER, client, id]);
  const handleOnChange = e => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    client.writeQuery({
      query: GET_CHARACTER,
      data: {
        characters: [character]
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Label>Nome</Label>
          <Input
            name="nome"
            onChange={handleOnChange}
            defaultValue={character.name}
          />
        </Row>
        <Row>
          <Label>Descrição</Label>
          <TextArea
            name="descricao"
            onChange={handleOnChange}
            defaultValue={character.description}
          />
        </Row>

        <Row style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button onClick={() => history.goBack()} outline>
            Cancelar
          </Button>
          <Button type={"submit"}>Salvar</Button>
        </Row>
      </Form>
    </Container>
  );
};
