import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const navItem = style({
  paddingRight: "20px",
  paddingLeft: "20px",
  transition: "color",
  transitionDuration: vars.transitions.duration,
  animationTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    color: vars.color.textHighlight,
  },
});
