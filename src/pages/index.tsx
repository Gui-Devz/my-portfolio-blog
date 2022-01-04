import type { GetStaticProps } from "next";
import Head from "next/head";

import { contentfulClient } from "../services/contentful";
import { ContentfulCollection } from "contentful";

import { Technologies } from "../components/Technologies";
import Presentation from "../components/Presentation";
import { HeaderPortfolio } from "../components/HeaderPortfolio";
import { MyProjects } from "../components/MyProjects";
import { MyResume } from "../components/MyResume";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";
import { ScrollUp } from "../components/ScrollUp";

import styles from "./home.module.scss";

type EntryResume = {
  language: string;
  link: string;
};

type Project = {
  title: string;
  content: string;
  codeLink: string;
  liveDemoLink: string;
  imageURL: string;
  imageDescription: string;
};

interface HomeProps {
  data: {
    projects: Project[];
    myResumes: EntryResume[];
  };
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Portfolio - Software developer</title>
        </Head>
        <HeaderPortfolio />
        <Presentation />
        <Technologies />
        <MyProjects projects={data.projects} />
        <MyResume resumes={data.myResumes} />
        <ContactMe />
        <Footer />
        <ScrollUp />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const responseProjects: ContentfulCollection<any> =
    await contentfulClient.getEntries({
      content_type: "projects",
      order: "sys.createdAt",
    });

  const responseMyResumes: ContentfulCollection<any> =
    await contentfulClient.getEntries({
      content_type: "resume",
    });

  const projects = responseProjects.items.map((project) => {
    return {
      title: project.fields.title,
      content: project.fields.content,
      codeLink: project.fields.codeLink ? project.fields.codeLink : "",
      liveDemoLink: project.fields.liveDemoLink
        ? project.fields.liveDemoLink
        : "",
      imageURL: "https:" + project.fields.projectImage.fields.file.url,
      imageDescription: project.fields.projectImage.fields.description,
    };
  });

  const myResumes = responseMyResumes.items.map((resume) => {
    return {
      language: resume.fields.language,
      link: resume.fields.resumeLink,
    };
  });

  return {
    props: {
      data: { projects, myResumes },
    },
  };
};
