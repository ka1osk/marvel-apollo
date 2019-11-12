import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Mutation {
    updateCharacter(id: Integer, name: String, description: String): [Character]
  }
`;

export const resolvers = {};
