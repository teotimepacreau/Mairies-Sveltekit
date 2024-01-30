import { client } from "../../../../tina/__generated__/client";

export async function load({params}){
  return {
    title: params.slug
  }
}