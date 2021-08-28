import Image from "next/image";
import Link from "next/link";

import { GoThreeBars } from "react-icons/go";
import logoImg from "../../assets/logo.svg";

import styles from "./header.module.scss";

export function HeaderPortfolio() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.headerContainer}>
        <Link href="#initial">
          <a>
            <Image src={logoImg} alt="Logo image" />
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <Link href="#contactme">
            <a>Contact me</a>
          </Link>
        </nav>
        <button>
          <GoThreeBars color="white" size="2em" />
        </button>
      </div>
    </header>
  );
}
