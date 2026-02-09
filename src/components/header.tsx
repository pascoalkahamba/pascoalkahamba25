import {
  createStyles,
  Header,
  Group,
  Anchor,
  Box,
  rem,
  px,
  Burger,
} from "@mantine/core";
import LanguagePicker from "./languagePicker";
import ActionToggle from "./actionToggle";
import UserProfile from "./userProfile";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Alldata from "../../contents/alldata";
import { nameDeveloperAtom } from "../../atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import useMedia from "../hooks/useMedia";
import { useDisclosure } from "@mantine/hooks";
import MobileMenu from "./mobileMenu";

const useStyles = createStyles((theme) => ({
  headerElement: {
    position: "fixed",
    with: "100%",
    top: px(0),
    zIndex: 99999,
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLink: {
    fontSize: rem(13),
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
    padding: `${rem(8)} ${theme.spacing.sm}`,
    fontWeight: 500,
    borderBottom: `${rem(1)} solid transparent`,
    transition: "border-color 100ms ease, color 100ms ease",
    borderRadius: rem(5),
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
    },
  },

  headerChild: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    with: "100%",
  },

  elementMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderMegaMenu() {
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("common");
  const { mainLinks } = Alldata();
  const mobile = useMedia("(max-width:48rem)");

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    if (mobile === false && opened) {
      toggle();
    }
  }, [mobile, toggle, opened]);

  const mainItems = mainLinks.map((item) => (
    <Link key={item.label} href={item.link}>
      <Anchor<"a">
        href={item.link}
        component="a"
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: item.link === pathname,
        })}
      >
        {item.label}
      </Anchor>
    </Link>
  ));

  return (
    <Box pb={90}>
      <Header height={60} px="md" className={classes.headerElement}>
        <Group
          position="apart"
          sx={{ height: "100%" }}
          className={classes.headerChild}
        >
          <UserProfile
            kindOfUser="header"
            name={nameDeveloper}
            image="/developer-photo.jpg"
            skill={translate("my-skill")}
          />
          {mobile && (
            <div className={classes.elementMobile}>
              <Burger opened={opened} onClick={toggle} size="sm" />
              <ActionToggle />
            </div>
          )}
          <Group
            className={classes.mainLinks}
            sx={{ display: mobile ? "none" : "flex" }}
          >
            {mainItems}
          </Group>
          <Group
            className={classes.hiddenMobile}
            sx={{ display: mobile ? "none" : "flex" }}
          >
            <LanguagePicker />
            <ActionToggle />
          </Group>
        </Group>
      </Header>
      {mobile && opened && <MobileMenu toggle={toggle} />}
    </Box>
  );
}
