import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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

  const { data, error, fetchNextPage, hasNextPage, isError, isLoading } =
    useInfiniteQuery("posts", getAllPosts, {
      getNextPageParam: (lastPage) => lastPage?.nextGroup,
    });

  useEffect(() => {
    if (posts.length > 0) {
      setNewPosts(posts);
      return;
    }
    if (!isLoading) {
      const posts = data.pages.map((page) => {
        const post = page.posts.map((post) => post);
        return post;
      });

      setNewPosts(posts.flat());
    }
    return;
  }, [posts, data, isLoading]);

  return (
    <div className={styles.postsContainer}>
      {titleFilter !== "" && (
        <p className={styles.filter}>
          <i>&#34;Filtered by: {titleFilter}&#34;</i>
        </p>
      )}
      {tagFilter !== "" && (
        <p className={styles.filter}>
          {" "}
          <i>&#34;Filtered by: {tagFilter}&#34;</i>
        </p>
      )}

      {posts.length === 0 && tagFilter === "" && titleFilter === "" ? (
        <InfiniteScroll
          dataLength={!isLoading ? data.pages.length : newPosts.length} //This is important field to render the next data
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {newPosts &&
            newPosts.map((post) => {
              return (
                <div key={post.slug} className={styles.card}>
                  <PostCard post={post} />
                </div>
              );
            })}
        </InfiniteScroll>
      ) : posts.length === 0 && (tagFilter !== "" || titleFilter !== "") ? (
        <p className={styles.postNotFound}>
          Sorry! We couldn&#39;t find any post with the filter selected.
        </p>
      ) : (
        newPosts.map((post) => {
          return (
            <div key={post.slug} className={styles.card}>
              <PostCard post={post} />
            </div>
          );
        })
      )}
    </div>
  );
}
