import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

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
            <Link href="/blog">
              <a target="_blank">Blog</a>
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
                <FaLinkedin fontSize="2em" />
              </a>
            </Link>
            <Link href="https://www.github.com/Gui-Devz">
              <a target="_blank">
                <FaGithub fontSize="2em" />
              </a>
            </Link>
            <Link href="https://twitter.com/Batalha97">
              <a target="_blank">
                <FaTwitter fontSize="2em" />
              </a>
            </Link>
          </div>
          <button onClick={() => toggleModal()} className={styles.mobileMenu}>
            <GoThreeBars fontSize="2em" />
          </button>
        </div>
      </header>
    </>
  );
}
