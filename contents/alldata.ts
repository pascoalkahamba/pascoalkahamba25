import useTranslation from "next-translate/useTranslation";
import { formatDistance } from "date-fns";
import { useRouter } from "next/router";
import { pt, enUS } from "date-fns/locale";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 1;
const APRIL = 4;
const MAY = 5;
const DECEMBER = 12;
const JUNE = 6;
const JULY = 7;
const OCTOBER = 10;
const NOVEMBER = 11;
const SEPTEMBER = 9;
const AUGUST = 8;

export default function Alldata() {
  const { t: translate } = useTranslation("common");
  const { locale } = useRouter();

  function fullDateWhenAreMonths(distanceBetweenDate: string) {
    let fullDate = "";
    const months = locale === "en" ? "months" : "meses";

    distanceBetweenDate.split(" ").forEach((date) => {
      if (date.includes(months)) {
        locale === "en"
          ? (fullDate = `${distanceBetweenDate} ago`)
          : (fullDate = `há ${distanceBetweenDate}`);
      } else {
        fullDate = distanceBetweenDate;
      }
    });

    return fullDate;
  }

  function getDate(year: number, month: number, day: number) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();

    const date = formatDistance(
      new Date(year, month, day),
      new Date(currentYear, currentMonth, currentDay),
      { locale: locale === "pt" ? pt : enUS },
    );

    const distanceBetweenDate = fullDateWhenAreMonths(date);

    return distanceBetweenDate;
  }
  const mainLinks = [
    {
      label: translate("home"),
      link: "/",
    },
    {
      label: translate("about"),
      link: "/about",
    },
    {
      label: translate("journey"),
      link: "/journey",
    },
    // {
    //   label: translate("projects"),
    //   link: "/journey", // Temporarily link to journey update later from projects page
    // },
    {
      label: translate("contacts"),
      link: "/contacts",
    },
  ];

  const footerData = [
    {
      title: translate("navigation"),
      links: [
        { label: translate("home"), link: "/" },
        { label: translate("about"), link: "/about" },
        { label: translate("journey"), link: "/journey" },
        // { label: translate("projects"), link: "/journey" }, // Temporarily link to journey update later from projects page
        { label: translate("contacts"), link: "/contacts" },
      ],
    },
    {
      title: translate("tecnologies"),
      links: [
        { label: "JavaScript", link: "/journey" },
        { label: "TypeScript", link: "/journey" },
        { label: "React.js", link: "/journey" },
        { label: "Next.js", link: "/journey" },
      ],
    },
    {
      title: translate("journey"),
      links: [
        { label: "2023", link: "/journey" },
        { label: "2022", link: "/journey" },
        { label: "2021", link: "/journey" },
        { label: "2020", link: "/journey" },
        { label: "2019", link: "/journey" },
      ],
    },
  ];

  const backEndSkills = [
    {
      icon: "/nodejs.svg",
      name: "Nodejs",
      aosDuration: 1800,
      description: translate("nodejs"),
    },
    {
      icon: "/mongodb.svg",
      name: "Mongodb",
      aosDuration: 1800,
      description: translate("mongodb"),
    },
    {
      icon: "/mysql.svg",
      name: "MYSQL",
      aosDuration: 1800,
      description: translate("mysql"),
    },
    {
      icon: "/postgresql.svg",
      name: "Postgresql",
      aosDuration: 1800,
      description: translate("postgres"),
    },
    {
      icon: "/nodejsex.svg",
      name: "Express",
      aosDuration: 1800,
      description: translate("express"),
    },
  ];

  const frontEndSkiils = [
    {
      icon: "/html5.svg",
      name: "HTML5",
      aosDuration: 1800,
      description: translate("HTMLdesc"),
    },
    {
      icon: "/css.svg",
      name: "CSS3",
      aosDuration: 1600,
      description: translate("CSS3desc"),
    },
    {
      icon: "/js.svg",
      name: "JavaScript",
      aosDuration: 1400,
      description: translate("javascript"),
    },
    {
      icon: "/typescript.svg",
      name: "TypeScript",
      aosDuration: 1200,
      description: translate("typescript"),
    },
    {
      icon: "/react.svg",
      name: "Reactjs",
      aosDuration: 100,
      description: translate("reactjs"),
    },
    {
      icon: "/nextjs-line.svg",
      name: "Nextjs",
      aosDuration: 800,
      description: translate("nextjs"),
    },
  ];

  const otherTechnologies: typeof frontEndSkiils = [
    {
      name: "VS Code",
      icon: "/vscode.svg",
      aosDuration: 1800,
      description: translate("vscode"),
    },
    {
      name: "Photoshop",
      icon: "/photoshop.svg",
      aosDuration: 1600,
      description: translate("photoshop"),
    },
    {
      name: "Vercel",
      icon: "/vercel.png",
      aosDuration: 1400,
      description: translate("vercel"),
    },
    {
      name: "phpmyadmin",
      icon: "/phpmyadmin.svg",
      aosDuration: 1400,
      description: translate("phpmyadmin"),
    },
    {
      name: "Insomnia",
      icon: "/insomnia.svg",
      aosDuration: 1400,
      description: translate("insomnia"),
    },
  ];

  const allYears = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

  const dateWentOnSchool = getDate(2018, FEBRUARY, 2);
  const dateStartedLogic = getDate(2018, MAY, 11);
  const dateFirstCode = getDate(2018, JUNE, 5);
  const dateStartedCSharp = getDate(2019, MARCH, 19);
  const dateFirstWeb = getDate(2019, AUGUST, 30);
  const dateJavascriptCourse = getDate(2019, NOVEMBER, 14);
  const dateGithub = getDate(2020, JANUARY, 21);
  const dateCreatedCRUD = getDate(2020, MARCH, 22);
  const dateCreatedFindFive = getDate(2020, FEBRUARY, 8);
  const dateReactCourse = getDate(2021, JUNE, 22);
  const dateCreatedStatisticsStudent = getDate(2021, SEPTEMBER, 20);
  const dateDeeplyReact = getDate(2021, NOVEMBER, 1);
  const dateFinishedSchool = getDate(2022, APRIL, 30);
  const dateFirstTypescript = getDate(2022, JUNE, 14);
  const dateCreatedNewCRUD = getDate(2022, AUGUST, 5);
  const dateLearnStyledComponents = getDate(2022, SEPTEMBER, 10);
  const dateLearnMaterialUI = getDate(2022, OCTOBER, 25);
  const dateCreatedFinancialManager = getDate(2022, DECEMBER, 16);
  const dateLearnNext = getDate(2023, MARCH, 8);
  const dateLearnTailwindcss = getDate(2023, MAY, 20);
  const dateLearnJotai = getDate(2023, JUNE, 10);
  const dateLearnMantine = getDate(2023, JUNE, 20);
  const dateCreatedMyPortfolio = getDate(2023, JULY, 26);

  const showDateBuiltProject = (
    month: string,
    year: number,
    months: number,
    day: number,
  ) => `${translate(month)} - ${getDate(year, months, day)}`;

  const allJourney = [
    [
      {
        title: translate("entrance-school"),
        description: "",
        date: `${translate("february")} - ${dateWentOnSchool}`,
        dataAos: "fade-left",
        textLink: "ensinomedio",
      },
      {
        title: translate("started-logic"),
        description: " ",
        date: `${translate("may")} - ${dateStartedLogic}`,
        dataAos: "fade-right",
        textLink: "cursoemvideo",
      },
      {
        title: translate("first-code"),
        description: translate("first-code-desc"),
        date: `${translate("june")} - ${dateFirstCode}`,
        dataAos: "fade-left",
        textLink: "firstCode",
      },
    ],
    [
      {
        title: translate("start-c#"),
        description: "",
        date: `${translate("march")} - ${dateStartedCSharp}`,
        dataAos: "fade-right",
        textLink: "C#",
      },
      {
        title: translate("first-web"),
        description: " ",
        date: `${translate("august")} - ${dateFirstWeb}`,
        dataAos: "fade-left",
        textLink: "htmlecss",
      },
      {
        title: translate("javacript-course"),
        description: "",
        date: `${translate("november")} - ${dateJavascriptCourse}`,
        dataAos: "fade-right",
        textLink: "javascript",
      },
    ],
    [
      {
        title: translate("github"),
        description: "",
        date: `${translate("january")} - ${dateGithub}`,
        dataAos: "fade-left",
        textLink: "github",
      },
      {
        title: translate("CRUD"),
        description: "",
        date: `${translate("march")} - ${dateCreatedCRUD}`,
        dataAos: "fade-left",
        textLink: "crud",
      },
      {
        title: translate("acha-5"),
        description: "",
        date: `${translate("february")} - ${dateCreatedFindFive}`,
        dataAos: "fade-right",
        textLink: "acha5",
      },
    ],
    [
      {
        title: translate("react-course"),
        description: "",
        date: `${translate("june")} - ${dateReactCourse}`,
        dataAos: "fade-left",
        textLink: "react",
      },
      {
        title: translate("statistics-student"),
        description: "",
        date: `${translate("september")} - ${dateCreatedStatisticsStudent}`,
        dataAos: "fade-right",
        textLink: "estatisticasdosalunos",
      },
      {
        title: translate("deeply-react"),
        description: "",
        date: `${translate("november")} - ${dateDeeplyReact}`,
        dataAos: "fade-left",
        textLink: "reactdoc",
      },
    ],
    [
      {
        title: translate("finished-school"),
        description: "",
        date: `${translate("april")} - ${dateFinishedSchool}`,
        dataAos: "fade-left",
        textLink: "finalensinomedio",
      },
      {
        title: translate("first-typescript"),
        description: "",
        date: `${translate("june")} - ${dateFirstTypescript}`,
        dataAos: "fade-left",
        textLink: "typescript",
      },
      {
        title: translate("created-CRUD"),
        description: "",
        date: `${translate("august")} - ${dateCreatedNewCRUD}`,
        dataAos: "fade-right",
        textLink: "newcrud",
      },
      {
        title: translate("about-styled-components"),
        description: "",
        date: `${translate("september")} - ${dateLearnStyledComponents}`,
        dataAos: "fade-left",
        textLink: "styledcomponents",
      },
      {
        title: translate("about-Material-UI"),
        description: "",
        date: `${translate("october")} - ${dateLearnMaterialUI}`,
        dataAos: "fade-left",
        textLink: "materialui",
      },
      {
        title: translate("created-financial-manager"),
        description: "",
        date: `${translate("december")} - ${dateCreatedFinancialManager}`,
        dataAos: "fade-right",
        textLink: "gestorfinanceiro",
      },
    ],
    [
      {
        title: translate("learned-next"),
        description: "",
        date: `${translate("march")} - ${dateLearnNext}`,
        dataAos: "fade-left",
        textLink: "next",
      },
      {
        title: translate("learned-tailwindcss"),
        description: "",
        date: `${translate("may")} - ${dateLearnTailwindcss}`,
        dataAos: "fade-left",
        textLink: "tailwindcss",
      },
      {
        title: translate("learned-jotai"),
        description: "",
        date: `${translate("june")} - ${dateLearnJotai}`,
        dataAos: "fade-right",
        textLink: "jotai",
      },
      {
        title: translate("learned-mantine"),
        description: " ",
        date: `${translate("june")} - ${dateLearnMantine}`,
        dataAos: "fade-left",
        textLink: "mantine",
      },
      {
        title: translate("created-my-portfolio"),
        description: " ",
        date: `${translate("july")} - ${dateCreatedMyPortfolio}`,
        dataAos: "fade-right",
        textLink: "portfolio",
      },
    ],
  ];
  const financialImages = [
    "/projectFinancial/financialProject.PNG",
    "/projectFinancial/financialProject02.PNG",
    "/projectFinancial/financialProject03.PNG",
    "/projectFinancial/financialProject04.PNG",
    "/projectFinancial/financialProject05.PNG",
  ];

  const crudImages = [
    "/projectCrud/crud0.PNG",
    "/projectCrud/crud1.PNG",
    "/projectCrud/crud02.PNG",
    "/projectCrud/crud03.PNG",
    "/projectCrud/crud.PNG",
  ];

  const studentStatisticsImages = [
    "/projectStudentStatistics/student01.PNG",
    "/projectStudentStatistics/student02.PNG",
    "/projectStudentStatistics/student03.PNG",
    "/projectStudentStatistics/student04.PNG",
    "/projectStudentStatistics/student05.PNG",
  ];

  const findFiveImages = [
    "/projectFindFive/findFive01.PNG",
    "/projectFindFive/findFive02.PNG",
    "/projectFindFive/findFive03.PNG",
    "/projectFindFive/findFive04.PNG",
    "/projectFindFive/findFive05.PNG",
  ];
  const financialTechnologies = ["TypeScript", "React", "Material-UI"];
  const studentStatisticsTechnologies = ["TypeScript", "React", "Material-UI"];
  const crudTechnologies = ["TypeScript", "React", "Styled-Components"];
  const findFiveTechnologies = ["TypeScript", "React", "Styled-Components"];

  return {
    financialImages,
    financialTechnologies,
    mainLinks,
    footerData,
    studentStatisticsImages,
    studentStatisticsTechnologies,
    findFiveImages,
    findFiveTechnologies,
    allJourney,
    crudImages,
    crudTechnologies,
    backEndSkills,
    allYears,
    showDateBuiltProject,
    frontEndSkiils,
    otherTechnologies,
  };
}
