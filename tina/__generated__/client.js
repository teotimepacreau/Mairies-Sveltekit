import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "https://content.tinajs.io/1.4/content/a9eebcdd-6a53-4c3e-975a-2f07564378d0/github/tina", token: "f0e36f82b826f9ad1a6257f584cd6a0cdb45893c", queries });
export default client;
