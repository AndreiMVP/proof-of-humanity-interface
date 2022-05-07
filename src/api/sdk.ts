import { GraphQLClient } from "graphql-request";
import { subgraphEndpoints } from "src/constants";
import { getSdk } from "src/generated/graphql";

const sdk = Object.keys(subgraphEndpoints).reduce(
  (acc, chainID) => ({
    ...acc,
    [chainID]: getSdk(new GraphQLClient(subgraphEndpoints[chainID])),
  }),
  {} as Record<string, ReturnType<typeof getSdk>>
);

export default sdk;