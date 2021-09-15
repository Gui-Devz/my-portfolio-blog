import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

import styles from "./social.module.scss";

export function Social() {
  return (
    <div className={styles.socialWrapper}>
      <Link href="https://www.linkedin.com/in/guilherme-batalha-2b913448/">
        <a target="_blank" rel="noopener">
          <AiFillLinkedin fontSize="2em" />
        </a>
      </Link>
      <Link href="https://www.github.com/Gui-Devz">
        <a target="_blank" rel="noopener">
          <AiOutlineGithub fontSize="2em" />
        </a>
      </Link>
      <Link href="https://twitter.com/Batalha97">
        <a target="_blank" rel="noopener">
          <FiTwitter fontSize="2em" />
        </a>
      </Link>
    </div>
  );
}
