import { style } from "@vanilla-extract/css";

export const hero = style({
  textAlign: "center",
  "@media": {
    "screen and (min-width: 1024px)": {
      textAlign: "left",
    },
  },
});

export const buttonText1 = style({
  borderWidth: "2px",
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "9999px",
  fontSize: "20px",
  transition: "background-color",
  transitionDuration: "300ms",
  ":hover": {
    backgroundColor: "rgb(17,24,39)",
  },
});
