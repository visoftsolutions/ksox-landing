import { style } from "@vanilla-extract/css";

export const infoButton = style({
  color: "#040c18",
  borderWidth: "2px",
  fontSize: "16px",
  borderRadius: "9999px",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "4px",
  paddingBottom: "4px",
  borderColor: "#4183E8",
  borderStyle: "solid",
  transition: "background-color",
  transitionDuration: "300ms",
  ":hover": {
    backgroundColor: "#ffffff",
  },
  "@media": {
    "screen and (min-width: 824px)": {
      fontSize: "18px",
    },
  },
});

export const productImage = style({
  borderRadius: "16px",
  transitionDuration: "500ms",
  paddingTop: "40px",
  "@media": {
    "screen and (min-width: 1124px)": {
      paddingTop: "0px",
    },
  },
});

export const box = style({
  paddingBottom: "64px",
  paddingTop: "64px",
  paddingLeft: "40px",
  paddingRight: "40px",
  borderRadius: "16px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#D3D3D3",
  color: "#040c18",
});

export const wrapper = style({
  display: "grid",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 1124px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const textBox = style({
  textAlign: "center",
  "@media": {
    "screen and (min-width: 1124px)": {
      textAlign: "left",
      paddingRight: "40px",
    },
  },
});

export const titleText = style({
  fontSize: "20px",
  "@media": {
    "screen and (min-width: 524px)": {
      fontSize: "24px",
    },
    "screen and (min-width: 824px)": {
      fontSize: "30px",
    },
  },
});

export const subText = style({
  paddingBottom: "20px",
  paddingTop: "20px",
  "@media": {
    "screen and (min-width: 524px)": {
      paddingBottom: "40px",
      paddingTop: "40px",
    },
  },
});
