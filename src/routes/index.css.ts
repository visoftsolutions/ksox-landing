import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const info = style({
  backgroundColor: vars.color.backgroundHighlight,
  color: vars.color.text,
});
