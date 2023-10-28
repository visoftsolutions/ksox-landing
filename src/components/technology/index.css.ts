import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const technology = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

export const titleText = style({
  fontSize: "30px",
  textAlign: "center",
  "@media": {
    [mediaQuery.md]: {
      textAlign: "left",
    },
  },
});

export const infobox = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "50px",
});
