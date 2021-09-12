import Link from "next/link";
import Image from "next/image";

import logoImg from "../../../../assets/logo.svg";
import styles from "./header-post.module.scss";
import { Social } from "../../Social";

export function HeaderPost() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <Link href="/blog">
            <a>
              <Image src={logoImg} alt="Logo image" />
              <span>
                <b>.Blog</b>
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.home}>
          <Link href="/blog">
            <a>Home</a>
          </Link>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <p>Follow me:</p>
        <div className={styles.social}>
          <Social />
        </div>
      </div>
    </header>
  );
}
