"use client"; // ApolloProvider must be in a Client Component

import { ApolloProvider as Provider } from "@apollo/client";
import client from "./apollo-client";

export default function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={client}>{children}</Provider>;
}
