import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

export const hero = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "82px",
  minHeight: "calc(100vh - 82px)",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
});

export const heroBox = style({
  display: "grid",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
  gap: "20px",
  gridTemplateColumns: "auto",
  gridTemplateRows: "auto auto",
  "@media": {
    [mediaQuery.xl]: {
      gridTemplateColumns: "auto auto",
      gridTemplateRows: "auto",
    },
  },
});

export const heroContentBox = style({
  alignSelf: "center",
});

export const heroImage = style({
  "@media": {
    [mediaQuery.md]: {
      width: "480px",
      height: "480px",
    },
  },
});

export const titleText = style({
  fontSize: "28px",
  fontWeight: "bold",
});

export const subText = style({
  fontSize: "20px",
});
