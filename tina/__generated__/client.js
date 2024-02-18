import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "https://content.tinajs.io/1.4/content/b0376671-e258-4c36-8fa7-4ca68387c7a8/github/tina", token: "600ef325207364bc7ac69d039b6b05fa97b8c8e1", queries });
export default client;
