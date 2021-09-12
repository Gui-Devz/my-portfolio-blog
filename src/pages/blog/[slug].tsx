import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { contentfulClient } from "../../services/contentful";
import { ContentfulCollection } from "contentful";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { HeaderPost } from "../../components/Blog/Header/HeaderPost";

import { formattingDate } from "../../lib/utils";

import styles from "./post.module.scss";

type Post = {
  tags: string[];
  title: string;
  author: string;
  heroImgURL: string;
  updateDate: string;
  content: string;
};

interface PostProps {
  post: Post;
}
export default function Post({ post }: PostProps) {
  //console.log(Math.ceil(post.content.length / 1000));
  let readingTime = 0;

  /* function calculateReadingTime(): void {
    // const filter = /(\s*\w*)/g;
    const totalWords = post.content.reduce(
      (acc, content) => {
        const headingWords = content.heading.split(" ");
        const bodyWords = content.body.map((paragraph) => {
          return paragraph.text.split(" ");
        });
        let total = headingWords.length;
        bodyWords.forEach((wordsArray) => {
          total += wordsArray.length;
        });
        acc.words += total;
        // console.log(total);
        return acc;
      },
      { words: 0 }
    );

    readingTime = Math.ceil(totalWords.words / 200);
    // console.log(totalWords);
  }

   useEffect(() => {
  calculateReadingTime();
   }, []); */

  return (
    <>
      <Head>
        <title>Blog - {post.title}</title>
      </Head>
      <HeaderPost />
      <div className={styles.container}>
        <section
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></section>
      </div>
    </>
  );
}

export async function getStaticPaths({ params }) {
  console.log();

  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const response: ContentfulCollection<any> = await contentfulClient.getEntries(
    {
      content_type: "posts",
      "fields.slug": slug,
    }
  );

  const responsePost = response.items[0];
  const updateDate = formattingDate(responsePost.sys.updatedAt);

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return `<code>${text}</code>`;
      },
    },
    /* renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) =>
        `<img src="${node.data.target.fields.file.url.replace(
          /^/,
          "https:"
        )}" alt="${node.data.target.fields.description}"/>`,
    }, */
  };
  const content = documentToHtmlString(responsePost.fields.content, options);

  const post = {
    tags: responsePost.metadata.tags.map((tag) => tag.sys.id),
    title: responsePost.fields.title,
    author: responsePost.fields.author,
    heroImgURL: responsePost.fields.heroImage.fields.file.url.replace(
      /^/,
      "https:"
    ),
    updateDate,
    content,
    obj: responsePost.fields.content,
  };
  return {
    props: {
      post: post,
    },
  };
};
