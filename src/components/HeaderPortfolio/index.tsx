import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";

import { GoThreeBars } from "react-icons/go";
import logoImg from "../../assets/logo.svg";
import { ModalMobileMenu } from "../ModalMobileMenu";

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
            <Link href="#contactme">
              <a>Contact me</a>
            </Link>
          </nav>
          <button onClick={() => toggleModal()} className={styles.mobileMenu}>
            <GoThreeBars color="white" size="2em" />
          </button>
        </div>
      </header>
    </>
  );
}
