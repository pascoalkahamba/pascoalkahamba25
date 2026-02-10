import {
  Image,
  Card,
  Text,
  Group,
  Button,
  rem,
  createStyles,
  px,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { CalendarCheck, StarIcon } from "lucide-react";
import classs from "../styles/projectCarousel.module.css";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { TbBrandVercel } from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  technologies: {
    backgroundColor: "",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderRadius: theme.spacing.xs,
    padding: "5px 0.5rem",
  },
  statusAndDate: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
  },
  links: {
    backgroundColor: theme.colors.blue[5],
    padding: rem(5),
    borderRadius: theme.spacing.xs,
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showDate: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    fontStyle: "italic",
  },
  icon: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    gap: rem(10),
    alignItems: "center",
    justifyContent: "center",
  },

  carouselIndicator: {
    width: "rem(4px)",
    height: "rem(4px)",
    transition: " width 250ms ease",
  },

  card: {
    width: rem(600),
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

interface ProjectCarouselProps {
  images: string[];
  technologies: string[];
  name: string;
  githubLink: string;
  vercelLink: string;
  dataAos: string;
  dateBuiltTheProject: string;
  status: string;
}

export default function ProjectCarousel({
  dataAos,
  images,
  name,
  technologies,
  status,
  githubLink,
  vercelLink,
  dateBuiltTheProject,
}: ProjectCarouselProps) {
  const { classes } = useStyles();
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} alt="project picture" />
    </Carousel.Slide>
  ));

  return (
    <Card
      radius="md"
      withBorder
      padding="xl"
      className={classes.card}
      data-aos={dataAos}
      data-aos-duration="1400"
    >
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classs.carousel,
            controls: classs.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group mt="lg">
        <Text fw={500} fz="lg">
          {name}
        </Text>

        <Group>
          {technologies.map((technologie) => (
            <Text
              fz="xs"
              key={technologie}
              className={classes.technologies}
              fw={500}
            >
              {technologie}
            </Text>
          ))}
        </Group>
      </Group>

      <Group mt="md" className={classes.icons}>
        <div className={classes.icon}>
          <Link href={githubLink}>
            <a className={classes.links} target="_blank">
              <GithubIcon size="1.5rem" />
            </a>
          </Link>
          <Link href={vercelLink}>
            <a className={classes.links} target="_blank">
              <TbBrandVercel size="1.5rem" />
            </a>
          </Link>
        </div>
        <div className={classes.statusAndDate}>
          <span className={classes.showDate}>{dateBuiltTheProject}</span>
          <Text
            fz="xs"
            className={classes.technologies}
            fw={500}
            bg={
              status === "Em andamento" || status === "In Progress"
                ? "yellow"
                : "blue"
            }
          >
            {status}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
