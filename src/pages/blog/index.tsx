import Head from "next/head";
import { GetStaticProps } from "next";
import { Header } from "../../components/Blog/Header";
import { Posts } from "../../components/Blog/Posts";
import { Footer } from "../../components/Footer";

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

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - Posts about programming</title>
      </Head>
      <Header />
      <Posts posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response: ContentfulCollection<any> = await contentfulClient.getEntries(
    {
      limit: 1,
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

  //console.log(posts);

  return {
    props: { posts },
    revalidate: 60 * 30,
  };
};
