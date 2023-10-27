import { createTheme, style } from "@vanilla-extract/css";

export const [mainTheme, vars] = createTheme({
  color: {
    backgroundWhite: "#f8f8f8",
    backgroundHighlight: "#1f1f1f",
    backgroundBlue: "#040c18",
    text: "#f8f8f8",
    textDark: "#1f1f1f",
    textHighlight: "#ffffff",
    border: "#4183E8",
    shadow: "#000000",
  },
  transitions: {
    duration: "0.1s",
    timingFunction: "ease-in-out",
  },
});

export const backgroundBlue = style({
  backgroundColor: vars.color.backgroundBlue,
});
