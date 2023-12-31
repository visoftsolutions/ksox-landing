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

export const description = style({
  display: "grid",
  gap: "25px",
  gridAutoFlow: "row",
});

export const descriptionBox = style({
  display: "grid",
  gap: "15px",
  gridAutoFlow: "row",
});

export const descriptionText = style({
  fontSize: "14px",
  fontWeight: "normal",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "18px",
    },
  },
});

export const svgSize = style({
  width: "250px",
  height: "150px",
  "@media": {
    [mediaQuery.md]: {
      width: "300px",
      height: "200px",
    },
  },
});
