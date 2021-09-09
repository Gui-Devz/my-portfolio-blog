import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";

import { contentfulClient } from "../../../services/contentful";

import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FiTwitter, FiSearch } from "react-icons/fi";

import logoImg from "../../../assets/logo.svg";

import styles from "./header.module.scss";
import { api } from "../../../services/api";

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
  const [tags, setTags] = useState<TagsValue[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [title, setTitle] = useState("");

  function handleSelectedTag(event) {
    setSelectedTag(event.target.value);
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    if (title === "") {
      setPosts([]);
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
    }

    getPostsByTag();
  }, [selectedTag, setPosts, setTagFilter]);

  return (
    <header>
      <div className={styles.headerContainer}>
        <Image src={logoImg} alt="Logo image" />
        <div className={styles.filtersAndLinks}>
          <div className={styles.filters}>
            <form onSubmit={(e) => handleSubmitForm(e)}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Search by title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit" className={styles.searchIcon}>
                  <FiSearch />
                </button>
              </div>
            </form>
          </div>
          <Link href="/">
            <a target="_blank">My portfolio</a>
          </Link>
        </div>
        <div className={styles.socialWrapper}>
          <Link href="https://www.linkedin.com/in/guilherme-batalha-2b913448/">
            <a target="_blank">
              <AiFillLinkedin fontSize="2em" />
            </a>
          </Link>
          <Link href="https://www.github.com/Gui-Devz">
            <a target="_blank">
              <AiOutlineGithub fontSize="2em" />
            </a>
          </Link>
          <Link href="https://twitter.com/Batalha97">
            <a target="_blank">
              <FiTwitter fontSize="2em" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.selectTags}>
        <label htmlFor="tags">Filter by tags:</label>
        <select
          name="tags"
          id="tags"
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
      <hr className={styles.line} />
    </header>
  );
}
