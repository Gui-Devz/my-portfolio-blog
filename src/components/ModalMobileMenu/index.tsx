import Link from "next/link";

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";

import styles from "./mobile-menu.module.scss";

type ModalDataProps = {
  toggleModal: () => void;
};

export function ModalMobileMenu({ toggleModal }: ModalDataProps) {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <Link href="/blog">
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
              <FaLinkedin fontSize="3em" />
            </a>
          </Link>
          <Link href="https://www.github.com/Gui-Devz">
            <a target="_blank">
              <FaGithub fontSize="3em" />
            </a>
          </Link>
          <Link href="https://twitter.com/Batalha97">
            <a target="_blank">
              <FaTwitter fontSize="3em" />
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
