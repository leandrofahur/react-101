import React from "react";
import { Text as Typography } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

type TextProps = {
  as?: "p" | "div" | "span";
  color: "blue" | "red" | "green" | "yellow" | "gray";
  children?: React.ReactNode;
};

function Text(props: TextProps) {
  const { as, color, children } = props;
  return (
    <Typography as={as} color={color}>
      {children}
    </Typography>
  );
}

export default Text;
