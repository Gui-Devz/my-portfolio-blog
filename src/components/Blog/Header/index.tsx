import Image from "next/image";
import Link from "next/link";

import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FiTwitter, FiSearch } from "react-icons/fi";

import logoImg from "../../../assets/logo.svg";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Image src={logoImg} alt="Logo image" />
        <div className={styles.filtersAndLinks}>
          <div className={styles.filters}>
            <form>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Search by title" />
                <button type="submit" className={styles.searchIcon}>
                  <FiSearch />
                </button>
              </div>
            </form>
          </div>
          <Link href="/">
            <a target="_blank">My portfolio</a>
          </Link>
        </div>
        <div className={styles.socialWrapper}>
          <Link href="https://www.linkedin.com/in/guilherme-batalha-2b913448/">
            <a target="_blank">
              <AiFillLinkedin fontSize="2em" />
            </a>
          </Link>
          <Link href="https://www.github.com/Gui-Devz">
            <a target="_blank">
              <AiOutlineGithub fontSize="2em" />
            </a>
          </Link>
          <Link href="https://twitter.com/Batalha97">
            <a target="_blank">
              <FiTwitter fontSize="2em" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.selectTags}>
        <label htmlFor="tags">Filter by tags:</label>
        <select name="tags" id="tags">
          <option value="">-</option>
          <option value="react">React</option>
          <option value="node.js">Next.js</option>
          <option value="node.js">Jest</option>
          <option value="node.js">Node.js</option>
          <option value="node.js">Databases</option>
          <option value="node.js">HTML</option>
          <option value="node.js">CSS</option>
        </select>
      </div>
      <hr className={styles.line} />
    </header>
  );
}
