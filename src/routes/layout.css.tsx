import { style } from "@vanilla-extract/css";
import { backgroundBlue } from "~/theme.css";

export const mainContainer = style([backgroundBlue, {
  display: "grid",
  padding: "20px",
  paddingTop: "60px",
  alignItems: "center",
  justifyContent: "center",
  gridTemplateColumns: "minmax(0px, 1200px)",
}])

export const main = style({
  
});
