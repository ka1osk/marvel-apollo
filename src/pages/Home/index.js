import React, { useState, useEffect } from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Search from "components/Search";
import CardList from "components/CardList";
import Card from "components/Card";

export default () => {
  const client = useApolloClient();
  const [list, setList] = useState([]);

  const CHARACTERS_QUERY = gql`
    query {
      characters {
        id
        name
        thumbnail
      }
    }
  `;

  const { loading, error, data } = useQuery(CHARACTERS_QUERY);

  useEffect(() => {
    if (data && data.characters) {
      setList(data.characters);

      client.writeData({ data });
    }
  }, [client, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleOnChange = e => {
    const { characters } = client.readQuery({
      query: gql`
        {
          characters {
            id
            name
            thumbnail
          }
        }
      `
    });

    const filter = characters.filter(
      character =>
        character.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
    );

    setList(filter);
  };

  return (
    <>
      <Search {...{ handleOnChange }} />
      <CardList>
        {list.map(character => (
          <Card key={character.id} {...character} />
        ))}
      </CardList>
    </>
  );
};
