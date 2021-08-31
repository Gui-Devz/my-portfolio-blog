import { SiJavascript, SiPostgresql, SiJest } from "react-icons/si";
import { FaReact, FaNode, FaCss3 } from "react-icons/fa";

import styles from "./technologies.module.scss";

export function Technologies() {
  return (
    <>
      <h2 className={styles.H2}>Technologies I&apos;m used to</h2>
      <section className={styles.technologies}>
        <div className={styles.techTools}>
          <div>
            <SiJavascript color="#D3C20C" fontSize="4em" />
            <span>JavaScript</span>
          </div>
          <div>
            <FaReact color="#3B8BB1" fontSize="4em" />
            <span>ReactJs</span>
          </div>
          <div>
            <FaNode color="green" fontSize="4em" />
            <span>Node.js</span>
          </div>
          <div>
            <SiJest color="#A54513" fontSize="4em" />
            <span>Jest</span>
          </div>
          <div>
            <SiPostgresql color="#375185" fontSize="4em" />
            <span>PostgreSQL</span>
          </div>
          <div>
            <FaCss3 color="#3B8BB1" fontSize="4em" />
            <span>CSS3/SASS</span>
          </div>
        </div>
      </section>
    </>
  );
}
