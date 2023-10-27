import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const products = style({
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "grid",
  gridAutoFlow: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "100px",
});

export const titleText = style({
  fontSize: "24px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "36px",
    },
  },
});

export const subText = style({
  paddingTop: "20px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "18px",
    },
  },
});
