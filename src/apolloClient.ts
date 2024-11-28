import { ApolloClient, InMemoryCache } from '@apollo/client';

const url = process.env.REACT_APP_GRAPHQL_ENDPOINT as string;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
};
console.log(url);
export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
  headers,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});