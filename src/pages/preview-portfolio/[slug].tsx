import type { GetServerSideProps } from "next";
import Head from "next/head";

import { contentfulClient, previewClient } from "../../services/contentful";
import { ContentfulCollection } from "contentful";

import { Technologies } from "../../components/Technologies";
import Presentation from "../../components/Presentation";
import { HeaderPortfolio } from "../../components/HeaderPortfolio";
import { MyProjects } from "../../components/MyProjects";
import { MyResume } from "../../components/MyResume";
import { ContactMe } from "../../components/ContactMe";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "../../components/ScrollUp";

import styles from "../home.module.scss";

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

export default function PortfolioPreview({ data }: HomeProps) {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Preview - portfolio</title>
        </Head>

        <MyProjects projects={data.projects} />
        <MyResume resumes={data.myResumes} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const responseProjects: ContentfulCollection<any> =
    await previewClient.getEntries({
      content_type: "projects",
      "fields.slug[match]": `"${slug}""`,
    });

  const responseMyResumes: ContentfulCollection<any> =
    await contentfulClient.getEntries({
      content_type: "resume",
    });

  const projectsItems = responseProjects.items[0];

  const projects = [
    {
      title: projectsItems.fields.title,
      content: projectsItems.fields.content,
      codeLink: projectsItems.fields.codeLink
        ? projectsItems.fields.codeLink
        : "",
      liveDemoLink: projectsItems.fields.liveDemoLink
        ? projectsItems.fields.liveDemoLink
        : "",
      imageURL: "https:" + projectsItems.fields.projectImage.fields.file.url,
      imageDescription: projectsItems.fields.projectImage.fields.description,
    },
  ];

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
