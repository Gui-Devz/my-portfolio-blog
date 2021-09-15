import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

import { RiFilePaperFill } from "react-icons/ri";

import { PostCard } from "../PostCard";
import { LoadingSpinner } from "../../LoadingSpinner";

import { api } from "../../../services/api";

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
    return () => setNewPosts([]);
  }, [posts, data, isLoading]);

  if (isError) {
    return (
      <div className={styles.postsContainer}>
        <p className={styles.postNotFound}>
          Sorry! Something went wrong with fetching the posts.
        </p>
      </div>
    );
  }

  if (isLoading && newPosts.length <= 3) {
    return (
      <div className={styles.postsContainer}>
        <div className={styles.loadingSpinner}>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.postsContainer}>
      {titleFilter !== "" && (
        <p className={styles.filter}>
          <i>&#34;Filtered by: {titleFilter}&#34;</i>
        </p>
      )}
      {tagFilter !== "" && (
        <p className={styles.filter}>
          <i>&#34;Filtered by: {tagFilter}&#34;</i>
        </p>
      )}

      {posts.length === 0 && tagFilter === "" && titleFilter === "" ? (
        <>
          <InfiniteScroll
            dataLength={!isLoading ? data.pages.length : newPosts.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={hasNextPage && newPosts.length <= 3}
            loader={<LoadingSpinner />}
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
          {hasNextPage && newPosts.length > 3 ? (
            <button className={styles.loadMore} onClick={() => fetchNextPage()}>
              Load more
            </button>
          ) : (
            ""
          )}
          {!isLoading && newPosts.length > 3 ? (
            <button className={styles.loadMore} disabled>
              Loading
            </button>
          ) : (
            ""
          )}
          {!hasNextPage && (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          )}
        </>
      ) : posts.length === 0 && (tagFilter !== "" || titleFilter !== "") ? (
        <p className={styles.postNotFound}>
          Sorry! We couldn&#39;t find any post with the filter selected.
        </p>
      ) : (
        newPosts.map((post) => {
          return (
            <React.Fragment key={post.slug}>
              <p className={styles.postFound}>
                <RiFilePaperFill size="1.5em" /> <span>{newPosts.length}</span>{" "}
                posts found
              </p>
              <div className={styles.card}>
                <PostCard post={post} />
              </div>
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}
