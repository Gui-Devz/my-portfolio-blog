import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENT_ENVIRONMENT_TOKEN,
  accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_TOKEN,
});

export const previewClient = contentful.createClient({
  host: "preview.contentful.com",
  space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENT_ENVIRONMENT_TOKEN,
  accessToken: process.env.NEXT_PUBLIC_CONTENT_PREVIEW_TOKEN,
});
