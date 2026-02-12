import { Text, createStyles } from "@mantine/core";

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
  link: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

interface ParseStyledTextProps {
  children: string;
  className?: string;
}

const ParseStyledText = ({ children, className }: ParseStyledTextProps) => {
  const { classes } = useStyles();

  // Parse the text and split by [[...]] markers
  // Supports: [[text|style]] and [[text|style|url:link]] and [[text|url:link]]
  const parts = children.split(/(\[\[.*?\]\])/g);

  return (
    <Text c="dimmed" size="sm" className={className}>
      {parts.map((part, index) => {
        // Check if part matches the pattern [[text|style]] or [[text|url:link]] or [[text|style|url:link]]
        const match = part.match(/\[\[(.*?)\]\]/);
        if (match) {
          const content = match[1];

          // Check for link pattern: [[text|style|url:link]] or [[text|url:link]]
          const linkMatch = content.match(/(.*?)\|url:(.*)/);
          if (linkMatch) {
            const [, text, url] = linkMatch;

            // Check if there's also a style: [[text|style|url:link]]
            const styleMatch = text.match(/(.*?)\|(.*)/);
            if (styleMatch) {
              const [, styleText, style] = styleMatch;
              const styleClass = classes[style as keyof typeof classes] || "";
              return (
                <a
                  key={index}
                  href={url}
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styleClass}>{styleText}</span>
                </a>
              );
            }

            // Just link without style
            return (
              <a
                key={index}
                href={url}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </a>
            );
          }

          // Check for style pattern: [[text|style]]
          const styleMatch = content.match(/(.*?)\|(.*)/);
          if (styleMatch) {
            const [, text, style] = styleMatch;
            const styleClass = classes[style as keyof typeof classes] || "";
            return (
              <span key={index} className={styleClass}>
                {text}
              </span>
            );
          }

          // No style, just text
          return <span key={index}>{content}</span>;
        }
        return <span key={index}>{part}</span>;
      })}
    </Text>
  );
};

export { ParseStyledText, useStyles };
