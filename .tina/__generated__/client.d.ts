import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5ba273bf301f61f071227f6e1ed38764363a7899', queries,  });
export default client;
  