import React from "react";
import { PostCard } from "../PostCard";

import styles from "./posts.module.scss";

type Post = {
  slug: string;
  title: string;
  author: string;
  heroImgURL: string;
  publishDate: string;
  excerpt: string;
};

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.postsContainer}>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.slug} className={styles.card}>
              <PostCard post={post} />
            </div>
          );
        })}
    </div>
  );
}
