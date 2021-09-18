import Link from "next/link";
import { IoIosPaper } from "@react-icons/all-files/io/IoIosPaper";

import styles from "./myresume.module.scss";

interface MyResumeProps {
  resumeLink: string;
}

export function MyResume({ resumeLink }: MyResumeProps) {
  return (
    <>
      <h2 id="resume" className={styles.H2}>
        Resume
      </h2>
      <section className={styles.resume}>
        <h3 className={styles.resumeIntro}>Take a look at my resume:</h3>

        <div className={styles.content}>
          <div className={styles.btn}>
            <Link href={resumeLink}>
              <a target="_blank">
                My resume
                <IoIosPaper />
              </a>
            </Link>
          </div>
          <div className={styles.warning}>
            <p>
              **Please don&apos;t worry you won&apos;t be downloading anything.
            </p>
            <p>The file is hosted in google drive.</p>
          </div>
        </div>
      </section>
    </>
  );
}
