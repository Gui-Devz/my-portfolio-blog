import { GetStaticProps } from "next";
import Head from "next/head";

import { contentfulClient } from "../../services/contentful";
import { ContentfulCollection } from "contentful";

import { Document } from "@contentful/rich-text-types";

import { HeaderPost } from "../../components/Blog/Header/HeaderPost";
import { PostDebrief } from "../../components/Blog/PostDebrief";
import { PostContent } from "../../components/Blog/PostContent";
import { Footer } from "../../components/Footer";

import { formattingDate } from "../../lib/utils";

import styles from "./post.module.scss";
import { Share } from "../../components/Blog/Share";
import React from "react";
import { ScrollUp } from "../../components/ScrollUp";

type Post = {
  tags: string[];
  title: string;
  author: string;
  heroImgURL: string;
  updateDate: string;
  content: Document;
};

interface PostProps {
  post: Post;
}
export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Blog - {post.title}</title>
      </Head>
      <HeaderPost />
      <PostDebrief
        tags={post.tags}
        title={post.title}
        heroImg={post.heroImgURL}
        updatedAt={post.updateDate}
        author={post.author}
      />
      <PostContent content={post.content} />
      <Share />
      <ScrollUp />
      <Footer />
    </>
  );
}

export async function getStaticPaths({ params }) {
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
      "fields.slug[in]": slug,
    }
  );

  const responsePost = response.items[0];
  const updateDate = formattingDate(responsePost.sys.updatedAt);

  const post = {
    tags: responsePost.metadata.tags.map((tag) => tag.sys.id),
    title: responsePost.fields.title,
    author: responsePost.fields.author,
    heroImgURL: responsePost.fields.heroImage.fields.file.url.replace(
      /^/,
      "https:"
    ),
    content: responsePost.fields.content,
    updateDate,
  };
  return {
    props: {
      post: post,
    },
  };
};
