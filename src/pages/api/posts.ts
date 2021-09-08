import { NextApiRequest, NextApiResponse } from "next";

import { contentfulClient } from "../../services/contentful";
import { formattingDate } from "../../lib/utils";

import { ContentfulCollection } from "contentful";

type Post = {
  slug: string;
  title: string;
  author: string;
  heroImgURL: string;
  publishDate: string;
  excerpt: string;
};

type OptionsValue = {
  skip?: string | string[];
  limit: number;
  tag?: string | string[];
  title?: string | string[];
  content_type: string;
};

interface GetPostsReturnValues {
  posts: Post[];
  nextPage: number | undefined;
}

async function getPosts(options: OptionsValue): Promise<GetPostsReturnValues> {
  try {
    const response: ContentfulCollection<any> =
      await contentfulClient.getEntries({
        skip: options.skip,
        limit: options.limit,
        content_type: options.content_type,
        "metadata.tags.sys.id[in]": options.tag,
        "fields.title[match]": options.title,
      });

    const posts = response.items.map((post) => {
      return {
        slug: post.fields.slug,
        title: post.fields.title,
        author: post.fields.author,
        heroImgURL: post.fields.heroImage.fields.file.url.replace(
          /^/,
          "https:"
        ),
        publishDate: formattingDate(post.fields.publishDate),
        excerpt: post.fields.excerpt,
      };
    });

    const data = {
      posts,
      nextPage:
        response.total > Number(options.skip) + 3
          ? Number(options.skip) + 3
          : undefined,
    };

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nextGroup, filterByTag, filterByTitle } = req.query;

  if (filterByTag) {
    const options = {
      skip: nextGroup,
      limit: 3,
      tag: filterByTag,
      content_type: "posts",
    };

    try {
      const data = await getPosts(options);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({
        message_error: "Sorry! Failed trying to fetch posts by tag.",
      });
    }
  } else if (filterByTitle) {
    const options = {
      skip: nextGroup,
      limit: 3,
      title: filterByTitle,
      content_type: "posts",
    };
    try {
      const data = await getPosts(options);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({
        message_error: "Sorry! Failed trying to fetch posts by title.",
      });
    }
  }

  const options = {
    skip: nextGroup,
    limit: 3,
    title: filterByTitle,
    content_type: "posts",
  };
  try {
    const data = await getPosts(options);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message_error: "Sorry! Failed trying to fetch posts.",
    });
  }
}
