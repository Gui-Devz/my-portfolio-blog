import Image from "next/image";
import heroImg from "../../../assets/hero-test.jpg";

import styles from "./post-card.module.scss";

export function PostCard() {
  return (
    <div className={styles.postCard}>
      <article>
        <time>12 de março de 2021</time>
        <h1>Creating a Monorepo with Lerna &amp; Yarn Workspaces</h1>
        <div className={styles.author}>
          <p>
            author: <address>Guilherme Zagari</address>
          </p>
        </div>
        <div className={styles.heroImg}>
          <Image src={heroImg} alt="hero-img" />
        </div>
        <div className={styles.excerpt}>
          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test and release process.
          </p>
        </div>
      </article>
    </div>
  );
}
