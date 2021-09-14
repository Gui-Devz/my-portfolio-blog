import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { BiStopwatch } from "react-icons/bi";

import styles from "./post-debrief.module.scss";
import { useEffect, useState } from "react";

interface PostDebriefProps {
  tags: string[];
  title: string;
  heroImg: string;
  updatedAt: string;
  author: string;
}

export function PostDebrief({
  tags,
  title,
  heroImg,
  updatedAt,
  author,
}: PostDebriefProps) {
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    const words = document.body.innerText;
    setReadTime(Math.ceil(words.length / 1000));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags && tags.map((tag) => <h2 key={tag}>{tag}</h2>)}
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.image}>
        <Image src={heroImg} layout="fill" alt="banner image" />
      </div>
      <div className={styles.infoPost}>
        <p className={styles.updateDate}>
          Last update: <span>{updatedAt}</span>
        </p>
        <p className={styles.author}>
          by <span>{author}</span>
        </p>
        <p className={styles.readTime}>
          <BiStopwatch fontSize="1.3rem" /> <span>{readTime} min read</span>
        </p>
      </div>
    </div>
  );
}
