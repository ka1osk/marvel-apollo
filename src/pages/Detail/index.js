import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { MdArrowBack, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
import {
  Container,
  TitleContainer,
  Title,
  BackButton,
  ContentContainer,
  ImageContainer,
  ImageContainerbackGround,
  Image,
  ButtonEdit,
  Content,
  SeriesTitle,
  SeriesList,
  SeriesItem
} from "./styles";

export default () => {
  const history = useHistory();
  const client = useApolloClient();
  const [character, setCharacter] = useState({});

  const { id } = useParams();
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

  const { loading, error, data } = useQuery(GET_CHARACTER);

  useEffect(() => {
    data && data.characters && setCharacter(data.characters[0]);
  }, [character, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <ImageContainerbackGround src={character.thumbnail} />
          <Image src={character.thumbnail} />
          <TitleContainer>
            <BackButton
              onClick={() => history.goBack()}
              title={"voltar"}
              alt={"voltar"}
            >
              <MdArrowBack />
            </BackButton>
            <Title>{character.name}</Title>
          </TitleContainer>
        </ImageContainer>
        <ButtonEdit
          onClick={() => history.push(`/character/${id}/edit`)}
          alt={"alterar"}
          title={"alterar"}
        >
          <MdEdit />
        </ButtonEdit>
        <Content>{character.description}</Content>
        {character.series && (
          <>
            <SeriesTitle>Séries:</SeriesTitle>
            <SeriesList>
              {character.series.map((serie, index) => (
                <SeriesItem key={index}>{serie.name}</SeriesItem>
              ))}
            </SeriesList>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};
