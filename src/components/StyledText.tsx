import { Text, createStyles } from "@mantine/core";
import { ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  blue: {
    color: theme.colors.blue[5],
    fontWeight: 600,
  },
  red: {
    color: theme.colors.red[5],
    fontWeight: 600,
  },
  green: {
    color: theme.colors.green[5],
    fontWeight: 600,
  },
  yellow: {
    color: theme.colors.yellow[5],
    fontWeight: 600,
  },
  violet: {
    color: theme.colors.violet[5],
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
}));

interface StyledTextProps {
  text: string;
  color?: string;
  size?: string;
}

interface ParseStyledTextProps {
  children: string;
  className?: string;
}

const ParseStyledText = ({ children, className }: ParseStyledTextProps) => {
  const { classes } = useStyles();

  // Parse the text and split by [[...|...]] markers
  const parts = children.split(/(\[\[.*?\|.*?\]\])/g);

  return (
    <Text c="dimmed" size="sm">
      {parts.map((part, index) => {
        // Check if part matches the pattern [[text|style]]
        const match = part.match(/\[\[(.*?)\|(.*?)\]\]/);
        if (match) {
          const [, text, style] = match;
          const styleClass = classes[style as keyof typeof classes] || "";
          return (
            <span key={index} className={styleClass}>
              {text}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </Text>
  );
};

export { ParseStyledText, useStyles };
export type { StyledTextProps };
