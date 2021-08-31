import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

import { GoThreeBars } from "react-icons/go";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

import { ModalMobileMenu } from "../ModalMobileMenu";

import logoImg from "../../assets/logo.svg";

import styles from "./header.module.scss";

Modal.setAppElement("#__next");

export function HeaderPortfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <header className={styles.navHeader}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          contentLabel="Example Modal"
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <ModalMobileMenu toggleModal={toggleModal} />
        </Modal>

        <div className={styles.headerContainer}>
          <Image src={logoImg} alt="Logo image" />
          <nav>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
            <Link href="#resume">
              <a>Resume</a>
            </Link>
            <Link href="#contactme">
              <a>Contact me</a>
            </Link>
          </nav>
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
          <button onClick={() => toggleModal()} className={styles.mobileMenu}>
            <GoThreeBars color="white" size="2em" />
          </button>
        </div>
      </header>
    </>
  );
}
