import { Social } from "../Social";

import styles from "./footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.follow}>
          <span>Follow me</span>
          <Social />
        </div>
        <div className={styles.love}>
          <p>Made with &#9825;</p>
        </div>
      </div>
      <div className={styles.copy}>
        <p className={styles.copyRight}>
          <span>&copy; 2021 Guilherme Zagari</span>
        </p>
      </div>
    </footer>
  );
}
