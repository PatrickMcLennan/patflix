import { createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

export default createClient({
  url: `/api/graphql`,
  exchanges: [dedupExchange, cacheExchange({}), ssrExchange(), fetchExchange],
});
