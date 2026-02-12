import { createStyles, Box, Image, Tooltip, rem, Text } from "@mantine/core";
import { AlertCircleIcon } from "lucide-react";
import GlobalTitle from "./globalTitle";
import { ParseStyledText } from "./StyledText";

interface TechnologiesProps {
  job: string;
  width: number;
  skills: {
    icon: string;
    name: string;
    aosDuration: number;
    description: string;
  }[];
}

const useStyles = createStyles((theme) => ({
  icons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: rem(10),
  },

  icon: {
    display: "flex",
    flex: "0 1 8rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
    padding: "1rem 5px",
    borderRadius: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    "&:hover": {
      cursor: "pointer",
      boxShadow: " 0 6px 14px 1px rgb(0 0 0 / 20%)",
    },
  },

  flexLenged: {
    width: rem(230),
    whiteSpace: "normal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(8),
  },
}));

export default function Technologias({
  job,
  skills,
  width,
}: TechnologiesProps) {
  const { classes } = useStyles();

  const mySkills = skills.map(({ aosDuration, name, description, icon }) => (
    <Tooltip
      label={
        <div className={classes.flexLenged}>
          <AlertCircleIcon style={{ flex: "1 0 1.2rem" }} />
          <ParseStyledText>{description}</ParseStyledText>
        </div>
      }
      position="bottom"
      withArrow
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2],
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[7],
      })}
      transitionProps={{ duration: 0 }}
      key={name}
    >
      <div
        data-aos="flip-left"
        data-aos-duration={aosDuration}
        className={classes.icon}
      >
        <Image src={icon} alt={name} width={45} height={40} />
        <span>{name}</span>
      </div>
    </Tooltip>
  ));

  return (
    <Box component="section" style={{ width: "100%" }}>
      <GlobalTitle title={job} width={width} />
      <div className={classes.icons}>{mySkills}</div>
    </Box>
  );
}
