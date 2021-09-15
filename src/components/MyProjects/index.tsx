import { ProjectCard } from "../ProjectCard";

import styles from "./my-projects.module.scss";

type Project = {
  title: string;
  content: string;
  codeLink: string;
  liveDemoLink: string;
  imageURL: string;
  imageDescription: string;
};

interface MyProjectsProps {
  projects: Project[];
}

export function MyProjects({ projects }: MyProjectsProps) {
  return (
    <>
      <h2 id="projects" className={styles.H2}>
        My projects
      </h2>
      <section className={styles.projects}>
        <div className={styles.projectsWrapper}>
          {projects &&
            projects.map((project) => {
              return (
                <div key={project.title} className={styles.card}>
                  <ProjectCard project={project} />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
