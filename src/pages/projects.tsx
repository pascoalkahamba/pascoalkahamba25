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
  projectfinancialmanagervercel,
  projectfinancialmanagergithub,
  projectIspbGitihub,
  projectIspbvercel,
  projectBeautySalonGithub,
  projectBeautySalonvercel,
  projectstudentstatisticsvercel,
  projectnewcrudvercel,
  projectfindfivegithub,
  projectfindfivevercel,
  projectstudentstatisticsgithub,
  projectnewcrudgithub,
} = translations;

export default function Projects() {
  const { classes } = useStyles();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("projects");
  const bigScreen = useMedia("(min-width:80rem)");
  const {
    financialImages,
    financialTechnologies,
    crudTechnologies,
    crudImages,
    ispbImages,
    beautySalonImages,
    ispbTechnologies,
    findFiveImages,
    showDateBuiltProject,
    findFiveTechnologies,
    studentStatisticsImages,
    studentStatisticsTechnologies,
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
            dateBuiltTheProject={showDateBuiltProject("april", 2025, 4, 22)}
            vercelLink={projectIspbvercel}
            githubLink={projectIspbGitihub}
            name={translate("ispb-blog")}
            status={translate("status")}
            technologies={ispbTechnologies}
            images={ispbImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("august", 2025, 8, 12)}
            vercelLink={projectBeautySalonvercel}
            githubLink={projectBeautySalonGithub}
            name={translate("beauty-salon")}
            status={translate("status")}
            technologies={ispbTechnologies}
            images={beautySalonImages}
            dataAos="fade-left"
          />
          <ProjectCarousel
            dateBuiltTheProject={showDateBuiltProject("april", 2025, 4, 22)}
            vercelLink={projectIspbvercel}
            githubLink={projectIspbGitihub}
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
