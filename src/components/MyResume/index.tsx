import Link from "next/link";
import { useState } from "react";
import { IoIosPaper } from "@react-icons/all-files/io/IoIosPaper";

import styles from "./myresume.module.scss";

type EntryResume = {
  language: string;
  link: string;
};

interface MyResumeProps {
  resumes: EntryResume[];
}

export function MyResume({ resumes }: MyResumeProps) {
  const [link, setLink] = useState(resumes[0].link);
  return (
    <section className={styles.resumeSection}>
      <h2 id="resume" className={styles.H2}>
        Resume
      </h2>
      <div className={styles.resume}>
        <h3 className={styles.resumeIntro}>Take a look at my resume:</h3>

        <div className={styles.content}>
          <div className={styles.btn}>
            <Link href={link}>
              <a target="_blank">
                My resume
                <IoIosPaper />
              </a>
            </Link>
            <div>
              <label htmlFor="language">Select language version:</label>
              <select
                name="languages"
                id="language"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              >
                {resumes &&
                  resumes.map((resume) => {
                    return (
                      <option key={resume.language} value={resume.link}>
                        {resume.language}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className={styles.warning}>
            <p>
              **Please don&apos;t worry you won&apos;t be downloading anything.
            </p>
            <p>The file is hosted in google drive.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
