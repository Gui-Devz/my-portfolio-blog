import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { api } from "../../../services/api";
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

type ResponseValue = {
  data: {
    posts: Post[];
    nextGroup?: string;
  };
};

interface PostsProps {
  posts: Post[];
  titleFilter: string;
  tagFilter: string;
}

export function Posts({ posts, titleFilter, tagFilter }: PostsProps) {
  const [newPosts, setNewPosts] = useState<Post[]>([]);

  async function getAllPosts({ pageParam = 0 }) {
    const response: ResponseValue = await api.get("posts", {
      params: {
        nextGroup: pageParam,
      },
    });

    return response.data;
  }

  const { data, error, fetchNextPage, hasNextPage, isError } = useInfiniteQuery(
    "posts",
    getAllPosts,
    {
      getNextPageParam: (lastPage) => lastPage?.nextGroup,
    }
  );

  useEffect(() => {
    if (posts.length > 0) {
      setNewPosts(posts);
      return;
    }

    setNewPosts(data.pages[0].posts);
  }, [posts, data]);

  return (
    <div className={styles.postsContainer}>
      {newPosts &&
        newPosts.map((post) => {
          return (
            <div key={post.slug} className={styles.card}>
              <PostCard post={post} />
            </div>
          );
        })}
    </div>
  );
}
