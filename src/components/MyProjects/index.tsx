import { ProjectCard } from "../ProjectCard";

import styles from "./my-projects.module.scss";

export function MyProjects() {
  return (
    <>
      <h2 id="projects" className={styles.H2}>
        My projects
      </h2>
      <section className={styles.projects}>
        <div className={styles.projectsWrapper}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}