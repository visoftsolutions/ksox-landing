import { style } from "@vanilla-extract/css";

export const products = style({
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
  fontSize: "18px",
  fontWeight: "normal",
});
