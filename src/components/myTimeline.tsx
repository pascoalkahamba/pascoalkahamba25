import { Timeline, Text, createStyles, Box, rem } from "@mantine/core";
import YearTitle from "./yearTitle";
import Link from "next/link";
import useTimeline from "../hooks/useTimeline";
import Alldata from "../../contents/alldata";
import { CalendarCheck } from "lucide-react";
import translations from "../../locales/en/useExternalLink";
import useTranslation from "next-translate/useTranslation";
import { ParseStyledText } from "./StyledText";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    width: rem(470),
    whiteSpace: "normal",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  date: {
    display: "flex",
    alignItems: "center",
    gap: rem(5),
  },
  links: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const {
  cursoEmVideoProgrammingLogic,
  frontendAndbackend,
  cursodejavascript,
  flexbox,
  cursodehtmlecss,
  projectfindfivevercel,
  projetocrud,
  typescript,
  frontEnd,
  materialuidocs,
  ispbLink,
  styledcomponentsdocs,
  projectnewcrudvercel,
  codeleapwebsite,
  projectfinancialmanagervercel,
  typescriptdocs,
  reactdoc,
  nextjsdocs,
  projectstudentstatisticsvercel,
  cursodereact,
  reactjs,
  html5,
  web,
  mantinedocs,
  jotaidocs,
  reactcontextapidocs,
  tailwindcssdocs,
  myportfolio,
  css3,
  github,
  cSharp,
  gridlayout,
} = translations;

export default function MyTimeline() {
  const { classes } = useStyles();
  const { allJourney } = Alldata();
  const myTimeline = useTimeline(allJourney);
  const { t: translate } = useTranslation("common");

  function addLinkOnText(textLink: string, description: string) {
    if (textLink === "ensinomedio") {
      return (
        <Text c="dimmed" size="sm">
          {translate("start-journey")} <strong>{translate("my-school")}</strong>{" "}
          {translate("start-journey2")}{" "}
        </Text>
      );
    }
    if (textLink === "finalensinomedio") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-school")} <strong> {translate("school")} </strong>
          {translate("more-about-school")}
          <strong> {translate("my-course-degree")}</strong>
        </Text>
      );
    }
    if (textLink === "styledcomponents") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-styled-componentsdocs")}{" "}
          <Link href={styledcomponentsdocs}>
            <a className={classes.links} target="_blank">
              {translate("styled-componentsdocs")}
            </a>
          </Link>
        </Text>
      );
    }
    if (textLink === "tailwindcss") {
      return (
        <Text c="dimmed" size="sm">
          <Link href={tailwindcssdocs}>
            <a className={classes.links} target="_blank">
              Tailwindcss
            </a>
          </Link>{" "}
          {translate("about-tailwindcss")}
        </Text>
      );
    }
    if (textLink === "mantine") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-mantine")}{" "}
          <Link href={mantinedocs}>
            <a className={classes.links} target="_blank">
              Matine
            </a>
          </Link>{" "}
          {translate("end-about-mantine")}
        </Text>
      );
    }
    if (textLink === "portfolio") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-my-portfolio")}{" "}
          <Link href={myportfolio}>
            <a className={classes.links} target="_blank">
              portfólio
            </a>
          </Link>{" "}
          {translate("end-about-my-portfolio")}
        </Text>
      );
    }
    if (textLink === "ispb") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-ispb-blog")}{" "}
          <Link href={ispbLink}>
            <a className={classes.links} target="_blank">
              ISPB
            </a>
          </Link>{" "}
          <ParseStyledText>{translate("end-about-ispb-blog")}</ParseStyledText>
        </Text>
      );
    }
    if (textLink === "jotai") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-jotai")}{" "}
          <Link href={reactcontextapidocs}>
            <a className={classes.links} target="_blank">
              Context-API
            </a>
          </Link>{" "}
          {translate("about-jotai")}{" "}
          <Link href={jotaidocs}>
            <a className={classes.links} target="_blank">
              Jotai
            </a>
          </Link>{" "}
          {translate("end-about-jotai")}
        </Text>
      );
    }
    if (textLink === "next") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-next")}{" "}
          <Link href={reactjs}>
            <a className={classes.links} target="_blank">
              react
            </a>
          </Link>{" "}
          {translate("about-next")}{" "}
          <Link href={nextjsdocs}>
            <a className={classes.links} target="_blank">
              {translate("typescriptdocs")}{" "}
            </a>
          </Link>{" "}
          {translate("end-about-next")}
        </Text>
      );
    }
    if (textLink === "gestorfinanceiro") {
      return (
        <Text c="dimmed" size="sm">
          {translate("created")}{" "}
          <Link href={projectfinancialmanagervercel}>
            <a className={classes.links} target="_blank">
              {translate("financial-manager")}
            </a>
          </Link>{" "}
          {translate("about-financial-manager")}
        </Text>
      );
    }
    if (textLink === "materialui") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-material-ui")}{" "}
          <Link href={materialuidocs}>
            <a className={classes.links} target="_blank">
              Material-UI
            </a>
          </Link>{" "}
          {translate("text-try")} {translate("skill-material-ui")}
        </Text>
      );
    }
    if (textLink === "newcrud") {
      return (
        <Text c="dimmed" size="sm">
          {translate("this")}{" "}
          <Link href={projectnewcrudvercel}>
            <a className={classes.links} target="_blank">
              {translate("project-CRUD")}
            </a>
          </Link>{" "}
          {translate("about-project-CRUD")}{" "}
          <Link href={codeleapwebsite}>
            <a className={classes.links} target="_blank">
              Codeleap
            </a>
          </Link>{" "}
          {translate("before-profile")}{" "}
          <Link href={frontEnd}>
            <a className={classes.links} target="_blank">
              {translate("front-end-developer")}
            </a>
          </Link>
        </Text>
      );
    }
    if (textLink === "typescript") {
      return (
        <Text c="dimmed" size="sm">
          {translate("second-typescript")}{" "}
          <Link href={typescript}>
            <a className={classes.links} target="_blank">
              Typescript
            </a>
          </Link>{" "}
          {translate("text-try")} {translate("about-typescript")}{" "}
          <Link href={typescriptdocs}>
            <a className={classes.links} target="_blank">
              {translate("typescriptdocs")}
            </a>
          </Link>
        </Text>
      );
    }
    if (textLink === "github") {
      return (
        <Text c="dimmed" size="sm">
          {translate("github-account")}{" "}
          <Link href={github}>
            <a className={classes.links} target="_blank">
              GitHub
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "acha5") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-acha-5")}{" "}
          <Link href={projectfindfivevercel}>
            <a className={classes.links} target="_blank">
              {translate("title-acha-5")}
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "crud") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-CRUD")}{" "}
          <Link href={projetocrud}>
            <a className={classes.links} target="_blank">
              CRUD
            </a>
          </Link>{" "}
          {translate("end-CRUD")}
        </Text>
      );
    }
    if (textLink === "C#") {
      return (
        <Text c="dimmed" size="sm">
          {" "}
          <Link href={cSharp}>
            <a className={classes.links} target="_blank">
              C#
            </a>
          </Link>{" "}
          {translate("c#")}{" "}
          <Link href={frontendAndbackend}>
            <a className={classes.links} target="_blank">
              back-end
            </a>
          </Link>{" "}
          {translate("text-c#")}{" "}
        </Text>
      );
    }
    if (textLink === "cursoemvideo") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-studies")}{" "}
          <Link href={cursoEmVideoProgrammingLogic}>
            <a className={classes.links} target="_blank">
              {translate("video-course")},
            </a>
          </Link>{" "}
          {translate("video-course2")}
        </Text>
      );
    }
    if (textLink === "estatisticasdosalunos") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-statistics-student")}{" "}
          <Link href={projectstudentstatisticsvercel}>
            <a className={classes.links} target="_blank">
              {translate("project-statistics-student")}
            </a>
          </Link>{" "}
          {translate("proj-statistics-student")}
        </Text>
      );
    }
    if (textLink === "reactdoc") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-reactdocs")}{" "}
          <Link href={reactdoc}>
            <a className={classes.links} target="_blank">
              {translate("reactdocs")}
            </a>
          </Link>{" "}
        </Text>
      );
    }
    if (textLink === "react") {
      return (
        <Text c="dimmed" size="sm">
          {translate("about-react")}{" "}
          <Link href={reactjs}>
            <a className={classes.links} target="_blank">
              React
            </a>
          </Link>{" "}
          {translate("react")}{" "}
          <Link href={cursodereact}>
            <a className={classes.links} target="_blank">
              {translate("origamid-channel")}
            </a>
          </Link>{" "}
          {translate("end-origamid")}
        </Text>
      );
    }
    if (textLink === "javascript") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-javascript")} {translate("technologies")}{" "}
          {translate("then")}{" "}
          <Link href={web}>
            <a className={classes.links} target="_blank">
              Web
            </a>
          </Link>{" "}
          {translate("took")}{" "}
          <Link href={cursodejavascript}>
            <a className={classes.links} target="_blank">
              {translate("javascript-course2")}
            </a>
          </Link>{" "}
          {translate("end-javascript")}
        </Text>
      );
    }
    if (textLink === "htmlecss") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-HTML")}{" "}
          <Link href={html5}>
            <a className={classes.links} target="_blank">
              HTML
            </a>
          </Link>{" "}
          {translate("and")}{" "}
          <Link href={css3}>
            <a className={classes.links} target="_blank">
              CSS
            </a>
          </Link>{" "}
          , {translate("sencod-HTML")}{" "}
          <Link href={cursodehtmlecss}>
            <a className={classes.links} target="_blank">
              {translate("HTML-course")} de html e css
            </a>
          </Link>{" "}
          {translate("text-try")}. {translate("text-after-try")}
          <strong> float</strong> {translate("and")} <strong>position</strong>{" "}
          {translate("of-CSS")} {translate("text-CSS")}
          <p>
            {translate("nowadays")}{" "}
            <Link href={flexbox}>
              <a className={classes.links} target="_blank">
                Flexbox
              </a>
            </Link>{" "}
            {translate("and")}{" "}
            <Link href={gridlayout}>
              <a className={classes.links} target="_blank">
                Grid
              </a>
            </Link>{" "}
            {translate("end-CSS")}{" "}
          </p>
        </Text>
      );
    }

    return <ParseStyledText>{description}</ParseStyledText>;
  }

  const timelineItems = myTimeline.map(
    ({ date, description, title, dataAos, textLink }) => (
      <Timeline.Item
        key={title}
        title={title}
        data-aos={dataAos}
        className={classes.description}
      >
        {addLinkOnText(textLink, description)}
        <Text size="xs" mt={4} className={classes.date}>
          <CalendarCheck size="1rem" /> {date}
        </Text>
      </Timeline.Item>
    ),
  );

  return (
    <Box component="section" className={classes.timeline}>
      <YearTitle kindOfTitle="upTitle" />
      <Timeline bulletSize={24} lineWidth={5} align="right">
        {timelineItems}
      </Timeline>
      <YearTitle kindOfTitle="downTitle" />
    </Box>
  );
}
