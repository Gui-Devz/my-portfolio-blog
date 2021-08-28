import { Social } from "../Social";

import { MdCopyright } from "react-icons/md";

import styles from "./footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <p>
            <MdCopyright /> 2021 Guilherme Zagari
          </p>
        </div>
        <div>
          <span>Follow me</span>
          <Social />
        </div>
      </div>
    </footer>
  );
}
