import { NextApiRequest, NextApiResponse } from "next";

import { contentfulClient } from "../../services/contentful";
import { formattingDate } from "../../lib/utils";

import { ContentfulCollection } from "contentful";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nextGroup } = req.query;
  const response: ContentfulCollection<any> = await contentfulClient.getEntries(
    {
      skip: nextGroup,
      limit: 3,
      content_type: "posts",
    }
  );

  const posts = response.items.map((post) => {
    return {
      slug: post.fields.slug,
      title: post.fields.title,
      author: post.fields.author,
      heroImgURL: post.fields.heroImage.fields.file.url.replace(/^/, "https:"),
      publishDate: formattingDate(post.fields.publishDate),
      excerpt: post.fields.excerpt,
    };
  });

  const data = {
    posts,
    nextPage:
      response.total > Number(nextGroup) + 3
        ? Number(nextGroup) + 3
        : undefined,
  };

  return res.status(200).json(data);
}
