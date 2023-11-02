import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const box = style({
  display: "grid",
  gap: "50px",
  alignItems: "center",
  justifyItems: "center",
  "@media": {
    [mediaQuery.xl]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const imageLeft = style({});

export const imageRight = style({
  gridRowStart: "2",
  gridRowEnd: "3",
  "@media": {
    [mediaQuery.xl]: {
      gridRowStart: "1",
      gridRowEnd: "2",
    },
  },
});

const textBox: ComplexStyleRule = {
  display: "grid",
  gap: "15px",
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
        textAlign: "left",
      },
    },
  },
]);

export const titleText = style({
  fontSize: "30px",
  fontWeight: "bold",
});

export const subText = style({});
