import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers, typeDefs } from "./Resolvers";

const client = new ApolloClient({
  uri: "https://api.marvelql.com/",
  cache: new InMemoryCache(),
  typeDefs,
  resolvers
});

export default client;
