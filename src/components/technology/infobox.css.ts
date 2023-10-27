import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const imageLeft = style({
  display: "none",
  "@media": {
    "screen and (min-width: 824px)": {
      display: "block",
      justifySelf: "start",
    },
  },
});

export const imageRight = style({
  display: "none",
  "@media": {
    "screen and (min-width: 824px)": {
      display: "block",
      justifySelf: "end",
    },
  },
});

export const box = style({
  paddingBottom: "20px",
  paddingTop: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
});

export const wrapper = style({
  display: "grid",
  alignItems: "center",
  "@media": {
    [mediaQuery.xl]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const textBoxLeft = style({
  textAlign: "center",
  "@media": {
    [mediaQuery.xl]: {
      textAlign: "left",
    },
  },
});

export const textBoxRight = style({
  textAlign: "center",
  "@media": {
    [mediaQuery.xl]: {
      textAlign: "right",
    },
  },
});

export const titleText = style({
  fontSize: "20px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "24px",
    },
    [mediaQuery.xl]: {
      fontSize: "30px",
    },
  },
});

export const subText = style({
  fontSize: "14px",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "18px",
    },
  },
});
