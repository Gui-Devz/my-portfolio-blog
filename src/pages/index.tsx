import type { NextPage } from "next";
import Head from "next/head";

import { Technologies } from "../components/Technologies";
import Presentation from "../components/Presentation";
import { HeaderPortfolio } from "../components/HeaderPortfolio";
import { MyProjects } from "../components/MyProjects";
import { MyResume } from "../components/MyResume";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";

import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import { ScrollUp } from "../components/ScrollUp";

const Home: NextPage = () => {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      setLastKnownScrollPosition(window.scrollY);
    });
  });
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Portfolio - Guilherme</title>
        </Head>
        <HeaderPortfolio />
        <Presentation />
        <Technologies />
        <MyProjects />
        <MyResume />
        <ContactMe />
        <Footer />
        {lastKnownScrollPosition >= 200 && <ScrollUp />}
      </div>
    </>
  );
};

export default Home;
