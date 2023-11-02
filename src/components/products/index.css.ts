import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

export const products = style({
  paddingTop: "40px",
  paddingBottom: "40px",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
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

export const descriptionTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
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

export const imageBox = style({
  display: "grid",
  gridAutoFlow: "column",
  justifyItems: "center",
  gridTemplateRows: "auto auto",
  gap: "40px",
});

export const launchButton = style({
  padding: "15px",
  backgroundColor: vars.color.backgroundWhite,
  color: vars.color.textBlue,
  borderRadius: "15px",
  fontWeight: "bold",
});

export const exchangeSvgSize = style({
  width: "300px",
  height: "200px",
  "@media": {
    [mediaQuery.md]: {
      width: "500px",
      height: "350px",
    },
  },
});

export const transferSvgSize = style({
  width: "300px",
  height: "200px",
  "@media": {
    [mediaQuery.md]: {
      width: "400px",
      height: "350px",
    },
  },
});

export const businessSvgSize = style({
  width: "300px",
  height: "200px",
  "@media": {
    [mediaQuery.md]: {
      width: "400px",
      height: "300px",
    },
  },
});
