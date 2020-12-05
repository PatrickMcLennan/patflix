import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema, Resolver, Query } from 'type-graphql';
import { NextApiRequest, NextApiResponse } from 'next';

// @Resolver()
// class HelloResolver {
//   @Query(() => String)
//   async hello() {
//     return `hello world!`;
//   }
// }

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async () => {
  //   const schema = await buildSchema({
  //     resolvers: [HelloResolver],
  //   });

  const server = new ApolloServer({ typeDefs: ``, resolvers: `` });
  server.createHandler({ path: `/api/graphql` });
};

// export default async function (req: NextApiRequest, res: NextApiResponse): Promise<ApolloServer> {
//   const schema = await buildSchema({
//   });
//   const server = new ApolloServer({ schema });
//   //   server.createHandler({ path: `/api/graphql` });
//   //   res.send();
//   return server;
// }
