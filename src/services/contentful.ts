import contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_TOKEN,
});
