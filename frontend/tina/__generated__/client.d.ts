import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '600ef325207364bc7ac69d039b6b05fa97b8c8e1', queries,  });
export default client;
  