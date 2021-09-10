import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Technologies } from "../components/Technologies";
import Presentation from "../components/Presentation";
import { HeaderPortfolio } from "../components/HeaderPortfolio";
import { MyProjects } from "../components/MyProjects";
import { MyResume } from "../components/MyResume";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";
import { ScrollUp } from "../components/ScrollUp";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Portfolio - Software developer</title>
        </Head>
        <HeaderPortfolio />
        <Presentation />
        <Technologies />
        <MyProjects />
        <MyResume />
        <ContactMe />
        <Footer />
        <ScrollUp />
      </div>
    </>
  );
};

export default Home;
