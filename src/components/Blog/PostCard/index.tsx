import Link from "next/link";

import Image from "next/image";

import styles from "./post-card.module.scss";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

type Post = {
  slug: string;
  title: string;
  author: string;
  heroImgURL: string;
  publishDate: string;
  excerpt: string;
};

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const router = useRouter();

  const [year, setYear] = useState(0);

  useEffect(() => {
    const date = new Date();

    setYear(date.getFullYear());
  }, []);

  return (
    <div className={styles.postCard}>
      <Link href={`${router.asPath}/${post.slug}`}>
        <a>
          <article>
            <time dateTime={`${year}`}>{post.publishDate}</time>
            <h1>{post.title}</h1>
            <div className={styles.author}>
              <p>Written by:</p>
              <address>{post.author}</address>
            </div>
            <div className={styles.heroImg}>
              <Image
                src={`${post.heroImgURL}?w=800&h=800`}
                alt="Hero image"
                layout="fill"
              />
            </div>
            <div className={styles.excerpt}>
              <h2>{post.excerpt}</h2>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
}
