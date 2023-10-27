import { style } from "@vanilla-extract/css";
import { backgroundBlue, vars } from "~/theme.css";

export const mainContainer = style([
  backgroundBlue,
  {
    display: "grid",
    gridAutoFlow: "row",
    gap: "50px",
    paddingTop: "100px",
    paddingBottom: "100px",
    color: vars.color.text,
  },
]);

export const main = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "50px",
});

export const container = style({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gridTemplateColumns: "minmax(0px, 1200px)",
});
