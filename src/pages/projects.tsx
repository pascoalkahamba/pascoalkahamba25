import { Box, Text, rem, createStyles } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import MainTitle from "../components/mainTitle";
import GlobalTitle from "../components/globalTitle";
import { nameDeveloperAtom } from "../../atoms";
import { useAtom } from "jotai";
import ProjectCarousel from "../components/projectCarousel";
import Alldata from "../../contents/alldata";
import translations from "../../locales/en/useExternalLink";
import useMedia from "../hooks/useMedia";

const useStyles = createStyles((theme) => ({
  contanier: {
    fontSize: theme.spacing.lg,

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.spacing.md,
    },
  },
  projects: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(30),
  },

  description: {
    width: rem(750),
    margin: "0 auto",
    whiteSpace: "normal",
  },
}));

const {
  projectIspbGitihub,
  projectIspbvercel,
  projectBeautySalonGithub,
  projectBeautySalonBackend,
  ispbBackendLink,
  postNewsBackendLink,
  projectPostNewsGithub,
  projectPostNewsvercel,
  projectBeautySalonvercel,
} = translations;

export default function Projects() {
  const { classes } = useStyles();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("projects");
  const bigScreen = useMedia("(min-width:80rem)");
  const {
    ispbImages,
    beautySalonImages,
    postNewsImages,
    postNewsTechnologies,
    ispbTechnologies,
    showDateBuiltProject,
  } = Alldata();

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <Box component="section" className={classes.contanier}>
        <div className={`${bigScreen && classes.description}`}>
          <MainTitle
            title={translate("page-title")}
            dataAos="zoom-in"
            dataAosDuration={1200}
          />
          <Text mt="sm" data-aos="fade-right" data-aos-duration="1200">
            {translate("about-project")}
          </Text>
        </div>
        <GlobalTitle title={translate("page-title")} width={300} />
        <div className={classes.projects}>
          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("april", 2024, 4, 22)}
            vercelLink={projectIspbvercel}
            githubLink={projectIspbGitihub}
            backendLink={ispbBackendLink}
            name={translate("ispb-blog")}
            status={translate("status")}
            technologies={ispbTechnologies}
            images={ispbImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("november", 2024, 11, 12)}
            vercelLink={projectBeautySalonvercel}
            githubLink={projectBeautySalonGithub}
            backendLink={projectBeautySalonBackend}
            name={translate("beauty-salon")}
            status={translate("status")}
            technologies={ispbTechnologies}
            images={beautySalonImages}
            dataAos="fade-left"
          />

          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("september", 2025, 9, 12)}
            vercelLink={projectPostNewsvercel}
            backendLink={postNewsBackendLink}
            githubLink={projectPostNewsGithub}
            name={translate("post-news")}
            status={translate("statusInProgress")}
            technologies={postNewsTechnologies}
            images={postNewsImages}
            dataAos="fade-left"
          />
          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("march", 2024, 3, 22)}
            vercelLink={projectIspbvercel}
            githubLink={projectIspbGitihub}
            backendLink={ispbBackendLink}
            name={translate("ispb-blog-admin")}
            status={translate("status")}
            technologies={ispbTechnologies}
            images={ispbImages}
            dataAos="fade-right"
          />
        </div>
      </Box>
    </>
  );
}
