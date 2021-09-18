import Link from "next/link";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import styles from "./social.module.scss";

export function Social() {
  return (
    <div className={styles.socialWrapper}>
      <Link href="https://www.linkedin.com/in/guilherme-batalha-2b913448/">
        <a target="_blank" rel="noopener">
          <FaLinkedin fontSize="2em" />
        </a>
      </Link>
      <Link href="https://www.github.com/Gui-Devz">
        <a target="_blank" rel="noopener">
          <FaGithub fontSize="2em" />
        </a>
      </Link>
      <Link href="https://twitter.com/Batalha97">
        <a target="_blank" rel="noopener">
          <FaTwitter fontSize="2em" />
        </a>
      </Link>
    </div>
  );
}
