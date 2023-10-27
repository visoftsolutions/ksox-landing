import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const box = style({
  paddingBottom: "20px",
  paddingTop: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
  display: "grid",
  alignItems: "center",
  "@media": {
    [mediaQuery.xl]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

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

const textBox: ComplexStyleRule = {
  display: "grid",
  gap: "10px",
  textAlign: "center",
};

export const textBoxLeft = style([
  textBox,
  {
    "@media": {
      [mediaQuery.xl]: {
        textAlign: "left",
      },
    },
  },
]);

export const textBoxRight = style([
  textBox,
  {
    textAlign: "center",
    "@media": {
      [mediaQuery.xl]: {
        textAlign: "right",
      },
    },
  },
]);

export const titleText = style({
  fontSize: "20px",
  fontWeight: "bold",
  "@media": {
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
