import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const technology = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

export const titleText = style({
  fontSize: "24px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "36px",
    },
  },
});

export const infobox = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "50px",
});
