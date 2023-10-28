import { type ComplexStyleRule, style } from "@vanilla-extract/css";
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
  gap: "50px",
  gridAutoFlow: "column",
  justifyItems: "center",
  justifyContent: "center",
  alignItems: "center",
});

export const infoBox = style({
  display: "grid",
  fontSize: "16px",
  gap: "24px",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "1fr",
  "@media": {
    [mediaQuery.md]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "1fr",
    },
  },
});

const sideInfo: ComplexStyleRule = {
  display: "grid",
  gridAutoFlow: "row",
  gap: "20px",
  textAlign: "center",
  "@media": {
    [mediaQuery.md]: {
      textAlign: "left",
    },
  },
};

export const leftInfo = style([sideInfo]);
export const rightInfo = style([sideInfo]);

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
