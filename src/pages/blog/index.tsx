import Head from "next/head";

import { Header } from "../../components/Blog/Header";
import { Posts } from "../../components/Blog/Posts";
import { Footer } from "../../components/Footer";

import { useEffect, useState } from "react";
import { ScrollUp } from "../../components/ScrollUp";

type Post = {
  slug: string;
  title: string;
  author: string;
  heroImgURL: string;
  publishDate: string;
  excerpt: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      setLastKnownScrollPosition(window.scrollY);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Blog - Posts about programming</title>
      </Head>
      <Header
        setPosts={setPosts}
        setTagFilter={setTagFilter}
        setTitleFilter={setTitleFilter}
      />
      <Posts posts={posts} titleFilter={titleFilter} tagFilter={tagFilter} />
      <Footer />
      {lastKnownScrollPosition >= 200 && <ScrollUp />}
    </>
  );
}
