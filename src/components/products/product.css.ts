import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

export const product = style({
  display: "grid",
  gap: "20px",
  alignItems: "center",
  paddingBottom: "64px",
  paddingTop: "64px",
  paddingLeft: "40px",
  paddingRight: "40px",
  borderRadius: "16px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: vars.color.border,
  color: vars.color.textDark,
  gridTemplateColumns: "1fr",
  "@media": {
    [mediaQuery.xl]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const infoButton = style({
  color: vars.color.textDark,
  borderWidth: "2px",
  fontSize: "16px",
  borderRadius: "9999px",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "4px",
  paddingBottom: "4px",
  borderColor: vars.color.border,
  borderStyle: "solid",
  transition: "background-color",
  transitionDuration: vars.transitions.duration,
  animationTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    backgroundColor: vars.color.textHighlight,
  },
});

export const productImage = style({
  borderRadius: "16px",
});

export const textBox = style({
  display: "grid",
  gap: "10px",
  gridAutoFlow: "row",
});

export const titleText = style({
  fontSize: "20px",
});

export const subText = style({});
