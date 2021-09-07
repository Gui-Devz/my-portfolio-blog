import Image from "next/image";

import { BsCodeSlash } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";

import projectImg from "../../assets/foodfy.png";

import styles from "./project-card.module.scss";

export function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <Image src={projectImg} alt="App about food" />

      <div className={styles.cardContent}>
        <h3>Foody</h3>
        <p>
          Web app where you can post and search recipes. Have a complete CRUD
          system where it&apos;s possible to manage users accounts, user&apos;s
          recipes and chefs.
        </p>
        <div className={styles.buttonWrapper}>
          <div>
            <button>
              See code
              <span>
                <BsCodeSlash />
              </span>
            </button>
          </div>
          <div>
            <button>
              Live demo
              <span>
                <BsWifi />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
