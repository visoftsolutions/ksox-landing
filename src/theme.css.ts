import { createTheme, style } from "@vanilla-extract/css";

export const [mainTheme, vars] = createTheme({
  color: {
    backgroundHighlight: "#092148",
    backgroundBlue: "#040c18",
    text: "#f8f8f8",
    textDark: "#040c18",
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
