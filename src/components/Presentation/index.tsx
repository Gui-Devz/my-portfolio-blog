import { NextPage } from "next";
import Image from "next/image";
import heroImg from "../../assets/guy-coding.png";

import styles from "./presentation.module.scss";

const Presentation: NextPage = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.presentationHeader}>
        <div className={styles.presentationContainer}>
          <div className={styles.presentationText}>
            <h1>I&apos;m a web developer</h1>
            <div className={styles.introQA}>
              <span>Optimized.</span>
              <span>Clean.</span>
              <span>Readable code.</span>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image src={heroImg} alt="guy coding" />
          </div>
        </div>
      </div>
      <div className={styles.presentationContent}>
        <p>
          Hey there! my name is Guilherme, I&apos;m a fullstack dev, I&apos;m always
          trying to create and learn something new through coding.
        </p>
      </div>
    </section>
  );
};

export default Presentation;
