import React from "react";
import { PostCard } from "../PostCard";

import styles from "./posts.module.scss";

export function Posts() {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.card}>
        <PostCard />
      </div>
      <div className={styles.card}>
        <PostCard />
      </div>
      <div className={styles.card}>
        <PostCard />
      </div>
    </div>
  );
}
