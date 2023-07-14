import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
            description: "If this is checked the post will not be published"
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Date Posted",
            required: true,
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            fields: [
              {
                type: "image",
                label: "Source",
                name: "src"
              },
              {
                type: "string",
                label: "Alt",
                name: "alt"
              }
            ]
          },
          {
            type: "string",
            label: "Tags",
            name: "tags",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "string",
            label: "Author",
            name: "author"
          },
          {
            type: "string",
            label: "Category",
            name: "category",
            options:[
              { value: "Tutorials", label: "Tutorials" },
              { value: "Courses", label: "Courses" },
              { value: "Misc", label: "Misc" },
            ]
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
