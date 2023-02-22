import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "aa546420-5fe0-4881-bdc7-6ee19e424121", // Get this from tina.io
  token: "5ba273bf301f61f071227f6e1ed38764363a7899", // Get this from tina.io
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
  schema: {
    collections: [
      {
        label: "Event",
        name: "event",
        path: "content/english/events",
        fields: [
          {
            name: "draft",
            type: "boolean",
            label: "Draft",
            required: true,
          },
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "end_date",
            type: "datetime",
            label: "End Date",
            required: true,
          },
          {
            name: "description",
            type: "string",
            label: "Description",
          },
          {
            name: "location",
            type: "string",
            label: "Location",
          },
          {
            name: "event_type",
            type: "string",
            label: "Event Type",
            options: [{
              value: "regular",
              label: "Regular"
            }, {
              value: "featured",
              label: "Featured"
            }]
          },
          {
            name: "url",
            type: "string",
            label: "URL",
          },
          {
            name: "image",
            type: "image",
            label: "Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "members",
        name: "members",
        path: "content/english/members",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "All Pages",
        name: "all_pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "meta description",
          },
        ],
      },
    ],
  },
});
