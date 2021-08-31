import Link from "next/link";

import {
  AiFillLinkedin,
  AiOutlineCloseCircle,
  AiOutlineGithub,
} from "react-icons/ai";

import styles from "./mobile-menu.module.scss";
import { FiTwitter } from "react-icons/fi";

type ModalDataProps = {
  toggleModal: () => void;
};

export function ModalMobileMenu({ toggleModal }: ModalDataProps) {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <Link href="/">
            <a onClick={() => toggleModal()}>Blog</a>
          </Link>
          <Link href="#projects">
            <a onClick={() => toggleModal()}>Projects</a>
          </Link>
          <Link href="#resume">
            <a onClick={() => toggleModal()}>Resume</a>
          </Link>
          <Link href="#contactme">
            <a onClick={() => toggleModal()}>Contact me</a>
          </Link>
        </nav>
        <div className={styles.socialWrapper}>
          <Link href="https://www.linkedin.com/in/guilherme-batalha-2b913448/">
            <a target="_blank">
              <AiFillLinkedin fontSize="3em" />
            </a>
          </Link>
          <Link href="https://www.github.com/Gui-Devz">
            <a target="_blank">
              <AiOutlineGithub fontSize="3em" />
            </a>
          </Link>
          <Link href="https://twitter.com/Batalha97">
            <a target="_blank">
              <FiTwitter fontSize="3em" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.btnClose}>
        <button onClick={() => toggleModal()}>
          <AiOutlineCloseCircle />
        </button>
      </div>
    </div>
  );
}
