import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const hero = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  "@media": {
    [mediaQuery.xl]: {
      textAlign: "left",
      gridTemplateRows: "1fr",
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const heroContent = style({});

export const heroImage = style({});

export const titleText = style({
  fontSize: "24px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "40px",
      paddingRight: "32px",
      paddingLeft: "32px",
    },
    [mediaQuery.xl]: {
      fontSize: "56px",
      paddingRight: "0px",
      paddingLeft: "0px",
    },
  },
});

export const subText = style({
  fontSize: "20px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "24px",
    },
  },
});
