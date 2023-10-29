import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

export const footer = style({
  display: "grid",
  gridTemplateRows: "repeat(2, auto)",
  justifyContent: "stretch",
  gap: "60px",
  color: vars.color.text,
});

export const contactBox = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "10px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: vars.color.border,
  paddingTop: "48px",
  paddingBottom: "48px",
  borderRadius: "24px",
  textAlign: "center",
});

export const iconsBox = style({
  display: "grid",
  gap: "20px",
  gridAutoFlow: "column",
  justifyItems: "center",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",

  "@media": {
    [mediaQuery.md]: {
      gap: "50px",
    },
  },
});

export const infoBox = style({
  display: "grid",
  fontSize: "16px",
  gap: "30px",
  gridAutoFlow: "row",
  "@media": {
    [mediaQuery.md]: {
      gridAutoFlow: "column",
    },
  },
});

export const infoBoxTile = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "25px",
  textAlign: "center",
  "@media": {
    [mediaQuery.md]: {
      textAlign: "left",
    },
  },
});

export const titleText = style({
  fontSize: "24px",
  fontWeight: "bold",
  "@media": {
    [mediaQuery.md]: {
      fontSize: "48px",
    },
  },
});

export const subTitleText = style({
  fontSize: "24px",
  fontWeight: "bold",
});

export const footerTile = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "8px",
});

export const footerTileTitle = style({
  fontSize: "20px",
  fontWeight: "normal",
});

export const footerTileSubtitle = style({
  fontSize: "12px",
  fontWeight: "normal",
});
