import { style } from "@vanilla-extract/css";

export const technology = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

export const titleText = style({
  fontSize: "24px",
  "@media": {
    "screen and (min-width: 524px)": {
      fontSize: "36px",
    },
  },
});

export const subText = style({
  fontSize: "18px",
});
