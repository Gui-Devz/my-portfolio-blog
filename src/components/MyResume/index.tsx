import Link from "next/link";
import { IoIosPaper } from "react-icons/io";

import styles from "./myresume.module.scss";

export function MyResume() {
  return (
    <>
      <h2 id="resume" className={styles.H2}>
        Resume
      </h2>
      <section className={styles.resume}>
        <p>Take a look at my resume:</p>
        <div className={styles.content}>
          <div className={styles.btn}>
            <Link href="https://drive.google.com/file/d/13giT55d8fXyztXdGEJ8cUeG_z09drIFx/view">
              <a target="_blank">
                My resume
                <IoIosPaper />
              </a>
            </Link>
          </div>
          <span>
            <p>
              **Please don&apos;t worry you won&apos;t be downloading anything.
            </p>
            <p>The file is hosted in google drive.</p>
          </span>
        </div>
      </section>
    </>
  );
}
