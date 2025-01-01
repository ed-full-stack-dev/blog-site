import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;

const client = new ApolloClient({
  link: new HttpLink({
    uri: url, // GraphQL endpoint
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only", // Ensures fresh data is fetched for every query
    },
  },
});

export default client;
