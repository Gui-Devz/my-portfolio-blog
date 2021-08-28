import type { NextPage } from "next";
import Head from "next/head";

import { Technologies } from "../components/Technologies";
import Presentation from "../components/Presentation";
import { HeaderPortfolio } from "../components/HeaderPortfolio";
import { MyProjects } from "../components/MyProjects";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    // Do something with the scroll position
    console.log(scrollPos);
    if (scrollPos === 200) {
      window.scrollTo(0, 0);
    }
  }

  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
  return (
    <>
      <div id="initial" className={styles.main}>
        <Head>
          <title>Portfolio - Guilherme</title>
        </Head>
        <HeaderPortfolio />
        <Presentation />
        <Technologies />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
