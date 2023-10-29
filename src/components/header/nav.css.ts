import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const navItem = style({
  padding: "10px",
  borderRadius: "10px",
  transition: "color, background-color",
  transitionDuration: vars.transitions.duration,
  animationTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    color: vars.color.textHighlight,
    backgroundColor: vars.color.backgroundHighlight
  },
});
