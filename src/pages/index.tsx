import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { GoThreeBars } from "react-icons/go";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

import styles from "./home.module.scss";

import logoImg from "../assets/logo.svg";
import heroImg from "../assets/guy-coding.png";
import projectImg from "../assets/foodfy.png";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Portfolio - Guilherme</title>
        </Head>
        <header className={styles.navHeader}>
          <div className={styles.headerContainer}>
            <Link href="/">
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
        {/* <hr className={styles.Hr} /> */}
        {/* presentation */}
        <section className={styles.presentation}>
          <div className={styles.presentationHeader}>
            <div className={styles.presentationText}>
              <h1>I&apos;m a web developer</h1>
              <div className={styles.introQA}>
                <span>Optimized.</span>
                <span>Clean.</span>
                <span>Readable code.</span>
              </div>
            </div>
            <Image src={heroImg} alt="guy coding"></Image>
          </div>
          <div className={styles.presentationContent}>
            <p>
              Hi! my name is Guilherme, I&apos;m a Jr. dev, I&apos;m always
              trying to create and learn something new through coding.
            </p>
          </div>
        </section>
        <h2 className={styles.H2}>Technologies I&apos;m used to</h2>
        <section className={styles.technologies}>
          <div className={styles.techTools}>
            <div>
              <SiJavascript color="#D3C20C" fontSize="4em" />
              <span>JavaScript</span>
            </div>
            <div>
              <FaReact color="#3B8BB1" fontSize="4em" />
              <span>ReactJs</span>
            </div>
            <div>
              <FaNode color="green" fontSize="4em" />
              <span>Node.js</span>
            </div>
            <div>
              <SiPostgresql color="#375185" fontSize="4em" />
              <span>PostgreSQL</span>
            </div>
            <div>
              <SiHtml5 color="#A54513" fontSize="4em" />
              <span>HTML5</span>
            </div>
            <div>
              <FaCss3 color="#3B8BB1" fontSize="4em" />
              <span>CSS3</span>
            </div>
          </div>
        </section>
        <h2 id="projects" className={styles.H2}>
          My projects
        </h2>
        <section className={styles.projects}>
          <div className={styles.projectsWrapper}>
            <div className={styles.projectCard}>
              <Image src={projectImg} alt="project print screen" />

              <div className={styles.cardContent}>
                <h3>Foody</h3>
                <p>
                  Web app where you can post and search recipes. Have a complete
                  CRUD system where it&apos;s possible to manage users accounts,
                  user&apos;s recipes and chefs.
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
            <div className={styles.projectCard}>
              <Image src={projectImg} alt="project print screen" />

              <div className={styles.cardContent}>
                <h3>Foody</h3>
                <p>
                  Web app where you can post and search recipes. Have a complete
                  CRUD system where it&apos;s possible to manage users accounts,
                  user&apos;s recipes and chefs.
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
          </div>
        </section>
        <h2 id="contactme" className={styles.H2}>
          Let&apos;s work together
        </h2>
        <section className={styles.contactMe}>
          <form>
            <div>
              <label htmlFor="name">Name*:</label>
              <input name="name" type="text" placeholder="your name" />
            </div>
            <div>
              <label htmlFor="email">Email*:</label>
              <input name="email" type="text" placeholder="your email" />
            </div>
            <div className={styles.textArea}>
              <label htmlFor="message">Message*:</label>
              <textarea
                name="message"
                placeholder="enter here your message"
                cols={40}
                rows={5}
              />
            </div>

            <button type="submit">
              Send
              <span>
                <FiSend />
              </span>
            </button>
          </form>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div>
              <p>
                <MdCopyright /> 2021 Guilherme Zagari
              </p>
            </div>
            <div>
              <span>Follow me</span>
              <div className={styles.socialWrapper}>
                <AiFillLinkedin fontSize="2em" />
                <AiOutlineGithub fontSize="2em" />
                <FiTwitter fontSize="2em" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
