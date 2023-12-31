import { style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { backgroundBlue, vars } from "~/theme.css";

export const mainContainer = style([
  backgroundBlue,
  {
    display: "grid",
    gridAutoFlow: "row",
    gap: "50px",
    paddingBottom: "100px",
    color: vars.color.text,
  },
]);

export const main = style({
  display: "grid",
  gridAutoFlow: "row",
  gap: "0px",
});

export const container = style({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gridTemplateColumns: "minmax(0px, 1200px)",
  paddingLeft: "40px",
  paddingRight: "40px",
  "@media": {
    [mediaQuery.xl]: {
      padding: "0px",
    },
  },
});
