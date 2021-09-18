import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsCodeSlash } from "@react-icons/all-files/bs/BsCodeSlash";
import { BsWifi } from "@react-icons/all-files/bs/BsWifi";

import styles from "./project-card.module.scss";

type Project = {
  title: string;
  content: string;
  codeLink: string;
  liveDemoLink: string;
  imageURL: string;
  imageDescription: string;
};

interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.image}>
        <Image
          src={`${project.imageURL}?w=700&h=500`}
          alt={project.imageDescription}
          layout="fill"
        />
      </div>

      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.content}</p>
        <div className={styles.buttonWrapper}>
          {project.codeLink.length > 1 ? (
            <div className={styles.button}>
              <Link href="#">
                <a className="code" target="_blank">
                  See code
                  <span>
                    <BsCodeSlash />
                  </span>
                </a>
              </Link>
            </div>
          ) : (
            <div className={styles.buttonDisabled}>
              <p>
                See code
                <span>
                  <BsCodeSlash />
                </span>
              </p>
            </div>
          )}
          {project.liveDemoLink.length > 1 ? (
            <div className={styles.button}>
              <Link href="#">
                <a className="live" target="_blank">
                  Live demo
                  <span>
                    <BsWifi />
                  </span>
                </a>
              </Link>
            </div>
          ) : (
            <div className={styles.buttonDisabled}>
              <p>
                Live demo
                <span>
                  <BsWifi />
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
