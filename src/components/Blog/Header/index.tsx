import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/dist/client/router";

import { contentfulClient } from "../../../services/contentful";

import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";

import logoImg from "../../../assets/logo.svg";

import styles from "./header.module.scss";
import { api } from "../../../services/api";

import { Social } from "../Social";

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
  };
};

type TagsValue = {
  name: string;
  id: string;
};

interface HeaderProps {
  setPosts: Dispatch<SetStateAction<Post[]>>;
  setTitleFilter: Dispatch<SetStateAction<string>>;
  setTagFilter: Dispatch<SetStateAction<string>>;
}

export function Header({
  setPosts,
  setTitleFilter,
  setTagFilter,
}: HeaderProps) {
  const router = useRouter();
  const [tags, setTags] = useState<TagsValue[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [title, setTitle] = useState("");

  function handleClickOnLogo() {
    setTitleFilter("");
    setTitle("");
    setTagFilter("");
    setSelectedTag("");
    setPosts([]);
  }

  function handleSelectedTag(event) {
    setSelectedTag(event.target.value);
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    if (title === "") {
      setPosts([]);
      setTitleFilter("");
      setTagFilter("");
      setSelectedTag("");
      return;
    }
    const response: ResponseValue = await api.get("posts", {
      params: {
        nextGroup: 0,
        filterByTitle: title,
      },
    });

    const posts = response.data.posts;

    setPosts(posts);
    setTagFilter("");
    setSelectedTag("");
    setTitleFilter(title);
  }

  useEffect(() => {
    async function getAllTags() {
      const response = await contentfulClient.getTags();

      const allTags = response.items.map((tag) => {
        return {
          name: tag.name,
          id: tag.sys.id,
        };
      });

      setTags(allTags);
    }
    getAllTags();
  }, []);

  useEffect(() => {
    if (selectedTag === "") {
      setPosts([]);
      setTagFilter("");
      return;
    }
    async function getPostsByTag() {
      const response: ResponseValue = await api.get("posts", {
        params: {
          nextGroup: 0,
          filterByTag: selectedTag !== "" ? selectedTag : undefined,
        },
      });

      const posts = response.data.posts;

      setPosts(posts);
      setTitleFilter("");
      setTagFilter(selectedTag);
    }

    getPostsByTag();
  }, [selectedTag, setPosts, setTitleFilter, setTagFilter]);

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.links}>
          <div className={styles.logo}>
            <Link href="/blog">
              <a onClick={() => handleClickOnLogo()}>
                <Image src={logoImg} alt="Logo image" />
                <span>
                  <b>.Blog</b>
                </span>
              </a>
            </Link>
          </div>
          {router.asPath == "/blog" && (
            <div className={styles.homeLink}>
              <Link href="/blog">
                <a onClick={() => handleClickOnLogo()}>Home</a>
              </Link>
            </div>
          )}
          <div className={styles.linksSocial}>
            <div className={styles.portfolio}>
              <Link href="/">
                <a target="_blank">Check out my portfolio</a>
              </Link>
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>
        <div className={styles.searchBar}>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className={styles.searchInput}>
              <input
                type="text"
                value={title}
                placeholder="Search by title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button type="submit" className={styles.searchIcon}>
                <FiSearch />
              </button>
            </div>
          </form>
        </div>
        <div className={styles.selectTag}>
          <label htmlFor="tags">Filter by tags:</label>
          <select
            name="tags"
            id="tags"
            value={selectedTag}
            onChange={(e) => {
              handleSelectedTag(e);
            }}
          >
            <option value="">-</option>
            {tags.length > 0 &&
              tags.map((tag) => {
                return (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <hr className={styles.line} />
    </header>
  );
}
