import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "tina",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",

      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "src/articles",
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "desc",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "imagealt",
            label: "Description de l'image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corps de texte",
            isBody: true, //⚠️ bien penser à mettre isBody: true au champ dont on souhaite qu’il souhaite render non pas en frontmatter mais bien en corps de texte markdown
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/pages",
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Catégorie",
            name: "categorie",
            list: true,
            required: true,
            options: [
              {
                label: "Mairie",
                value: "mairie",
              },
              {
                label: "Vie Locale",
                value: "vielocale",
              },
              {
                label: "Démarches",
                value: "demarches",
              }
            ],
          },
          {
            type: "string",
            label: "Icône",
            name: "emoji",
            description: "Emoji qui servira d'icône dans le menu de navigation",
            required: true,
          },
          {
            type: "rich-text",
            name: "contenu",
            label: "Contenu",
            required: true,
            isBody: true, //bien penser à mettre isBody: true au champ dont on souhaite qu’il souhaite render non pas en frontmatter mais bien en corps de texte markdown
          },
        ],
      },
    ],
  },
});
