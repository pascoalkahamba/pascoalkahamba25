import {
  createStyles,
  Text,
  Container,
  Group,
  rem,
  Stack,
} from "@mantine/core";
import { CalendarDaysIcon, PhoneCallIcon } from "lucide-react";
import UserButton from "./userProfile";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Alldata from "../../contents/alldata";
import { scrollToThePlace } from "./scrollControl";
import { useAtom } from "jotai";
import { countYearAtom, nameDeveloperAtom } from "../../atoms";
import translations from "../../locales/en/useExternalLink";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.black[0] : theme.white,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(12),
  },

  eachSocial: {
    display: "inline-block",
    padding: rem(1),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[5]
          : theme.colors.blue[3],
    },
  },
}));

const SCROLL_TO_A_LOCAL_PAGE = 400;
const TIMELINE_2020 = 2;
const TIMELINE_2023 = 5;
const TIMELINE_2021 = 3;
const TIMELINE_2019 = 1;
const TIMELINE_2022 = 4;

const { whatsapp, cellphone, calendly } = translations;

const socialMedia = [
  {
    Icon: FaWhatsapp,
    link: whatsapp,
  },
  {
    Icon: PhoneCallIcon,
    link: cellphone,
  },
  {
    Icon: CalendarDaysIcon,
    link: calendly,
  },
];

export default function FooterLinks() {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("common");
  const [_, setCountYear] = useAtom(countYearAtom);
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { footerData } = Alldata();
  const currentYear = new Date().getFullYear();

  function choseThisTimeline(tecnologiesOrYear: string) {
    if (tecnologiesOrYear === "JavaScript" || tecnologiesOrYear === "2019") {
      setCountYear(TIMELINE_2019);
      return;
    }
    if (tecnologiesOrYear === "TypeScript" || tecnologiesOrYear === "2022") {
      setCountYear(TIMELINE_2022);
      return;
    }
    if (tecnologiesOrYear === "Next.js" || tecnologiesOrYear === "2023") {
      setCountYear(TIMELINE_2023);
      return;
    }
    if (tecnologiesOrYear === "React.js" || tecnologiesOrYear === "2021") {
      setCountYear(TIMELINE_2021);
      return;
    }

    setCountYear(TIMELINE_2020);
  }

  function goToEspecialTimeline(timeline: string, title: string) {
    if (
      title === translate("tecnologies") ||
      title !== translate("navigation")
    ) {
      choseThisTimeline(timeline);
      setTimeout(() => {
        scrollToThePlace(SCROLL_TO_A_LOCAL_PAGE);
      }, 2000);
    }
  }

  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} href={link.link}>
        <Text<"a">
          className={classes.link}
          component="a"
          href={link.link}
          onClick={() => goToEspecialTimeline(link.label, group.title)}
        >
          {link.label}
        </Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <UserButton
            name={nameDeveloper}
            kindOfUser="footer"
            image="/developer-photo.jpg"
            skill={translate("my-skill")}
          />
          <Text size="xs" color="dimmed" className={classes.description}>
            {translate("description")}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {currentYear} - {translate("2023")}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Stack justify="center" spacing={0}>
            <div className={classes.socialMedia}>
              {socialMedia.map(({ Icon, link }) => (
                <Link href={link} key={link}>
                  <a
                    target={link === cellphone ? "_parent" : "_blank"}
                    className={classes.eachSocial}
                  >
                    <Icon size="1.05rem" />
                  </a>
                </Link>
              ))}
            </div>
          </Stack>
        </Group>
      </Container>
    </footer>
  );
}
